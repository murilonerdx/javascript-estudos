import {OrderService} from "../../services/order/OrderService";
import {Request, Response} from "express";
import prismaClient from "../../prisma";


class OrderController{
    async create(req:Request, res: Response){
        const {table, name} = req.body;

        const orderService  = new OrderService()
        const order = await orderService.create({
            table,
            name
        })

        return res.json(order)
    }

    async delete(req:Request, res:Response){
        const order_id = req.query.order_id as string;

        const removeOrder = new OrderService()
        const order = removeOrder.closeOrder({
            order_id
        })


        return res.json(order);
    }


}

export {OrderController}