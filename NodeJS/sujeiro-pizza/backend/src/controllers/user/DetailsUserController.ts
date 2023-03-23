import {Request, Response} from "express";
import {DetailsUserService} from "../../services/users/DetailUserService";

class DetailsUserController {
    async handle(req: Request, res: Response) {
        const detailsUserService = new DetailsUserService()

        const user_id = req.user_id;
        const user = await detailsUserService.execute(user_id)

        return res.json(user)
    }
}

export {DetailsUserController}