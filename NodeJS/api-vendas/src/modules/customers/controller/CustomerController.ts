import { Request, Response } from 'express';
import CustomerService from "@modules/customers/services/CustomerService";

export default class CustomersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCustomers = new CustomerService();

    const customers = await listCustomers.findAll();

    return response.json(customers);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showCustomer = new CustomerService();

    const customer = await showCustomer.findById({ id });

    return response.json(customer);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createCustomer = new CustomerService();

    const customer = await createCustomer.create({
      name,
      email,
    });

    return response.json(customer);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;
    const { id } = request.params;

    const updateCustomer = new CustomerService();

    const customer = await updateCustomer.update({
      id,
      name,
      email,
    });

    return response.json(customer);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCustomer = new CustomerService();

    await deleteCustomer.delete({ id });

    return response.json([]);
  }
}
