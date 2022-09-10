import Project from '../../models/projects.js';

const findProject = async (req, res, next) => {
    
    //Find project after validate id
    const { id } = req.params;
    const project = await Project.findById(id);
    
    if(!project){
        const error = new Error('Project not found');
        return res.status(404).json({ msg: error.message });
    }
    next();
}

export default findProject;