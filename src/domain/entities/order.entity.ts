export class OrderEntity {
    public id: string;
    public total: number;
    public date: Date;
    public status: string;

    constructor(
        id: string,
        total: number,
        date: Date,
        status: string
    ) {
        this.id = id;
        this.total = total;
        this.date = date;
        this.status = status;
    }
}