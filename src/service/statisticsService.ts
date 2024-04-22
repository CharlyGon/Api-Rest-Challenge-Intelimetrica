import { Op } from 'sequelize';
import { Restaurant } from '../models/Restaurant';
import { ConversionFactors } from '../utils/enums';

export const calculateRestaurantStatistics = async (latitude: number, longitude: number, radius: number) => {
    try {
        const { minLatitude, maxLatitude, minLongitude, maxLongitude } = calculateCoordinatesRange(latitude, longitude, radius);
        const restaurants = await findRestaurantsWithinRange(minLatitude, maxLatitude, minLongitude, maxLongitude);
        const count = restaurants.length;
        const averageRating = calculateAverageRating(restaurants);
        const standardDeviation = calculateStandardDeviation(restaurants.map(restaurant => restaurant.rating), averageRating);

        return {
            count,
            average: averageRating,
            std: standardDeviation,
        };
    } catch (error) {
        console.error('Error al calcular estadísticas del restaurante:', error);
        throw error;
    }
};

const calculateCoordinatesRange = (latitude: number, longitude: number, radius: number) => {
    const degreesLat = radius / ConversionFactors.DEGREES_TO_KM;
    const degreesLng = radius / (ConversionFactors.DEGREES_TO_KM * Math.cos(latitude * ConversionFactors.DEGREES_TO_RADIANS));
    const minLatitude = latitude - degreesLat;
    const maxLatitude = latitude + degreesLat;
    const minLongitude = longitude - degreesLng;
    const maxLongitude = longitude + degreesLng;

    return { minLatitude, maxLatitude, minLongitude, maxLongitude };
};

const findRestaurantsWithinRange = async (minLat: number, maxLat: number, minLng: number, maxLng: number) => {
    return await Restaurant.findAll({
        where: {
            lat: {
                [Op.between]: [minLat, maxLat],
            },
            lng: {
                [Op.between]: [minLng, maxLng],
            },
        },
    });
};

const sumRatings = (restaurants: Restaurant[]) => {
    return restaurants.reduce((acc, restaurant) => acc + restaurant.rating, 0);
};

const calculateAverageRating = (restaurants: Restaurant[]) => {
    const count = restaurants.length;
    const sum = sumRatings(restaurants);
    return count > 0 ? sum / count : 0;
};

const calculateVariance = (values: number[], mean: number) => {
    return values.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / values.length;
};

const calculateStandardDeviation = (values: number[], mean: number) => {
    const variance = calculateVariance(values, mean);
    return Math.sqrt(variance);
};
