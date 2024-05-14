import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'orders',
    modelName: 'Order',
    timestamps: false,
})

export default class OrderModel extends Model {
    @Column({
        primaryKey: true,
        type: DataType.STRING,
    })
    declare id: string;

    @Column({
        allowNull: false,
        type: DataType.FLOAT,
    })
    declare total: number;

    @Column({
        allowNull: false,
        type: DataType.DATE,
    })
    declare date: Date;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    declare status: string;    
}