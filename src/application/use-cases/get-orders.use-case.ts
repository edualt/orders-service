import { OrderEntity } from "../../domain/entities/order.entity";
import { OrderInterface } from "../../domain/interfaces/order.interface";

export class GetOrdersUseCase {
    constructor(readonly repository: OrderInterface) { }

    async execute(): Promise<OrderEntity[] | null> {
        const orders = await this.repository.getAllOrders();

        if (!orders) {
            return null;
        }
        return orders;
    }
}