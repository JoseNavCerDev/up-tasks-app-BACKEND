import express from 'express';

import checkAuth from '../middlewares/check-auth.js';

import changeState from '../controllers/task/change-state-task.js';
import createTask from '../controllers/task/create-task.js';
import deleteTask from '../controllers/task/delete-task.js';
import getTask from '../controllers/task/get-task.js';
import updateTask from '../controllers/task/update-task.js';

const taskRouter = express.Router();

//Change task state
taskRouter.post('/:id', checkAuth, changeState);

//Create new task
taskRouter.post('/', checkAuth, createTask);

//Delete task
taskRouter.delete('/:id', checkAuth, deleteTask);

//Get task (Single)
taskRouter.get('/:id', checkAuth, getTask);

//Update task
taskRouter.put('/:id', checkAuth, updateTask);


export default taskRouter;

