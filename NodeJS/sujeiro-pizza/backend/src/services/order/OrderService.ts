import prismaClient from "../../prisma";

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
            data: {
                order_id: order_id,
                product_id: product_id,
                amount
            }
        })

        return order
    }

    async sendOrder({order_id}: OrderCloseRequest) {
        const order = await prismaClient.order.update({
            where: {
                id: order_id
            },
            data: {
                draft: false
            }
        })

        return order;
    }

    async listOrders() {
        const orders = await prismaClient.order.findMany({
            where: {
                draft: false,
                status: false,
            },
            orderBy: {
                created_at: 'desc'
            }
        })

        return orders;
    }

    async detailOrder(order_id: string) {
        const orders = await prismaClient.item.findMany({
            where: {
                order_id: order_id
            },
            include: {
                product: true,
                order: true
            }
        })

        return orders;
    }

    async finishOrder({order_id}: OrderCloseRequest){
        const order = await prismaClient.order.update({
            where: {
                id: order_id
            },
            data: {
                status: true
            }
        })

        return order
    }
}

export {OrderService}