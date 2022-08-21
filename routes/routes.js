import express from 'express';
import userRoutes from './user-routes.js';

const routes = express.Router();

routes.use('/users', userRoutes);

export default routes;