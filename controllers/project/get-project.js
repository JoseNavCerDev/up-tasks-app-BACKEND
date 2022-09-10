import Project from '../../models/projects.js';

const getProject = async (req,res) => {

    const { id } = req.params;

    const project = await Project.findById(id);   

    return res.status(200).json(project);        
    
};

export default getProject;