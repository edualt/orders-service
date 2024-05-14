import { OrderEntity } from "../../domain/entities/order.entity";
import { OrderInterface } from "../../domain/interfaces/order.interface";
import { v4 as uuidv4 } from "uuid";
import signale from "signale";

export class CreateOrderUseCase {
    constructor(readonly repository: OrderInterface) { }

    async execute(total: number, status: string): Promise<OrderEntity | null> {
        const id = uuidv4();
        const order = new OrderEntity(id, total, new Date(), status);
        const createdOrder = await this.repository.createOrder(order);

        if (!createdOrder) {
            signale.error("Failed to create order");
            return null;
        }
        return createdOrder;
    }
}