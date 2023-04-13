import {Request, response, Response} from "express";
import {ProductService} from "../../services/product/ProductService";

class ProductController {
    async create(req: Request, res: Response) {
        const {name, price, description, category_id} = req.body;

        const createProductService = new ProductService()

        if (!req.file) {
            throw new Error("error upload file")
        } else {

            const {originalname, filename: banner} = req.file;

            return await createProductService.create({
                name,
                price,
                description,
                banner,
                category_id
            }).then(response => res.json(response)).catch(() => res.status(401))
        }
    }

    async findAllByCategoryId(req: Request, res: Response) {
        const {id} = req.params

        if(!id){
            throw new Error("Precisa de um category_id")
        }

        const productService = new ProductService()
        const product = await productService.findAllByCategoryId(id)
        return res.json(product)
    }

    async findAll(req: Request, res: Response) {
        const productService = new ProductService()

        const products = await productService.findAll()

        return res.json(products)
    }
}

export {ProductController}