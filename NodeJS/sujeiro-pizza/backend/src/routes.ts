import {Router} from 'express';
import {CreateUserController} from './controllers/user/CreateUserController'
import {AuthController} from "./controllers/user/AuthController";
import {DetailsUserController} from "./controllers/user/DetailsUserController";
import {isAuthenticated} from "./middlewares/isAuthenticated";

const router = Router()

router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthController().handle)
router.get('/me', isAuthenticated, new DetailsUserController().handle)


export {router}