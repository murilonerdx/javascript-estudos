import {OrderService} from "../../services/order/OrderService";
import {Request, Response} from "express";
import prismaClient from "../../prisma";


class OrderController{
    async create(req:Request, res: Response){
        const {table, name} = req.body;

        const orderService  = new OrderService()
        return await orderService.create({
            table,
            name
        }).then(response => res.json(response)).catch(() => res.status(500).json({
            msg: "A Mesa já está ocupada"
        }))

    }

    async delete(req:Request, res:Response){
        const order_id = req.body.order_id;

        const removeOrder = new OrderService()
        const order = removeOrder.closeOrder({
            order_id
        })


        return res.json(order);
    }

    async addItem(req:Request, res:Response){
        const { order_id, product_id, amount } = req.body;

        const addItem = new OrderService();

        const order = await addItem.addItem({
            order_id,
            product_id,
            amount
        })

        return res.json(order);
    }

    async removeItem(req:Request, res:Response){
        const {order_id} = req.body
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
        const order_id = req.query.order_id as string;

        const detailOrderService = new OrderService();

        const orders = await detailOrderService.detailOrder(
            order_id
        )

        return res.json(orders);
    }

    async finishOrder(req:Request, res:Response){
        const {order_id} = req.body

        const orderService = new OrderService()
        const orders = await orderService.finishOrder(order_id)
        return res.json(orders)
    }
}

export {OrderController}