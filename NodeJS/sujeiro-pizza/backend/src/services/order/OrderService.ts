import prismaClient from "../../prisma";
import {Order} from "@prisma/client";

interface OrderRequest {
    table: number;
    name: string;
}

interface OrderCloseRequest{
    order_id: string;
}

class OrderService {

    async create({table, name}: OrderRequest){
        const order = await prismaClient.order.create({
            data:{
                table: table,
                name: name
            }
        })
        return order
    }

    async closeOrder({order_id}: OrderCloseRequest){
        const order = await prismaClient.order.delete({
            where:{
                id: order_id
            }
        })

        return order
    }
}

export {OrderService}