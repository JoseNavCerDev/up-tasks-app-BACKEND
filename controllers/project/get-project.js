import mongoose from 'mongoose';

import Project from '../../models/projects.js';

const getProject = async (req,res) => {
    const { id } = req.params;
    
    //validate id
    if(!mongoose.isValidObjectId(id)){
        return res.status(400).json( { msg: 'Invalid ID' } );
    }

    //Find project after validate id
    const project = await Project.findById(id);

    //validate id project exists
    if(!project){
        const error = new Error('Project not founded');
        return res.status(404).json({ msg: error.message });
    }
    
    //validate the user is the creator of project (privilegs)
    if(project.creator.toString() !== req.user._id.toString()){
        const error = new Error('Unauthorized');
        return res.status(401).json( { msg: error.message } );
    }
    return res.status(200).json(project);
        
    
};

export default getProject;