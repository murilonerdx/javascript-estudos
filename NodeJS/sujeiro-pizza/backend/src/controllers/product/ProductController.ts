import {Request, Response} from "express";
import {ProductService} from "../../services/product/ProductService";

class ProductController {
    async create(req: Request, res: Response) {
        const productService = new ProductService()
        const {name, price, banner, description, category_id} = req.body

        if (!req.file && !category_id) {
            throw new Error("Precisa enviar uma imagem!")
        }
        {
            const {originalname, filename: banner } = req.file

            const product = await productService.create(
                {
                    name, price, banner, description, category_id
                }
            )

            return res.json(product)
        }
    }

    async findAll(req: Request, res: Response) {
        const productService = new ProductService()

        const products = await productService.findAll()

        return res.json(products)
    }
}

export {ProductController}