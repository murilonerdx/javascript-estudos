import {Request, response, Response} from 'express'
import {CreateUserService} from "../../services/users/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const {name, email, password} = req.body
        const createUserService = new CreateUserService()

        const user = await createUserService.create({
            name, email, password
        })
        return res.json({ok: true})
    }
}

export {CreateUserController}