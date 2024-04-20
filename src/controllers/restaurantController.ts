import { Request, Response } from 'express';
import { Restaurant } from '../models/Restaurant';

export const getAllRestaurants = async (req: Request, res: Response): Promise<void> => {
    try {
        const restaurants = await Restaurant.findAll();
        res.json(restaurants);
    } catch (error) {
        console.error('Error al obtener todos los restaurantes:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const getRestaurantById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const restaurant = await Restaurant.findByPk(id);
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

export const createRestaurant = async (req: Request, res: Response): Promise<void> => {
};

export const updateRestaurant = async (req: Request, res: Response): Promise<void> => {
};

export const deleteRestaurant = async (req: Request, res: Response): Promise<void> => {
};
