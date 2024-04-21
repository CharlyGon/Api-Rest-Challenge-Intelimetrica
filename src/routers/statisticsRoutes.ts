import express from "express";
import { getRestaurantStatisticsController } from "../controllers/statisticsController";

const router = express.Router();
router.get('/', getRestaurantStatisticsController);

export default router;
