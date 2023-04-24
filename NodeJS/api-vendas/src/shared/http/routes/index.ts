import { Router } from 'express';
import productsRoutes from '@modules/products/routes/products.routes';
import userRoutes from "@modules/users/routes/user.routes";
import sessionsRoutes from "@modules/users/routes/sessions.routes";
import profileRoutes from "@modules/users/routes/profile.routes";

const routes = Router();

routes.use('/products', productsRoutes);
routes.use('/users', userRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/profile', profileRoutes);
export default routes;
