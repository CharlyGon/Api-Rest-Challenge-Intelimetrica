import express from "express";
import { getAllRestaurantsController, getRestaurantByIdController, createRestaurantController, updateRestaurantController, deleteRestaurantController } from "../controllers/restaurantController";

const router = express.Router();

router.get('/', getAllRestaurantsController);
router.get('/:id(\\d+)', getRestaurantByIdController);
router.post('/', createRestaurantController);
router.put('/:id', updateRestaurantController);
router.delete('/:id', deleteRestaurantController);

export default router;
