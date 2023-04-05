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

    async addItem(req:Request, res:Response){
        const {order_id, product_id, amount} =req.body
        const orderService = new OrderService()

        const orderAddItem = await orderService.addItem({
            order_id,
            product_id,
            amount
        })

        return res.json(orderAddItem)
    }

    async removeItem(req:Request, res:Response){
        const {order_id} =req.body
        const orderService = new OrderService()

        const orderClose = await orderService.closeOrder({
            order_id
        })

        return res.json(orderClose)
    }

    async sendOrder(req:Request, res:Response){
        const {order_id} =req.body
        const orderService = new OrderService()

        const orderClose = await orderService.sendOrder({
            order_id
        })

        return res.json(orderClose)
    }

    async findAllOrders(req:Request, res:Response){
        const orderService = new OrderService()

        const orders = await orderService.listOrders()
        return res.json(orders)
    }

    async detailOrder(req:Request, res:Response){
        const {order_id} = req.body
        const orderService = new OrderService()

        const orders = await orderService.detailOrder(order_id)
        return res.json(orders)
    }

    async finishOrder(req:Request, res:Response){
        const {order_id} = req.body
        const orderService = new OrderService()

        const orders = await orderService.finishOrder(order_id)
        return res.json(orders)
    }


}

export {OrderController}