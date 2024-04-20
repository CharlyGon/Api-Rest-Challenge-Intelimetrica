import express from "express";
import { getAllRestaurants, getRestaurantById, createRestaurant, updateRestaurant, deleteRestaurant } from "../controllers/restaurantController";

const router = express.Router();

router.get('/restaurants', getAllRestaurants);
router.get('/restaurants/:id', getRestaurantById);
router.post('/restaurants', createRestaurant);
router.put('/restaurants/:id', updateRestaurant);
router.delete('/restaurants/:id', deleteRestaurant);

export default router;
