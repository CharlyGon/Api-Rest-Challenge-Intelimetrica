import { Request, Response } from 'express';
import { calculateRestaurantStatistics } from '../service/statisticsService';

export const getRestaurantStatisticsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { latitud, longitud, radio } = req.query;
        if (!latitud || !longitud || !radio) {
            res.status(400).json({ error: 'Latitude, longitude and radius parameters are mandatory' });
            return;
        }

        const statistics = await calculateRestaurantStatistics(Number(latitud), Number(longitud), Number(radio));
        res.json(statistics);
    } catch (error) {
        console.error('Error retrieving restaurant statistics:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
