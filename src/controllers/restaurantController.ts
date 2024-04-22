import { Request, Response } from 'express';
import { Restaurant } from '../models/Restaurant';
import { getAllRestaurants, getRestaurantById, createRestaurant, updateRestaurant, deleteRestaurant } from '../service/restaurantCrudService';

export const getAllRestaurantsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const restaurants = await getAllRestaurants();
        res.json(restaurants);
    } catch (error) {
        console.error('Error when getting all restaurants:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getRestaurantByIdController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const restaurant = await getRestaurantById(id);
        if (!restaurant) {
            res.status(404).json({ message: 'Restaurant not found' });
            return;
        }
        res.json(restaurant);
    } catch (error) {
        console.error('Error when getting the restaurant by ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const createRestaurantController = async (req: Request, res: Response): Promise<void> => {
    try {
        const restaurant: Restaurant = req.body;
        const newRestaurant = await createRestaurant(restaurant);
        res.status(201).json(newRestaurant);
    } catch (error) {
        console.error('Error when creating the restaurant:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

};

export const updateRestaurantController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const restaurant: Restaurant = req.body;
        const updatedRestaurant = await updateRestaurant(id, restaurant);
        if (!updatedRestaurant) {
            res.status(404).json({ message: 'Restaurant not found UPDATE' });
            return;
        }
        res.json(updatedRestaurant);
    } catch (error) {
        console.error('Error when updating the restaurant:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteRestaurantController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const deleted = await deleteRestaurant(id);
        if (!deleted) {
            res.status(404).json({ message: 'Restaurant not found' });
            return;
        }
        res.json({ message: 'Restaurant removed correctly' });
    } catch (error) {
        console.error('Error when deleting the restaurant:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
