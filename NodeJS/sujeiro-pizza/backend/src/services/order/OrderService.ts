import prismaClient from "../../prisma";
import {Order} from "@prisma/client";

interface OrderRequest {
    table: number;
    name: string;
}

interface ItemRequest {
    order_id: string;
    product_id: string;
    amount: number;
}

interface OrderCloseRequest {
    order_id: string;
}

class OrderService {

    async create({table, name}: OrderRequest) {
        const order = await prismaClient.order.create({
            data: {
                table: table,
                name: name
            }
        })
        return order
    }

    async closeOrder({order_id}: OrderCloseRequest) {
        const order = await prismaClient.order.delete({
            where: {
                id: order_id
            }
        })

        return order
    }

    async addItem({order_id, product_id, amount}: ItemRequest) {
        const order = await prismaClient.item.create({
            data:{
                order_id:order_id,
                product_id: product_id,
                amount: amount
            }
        })

        return order
    }
}

export {OrderService}