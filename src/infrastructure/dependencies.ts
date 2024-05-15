import { MysqlRepository } from "./repositories/mysql.repository";
import { Controller } from "./controllers/controller";

import { GetOrdersUseCase } from "../application/use-cases/get-orders.use-case";
import { GetOrderByIdUseCase } from "../application/use-cases/get-order-by-id.use-case";
import { CreateOrderUseCase } from "../application/use-cases/create-order.use-case";
import { UpdateOrderUseCase } from "../application/use-cases/update-order.use-case";
import { DeleteOrderUseCase } from "../application/use-cases/delete-order.use-case";

const mySqlRepository = new MysqlRepository();

const getOrdersUseCase = new GetOrdersUseCase(mySqlRepository);
const getOrderByIdUseCase = new GetOrderByIdUseCase(mySqlRepository);
const createOrderUseCase = new CreateOrderUseCase(mySqlRepository);
const updateOrderUseCase = new UpdateOrderUseCase(mySqlRepository);
const deleteOrderUseCase = new DeleteOrderUseCase(mySqlRepository);

export const controller = new Controller(
    getOrdersUseCase,
    getOrderByIdUseCase,
    createOrderUseCase,
    updateOrderUseCase,
    deleteOrderUseCase
);