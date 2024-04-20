import { Request, Response } from 'express';
import { Restaurant } from '../models/Restaurant';
import { getAllRestaurants, getRestaurantById, createRestaurant, updateRestaurant, deleteRestaurant } from '../service/restaurantService';

export const getAllRestaurantsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const restaurants = await getAllRestaurants();
        res.json(restaurants);
    } catch (error) {
        console.error('Error al obtener todos los restaurantes:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const getRestaurantByIdController = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const restaurant = await getRestaurantById(id);
        if (!restaurant) {
            res.status(404).json({ message: 'Restaurante no encontrado' });
            return;
        }
        res.json(restaurant);
    } catch (error) {
        console.error('Error al obtener el restaurante por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const createRestaurantController = async (req: Request, res: Response): Promise<void> => {
    try {
        const restaurant: Restaurant = req.body;
        const newRestaurant = await createRestaurant(restaurant);
        res.status(201).json(newRestaurant);
    } catch (error) {
        console.error('Error al crear el restaurante:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }

};

export const updateRestaurantController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const restaurant: Restaurant = req.body;
        const updatedRestaurant = await updateRestaurant(id, restaurant);
        if (!updatedRestaurant) {
            res.status(404).json({ message: 'Restaurante no encontrado' });
            return;
        }
        res.json(updatedRestaurant);
    } catch (error) {
        console.error('Error al actualizar el restaurante:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const deleteRestaurantController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const deleted = await deleteRestaurant(id);
        if (!deleted) {
            res.status(404).json({ message: 'Restaurante no encontrado' });
            return;
        }
        res.json({ message: 'Restaurante eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el restaurante:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
