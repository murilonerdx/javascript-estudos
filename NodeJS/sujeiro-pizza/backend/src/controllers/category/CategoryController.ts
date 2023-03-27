import {Request, Response} from "express";
import {DetailsUserService} from "../../services/users/DetailUserService";
import {CategoryService} from "../../services/category/CategoryService";

class CategoryController {
    async create(req: Request, res: Response) {
        const createCategoryService = new CategoryService()
        const {name} = req.body

        const category = await createCategoryService.create(
            {
                name
            }
        )

        return res.json(category)
    }

    async findAll(req: Request, res: Response) {
        const createCategoryService = new CategoryService()

        const categories = await createCategoryService.findAll()

        return res.json(categories)
    }
}

export {CategoryController}