import {Request, Response} from 'express';
import ProductService from '../services/ProductService';


export default class ProductsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProducts = new ProductService();

    const products = await listProducts.findAll();

    return response.json(products);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;

    const showProduct = new ProductService();

    const product = await showProduct.show(id);

    return response.json(product);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {name, price, quantity} = request.body;

    const createProduct = new ProductService();

    const product = await createProduct.create({
      name,
      price,
      quantity,
    });

    return response.json(product);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {name, price, quantity} = request.body;
    const {id} = request.params;

    const updateProduct = new ProductService();

    const product = await updateProduct.update(id, {
      name,
      price,
      quantity,
    });

    return response.json(product);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;

    const deleteProduct = new ProductService();

    await deleteProduct.delete(id);

    return response.json([]);
  }
}
