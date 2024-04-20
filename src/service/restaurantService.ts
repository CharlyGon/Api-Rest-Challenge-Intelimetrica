import { Restaurant } from '../models/Restaurant';

export const getAllRestaurants = async () => {
    try {
        const restaurants = await Restaurant.findAll();
        return restaurants;
    } catch (error) {
        console.error('Error al obtener todos los restaurantes:', error);
        return null;
    }
}

export const getRestaurantById = async (id: string) => {
    try {
        const restaurant = await Restaurant.findByPk(id);
        return restaurant;
    } catch (error) {
        console.error('Error al obtener el restaurante por ID:', error);
        return null;
    }
}

export const createRestaurant = async (restaurant: Restaurant) => {
    try {
        const newRestaurant = await Restaurant.create(restaurant);
        return newRestaurant;
    } catch (error) {
        console.error('Error al crear el restaurante:', error);
        return null;
    }
}

export const updateRestaurant = async (id: string, restaurant: Restaurant) => {
    try {
        const [rows] = await Restaurant.update(restaurant, { where: { id } });
        if (rows === 0) {
            return null;
        }
        return restaurant;
    } catch (error) {
        console.error('Error al actualizar el restaurante:', error);
        return null;
    }
}

export const deleteRestaurant = async (id: string) => {
    try {
        const rows = await Restaurant.destroy({ where: { id } });
        if (rows === 0) {
            return false;
        }
        return true;
    } catch (error) {
        console.error('Error al eliminar el restaurante:', error);
        return false;
    }
}
