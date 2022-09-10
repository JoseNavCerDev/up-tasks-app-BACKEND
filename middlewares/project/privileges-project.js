import Project from '../../models/projects.js';

const privilegesProject = async (req,res,next) => {

    const { id } = req.params;

    const project = await Project.findById(id);

    if(project.creator.toString() !== req.user._id.toString()){
        const error = new Error('Unauthorized');
        return res.status(401).json( { msg: error.message } );
    }

    next();

}

export default privilegesProject;