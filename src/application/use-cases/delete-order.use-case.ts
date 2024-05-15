import { OrderInterface } from "../../domain/interfaces/order.interface";
import signale from "signale";

export class DeleteOrderUseCase {
    constructor(readonly repository: OrderInterface) { }

    async execute(id: string): Promise<boolean> {
        const deletedOrder = await this.repository.deleteOrder(id);

        if (!deletedOrder) {
            signale.error("Failed to delete order");
            return false;
        }
        return true;
    }
}