import {Router} from 'express';
import {CreateUserController} from './controllers/user/CreateUserController'
import {AuthController} from "./controllers/user/AuthController";
import {DetailsUserController} from "./controllers/user/DetailsUserController";
import {isAuthenticated} from "./middlewares/isAuthenticated";
import {CategoryController} from "./controllers/category/CategoryController";
import {ProductController} from "./controllers/product/ProductController";
import multer from "multer";

import uploadConfig from './config/multer'

const router = Router()

const upload = multer(uploadConfig.upload("./tmp"));

router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthController().handle)
router.get('/me', isAuthenticated, new DetailsUserController().handle)
router.post('/category', isAuthenticated, new CategoryController().create)
router.get('/category', isAuthenticated, new CategoryController().findAll)
router.get('/product', isAuthenticated, new ProductController().findAll)
router.post('/product', isAuthenticated, upload.single('file'), new ProductController().create)

export {router}