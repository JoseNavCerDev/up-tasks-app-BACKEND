import express from 'express';

//General middlewares
import checkAuth from '../middlewares/check-auth.js';
import validateIdMongoFormat from '../middlewares/validate-id.js';

//Task middlewares
import findTask from '../middlewares/task/find-task.js';
import privilegesTask from '../middlewares/task/privileges-task.js';

//Methods post middlewares
import getTask from '../controllers/task/get-task.js';



import changeState from '../controllers/task/change-state-task.js';
import createTask from '../controllers/task/create-task.js';
import deleteTask from '../controllers/task/delete-task.js';
import updateTask from '../controllers/task/update-task.js';

const taskRouter = express.Router();

//Change task state
//taskRouter.put('/:id', checkAuth, validateIdMongoFormat, privilegesProject, findTask, changeState);

//Create new task
//taskRouter.post('/', checkAuth, createTask);

//Delete task
//taskRouter.delete('/:id', checkAuth, validateIdMongoFormat, privilegesProject, findTask, deleteTask);

//Get task (Single)
taskRouter.get('/:id', checkAuth, validateIdMongoFormat, findTask, privilegesTask, getTask);

//Update task
//taskRouter.put('/:id', checkAuth, validateIdMongoFormat, findTask, privilegesTask, updateTask);


export default taskRouter;

