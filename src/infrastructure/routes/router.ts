import express from "express";
import { controller } from "../dependencies";

export const router = express.Router();

router.get('/orders', controller.getOrders.bind(controller));
router.get('/orders/:id', controller.getOrderById.bind(controller));
router.post('/orders', controller.createOrder.bind(controller));
router.put('/orders/:id', controller.updateOrder.bind(controller));