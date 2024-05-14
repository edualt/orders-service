import { OrderEntity } from "../entities/order.entity";

export interface OrderInterface {
    getAllOrders(): Promise<OrderEntity[] | null>;
    getOrderById(id: string): Promise<OrderEntity | null>;
    createOrder(order: OrderEntity): Promise<OrderEntity | null>;
    updateOrder(id: string, order: OrderEntity): Promise<OrderEntity | null>;
    deleteOrder(id: string): Promise<boolean>;
}