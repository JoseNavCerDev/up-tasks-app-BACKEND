import mongoose from "mongoose";
import Project from "../../models/projects.js";

const editProject = async (req,res) => {
    const { id } = req.params;
    
    //validate id
    if(!mongoose.isValidObjectId(id)){
        const error = new Error('Invalid ID');
        return res.status(400).json( { msg: error.message } );
    }

    //Find project after validate id
    const project = await Project.findById(id);

    //validate id project exists
    if(!project){
        const error = new Error('Project not founded');
        return res.status(404).json({ msg : error.message });
    }
    
    //validate the user is the creator of project (privilegs)
    if(project.creator.toString() !== req.user._id.toString()){
        const error = new Error('Unauthorized');
        return res.status(401).json( { msg : error.message } );
    }
    
    try {        

        project.name = req.body.name || project.name;
        project.client = req.body.client || project.client;
        project.description = req.body.description || project.description;

        const projectStoraged = await project.save();
        return res.status(200).json( { msg: 'Success Updated', project: projectStoraged } );
    } catch (error) {
        console.log(error);
    }

};

export default editProject;