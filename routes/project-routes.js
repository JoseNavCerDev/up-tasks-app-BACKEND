import express from 'express';

import checkAuth from '../middlewares/check-auth.js';
import validateIdMongoFormat from '../middlewares/validate-id.js';
import findProject from '../middlewares/project/find-project.js';
import privilegesProject from '../middlewares/project/privileges-project.js';

//Controllers Projects
import newProject from '../controllers/project/new-project.js';
import getProject from '../controllers/project/get-project.js';
import getProjectsAll from '../controllers/project/get-projects-all.js';
import editProject from '../controllers/project/edit-project.js';
import deleteProjectCollaborator from '../controllers/project/delete-project-collaborator.js';
import deleteProject from '../controllers/project/delete-project.js';
import addProjectCollaborator from '../controllers/project/add-project-collaborator.js';


/* ---------------------------------------------------------------------------------------------------- */

const projectRouter = express.Router();

/* ---------------------------------------------------------------------------------------------------- */



//Get projects (ALL)
projectRouter.get('/', checkAuth, getProjectsAll);

//New project
projectRouter.post('/new-project', checkAuth, newProject);

//Get project (Single)
projectRouter.get('/:id', checkAuth, validateIdMongoFormat, findProject, privilegesProject, getProject);

//Edit project
projectRouter.put('/:id', checkAuth, editProject);

//Delete project
projectRouter.delete('/:id', checkAuth, deleteProject);

//Add Collaborator
projectRouter.post('/add-collaborator/:id', checkAuth, addProjectCollaborator);

//Delete Collaborator
projectRouter.post('/delete-collaborator/:id', checkAuth, deleteProjectCollaborator);


export default projectRouter;



