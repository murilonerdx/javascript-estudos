import {Request, Response} from 'express'
import {CreateUserService} from "../../services/users/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const {name, email, password} = req.body
        const createUserService = new CreateUserService()

        return await createUserService.create({
            name, email, password
        }).then(e => res.json(e)).catch(e => res.status(401).sendStatus(401))
    }
}

export {CreateUserController}