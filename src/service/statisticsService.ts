import { Op } from 'sequelize';
import { Restaurant } from '../models/Restaurant';

export const calculateRestaurantStatistics = async (latitud: number, longitud: number, radio: number) => {
    const restaurants = await Restaurant.findAll({
        where: {
            lat: {
                [Op.between]: [latitud - radio, latitud + radio],
            },
            lng: {
                [Op.between]: [longitud - radio, longitud + radio],
            },
        },
    });

    const count = restaurants.length;
    const averageRating = count > 0 ? restaurants.reduce((sum, restaurant) => sum + restaurant.rating, 0) / count : 0;
    const ratings = restaurants.map(restaurant => restaurant.rating);
    const standardDeviation = calculateStandardDeviation(ratings, averageRating);

    return {
        count,
        average: averageRating,
        std: standardDeviation,
    };
};

const calculateStandardDeviation = (values: number[], mean: number) => {
    const variance = values.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / values.length;
    return Math.sqrt(variance);
};

