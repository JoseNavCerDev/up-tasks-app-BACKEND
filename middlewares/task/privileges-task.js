import Task from '../../models/task.js';
import Project from '../../models/projects.js';

const privilegesTask = async (req,res,next) => {

    const { id } = req.params;

    const task = await Task.findById(id);
    const project = await Project.findById(task.project);

    if(project.creator.toString() !== req.user._id.toString()){
        const error = new Error('Unauthorized');
        return res.status(403).json( { msg: error.message } );
    }  

    next();

}

export default privilegesTask;