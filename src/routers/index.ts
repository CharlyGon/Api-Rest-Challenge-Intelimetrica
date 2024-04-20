import express from "express";
import { getAllRestaurantsController, getRestaurantByIdController, createRestaurantController, updateRestaurantController, deleteRestaurantController } from "../controllers/restaurantController";

const router = express.Router();

router.get('/restaurants', getAllRestaurantsController);
router.get('/restaurants/:id', getRestaurantByIdController);
router.post('/restaurants', createRestaurantController);
router.put('/restaurants/:id', updateRestaurantController);
router.delete('/restaurants/:id', deleteRestaurantController);

export default router;
