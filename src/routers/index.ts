import express from "express";
import restaurantRoutes from "./restaurantRoutes";
import statisticsRoutes from "./statisticsRoutes";

const router = express.Router();

router.use('/restaurants', restaurantRoutes);
router.use('/restaurants/statistics', statisticsRoutes);

export default router;
