import { Router } from 'express';
import productsRoutes from '@modules/products/routes/products.routes';
import userRoutes from "@modules/users/routes/user.routes";
import sessionsRoutes from "@modules/users/routes/sessions.routes";
import isAuthenticated from "@shared/http/middlewares/isAuthenticated";

const routes = Router();

routes.use('/products', isAuthenticated, productsRoutes);
routes.use('/users', userRoutes);
routes.use('/sessions', sessionsRoutes);

export default routes;
