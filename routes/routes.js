import express from 'express';
import userRoutes from './user-routes.js';
import projectRouter from './project-routes.js';

const routes = express.Router();

routes.use('/users', userRoutes);

routes.use('/projects', projectRouter);

export default routes;