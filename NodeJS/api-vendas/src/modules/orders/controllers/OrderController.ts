import { Request, Response } from 'express';
import OrderService from "@modules/orders/typeorm/service/OrderService";

export default class OrdersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showOrder = new OrderService();

    const order = await showOrder.show({ id });

    return response.json(order);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { customer_id, products } = request.body;

    const createOrder = new OrderService();

    const order = await createOrder.create({
      customer_id,
      products,
    });

    return response.json(order);
  }
}
