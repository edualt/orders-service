import { OrderEntity } from "../../domain/entities/order.entity";
import { OrderInterface } from "../../domain/interfaces/order.interface";
import signale from "signale";

export class UpdateOrderUseCase {
    constructor(readonly repository: OrderInterface) { }

    async execute(id: string, total: number, status: string): Promise<OrderEntity | null> {
        const order = new OrderEntity(id, total, new Date(), status);
        const updatedOrder = await this.repository.updateOrder(id, order);

        if (!updatedOrder) {
            signale.error("Failed to update order");
            return null;
        }
        return updatedOrder;
    }
}