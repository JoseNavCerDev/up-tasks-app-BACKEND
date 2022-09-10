import mongoose from 'mongoose';

import Task from '../../models/task.js';
import Project from '../../models/projects.js';

const createTask = async (req, res) => {
    
    //Save in MongoDB the model
    try {        
        const storageProject = await Task.create(req.body);
        return res.json(storageProject);

    } catch (error) {
        return console.log(error);
    }



    //return res.json( { msg : 'From Route create task', body : req.body } );
}

export default createTask;