import signale from "signale";

import OrderModel from "../../database/mysql/models/order.model"; 
import { OrderEntity } from "../../domain/entities/order.entity";
import { OrderInterface } from "../../domain/interfaces/order.interface";

export class MysqlRepository implements OrderInterface {
    async getAllOrders(): Promise<OrderEntity[] | null> {
        try {
            const orders = await OrderModel.findAll();
            if (!orders) {
                return null;
            }
            return orders;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }

    async getOrderById(id: string): Promise<OrderEntity | null> {
        try {
            const order = await OrderModel.findOne({ where: { id } });
            if (!order) {
                return null;
            }
            return order;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }

    async createOrder(order: OrderEntity): Promise<OrderEntity | null> {
        try {
            const createdOrder = await OrderModel.create({
                id: order.id,
                total: order.total,
                date: order.date,
                status: order.status
            });
            return createdOrder;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }

    async updateOrder(id: string, order: OrderEntity): Promise<OrderEntity | null> {
        try {
            const updatedOrder = await OrderModel.update({
                total: order.total,
                date: order.date,
                status: order.status
            }, { where: { id } });
            if (!updatedOrder) {
                return null;
            }
            return order;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }

    async deleteOrder(id: string): Promise<boolean> {
        try {
            const deletedOrder = await OrderModel.destroy({ where: { id } });
            if (!deletedOrder) {
                return false;
            }
            return true;
        } catch (error) {
            signale.error(error);
            return false;
        }
    }
}
