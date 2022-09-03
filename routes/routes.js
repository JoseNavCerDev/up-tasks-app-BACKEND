import express from 'express';
import userRoutes from './user-routes.js';
import projectRouter from './project-routes.js';
import taskRouter from './task-routes.js';

const routes = express.Router();

routes.use('/users', userRoutes);

routes.use('/projects', projectRouter);

routes.use('/tasks', taskRouter);

export default routes;