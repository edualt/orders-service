import express from "express";
import { controller } from "../dependencies";

export const router = express.Router();

router.get('/', controller.getOrders.bind(controller));
router.get('/:id', controller.getOrderById.bind(controller));
router.post('/', controller.createOrder.bind(controller));
router.put('/:id', controller.updateOrder.bind(controller));
router.delete('/:id', controller.deleteOrder.bind(controller));