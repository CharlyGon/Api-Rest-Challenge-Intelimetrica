import { Restaurant } from '../models/Restaurant';

/**
 * Get all the restaurants.
 * @returns An array with all the restaurants.
 */
export const getAllRestaurants = async () => {
    try {
        const restaurants = await Restaurant.findAll();
        return restaurants;
    } catch (error) {
        console.error('Error when getting all restaurants:', error);
        return null;
    }
}

/**
 * Get a restaurant by its ID.
 * @param id The ID of the restaurant.
 * @returns The restaurant with the given ID.
 */
export const getRestaurantById = async (id: string) => {
    try {
        const restaurant = await Restaurant.findByPk(id);
        return restaurant;
    } catch (error) {
        console.error('Error when getting the restaurant by ID:', error);
        return null;
    }
}

/**
 * Create a new restaurant.
 * @param restaurant The restaurant to create.
 * @returns The created restaurant.
 */
export const createRestaurant = async (restaurant: Restaurant) => {
    try {
        const newRestaurant = await Restaurant.create(restaurant);
        return newRestaurant;
    } catch (error) {
        console.error('Error when creating the restaurant:', error);
        return null;
    }
}

/**
 * Update a restaurant.
 * @param id The ID of the restaurant.
 * @param restaurant The restaurant data to update.
 * @returns The updated restaurant.
 */
export const updateRestaurant = async (id: string, restaurant: Restaurant) => {
    try {
        const [rows] = await Restaurant.update(restaurant, { where: { id } });
        if (rows === 0) {
            return null;
        }
        return restaurant;
    } catch (error) {
        console.error('Error when updating the restaurant:', error);
        return null;
    }
}

/**
 * Delete a restaurant.
 * @param id The ID of the restaurant to delete.
 * @returns True if the restaurant was deleted, false if not.
 */
export const deleteRestaurant = async (id: string) => {
    try {
        const rows = await Restaurant.destroy({ where: { id } });
        if (rows === 0) {
            return false;
        }
        return true;
    } catch (error) {
        console.error('Error when deleting the restaurant:', error);
        return false;
    }
}
