import { Request, Response } from "express";
import { GetOrdersUseCase } from "../../application/use-cases/get-orders.use-case";
import { GetOrderByIdUseCase } from "../../application/use-cases/get-order-by-id.use-case";
import { CreateOrderUseCase } from "../../application/use-cases/create-order.use-case";
import { UpdateOrderUseCase } from "../../application/use-cases/update-order.use-case";
import { DeleteOrderUseCase } from "../../application/use-cases/delete-order.use-case";

export class Controller {
    constructor(
        readonly getOrdersUseCase: GetOrdersUseCase,
        readonly getOrderByIdUseCase: GetOrderByIdUseCase,
        readonly createOrderUseCase: CreateOrderUseCase,
        readonly updateOrderUseCase: UpdateOrderUseCase,
        readonly deleteOrderUseCase: DeleteOrderUseCase
    ) { }

    async getOrders(req: Request, res: Response) {
        const orders = await this.getOrdersUseCase.execute();

        if (!orders) {
            return res.status(404).json({ message: "Orders not found" });
        }
        return res.status(200).json(orders);
    }

    async getOrderById(req: Request, res: Response) {
        const orderId = req.params.id;
        const order = await this.getOrderByIdUseCase.execute(orderId);

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        return res.status(200).json(order);
    }

    async createOrder(req: Request, res: Response) {
        const { total, status } = req.body;
        const order = await this.createOrderUseCase.execute(total, status);

        if (!order) {
            return res.status(400).json({ message: "Failed to create order" });
        }
        return res.status(201).json(order);
    }

    async updateOrder(req: Request, res: Response) {
        const orderId = req.params.id;
        const { total, status } = req.body;
        const order = await this.updateOrderUseCase.execute(orderId, total, status);

        if (!order) {
            return res.status(400).json({ message: "Failed to update order" });
        }
        return res.status(200).json(order);
    }

    async deleteOrder(req: Request, res: Response) {
        const orderId = req.params.id;
        const order = await this.deleteOrderUseCase.execute(orderId);

        if (!order) {
            return res.status(400).json({ message: "Failed to delete order" });
        }
        return res.status(200).json(order);
    }
}
