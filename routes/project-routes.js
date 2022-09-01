import express, { Router } from 'express';
const projectRouter = express.Router();

import checkAuth from '../middlewares/check-auth.js';

import newProject from '../controllers/project/new-project.js';
import getTask from '../controllers/project/get-task.js';
import getProject from '../controllers/project/get-project.js';
import getProjectsAll from '../controllers/project/get-projects-all.js';
import editProject from '../controllers/project/edit-project.js';
import deleteProjectCollaborator from '../controllers/project/delete-project-collaborator.js';
import deleteProject from '../controllers/project/delete-project.js';
import addProjectCollaborator from '../controllers/project/add-project-collaborator.js';

//Get projects (ALL)
projectRouter.get('/', checkAuth, getProjectsAll);

//New project
projectRouter.post('/new-project', checkAuth, newProject);

//Get project (Single)
projectRouter.get('/:id', checkAuth, getProject);

//Edit project
projectRouter.put('/:id', checkAuth, editProject);

//Delete project
projectRouter.delete('/:id', checkAuth, deleteProject);

//Add Collaborator
projectRouter.post('/add-collaborator/:id', checkAuth, addProjectCollaborator);

//Delete Collaborator
projectRouter.post('/delete-collaborator/:id', checkAuth, deleteProjectCollaborator);

//Get Tasks
projectRouter.get('/tasks:/id', checkAuth, getTask );


export default projectRouter;



