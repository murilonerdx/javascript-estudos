import {AuthUserService} from "../../services/users/AuthUserService";
import {Request, Response} from "express";

class AuthController {
    async handle(req: Request, res: Response) {
        const {email, password} = req.body
        const authUserService = new AuthUserService()
        return await authUserService.execute({
            email, password
        }).then(e => res.json(e)).catch(e=> res.status(403 ).sendStatus(403 ))
    }
}

export {AuthController}