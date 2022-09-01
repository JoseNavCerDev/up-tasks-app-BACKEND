import Project from '../../models/projects.js';

const newProject = async (req,res) => {
    const project_ = new Project(req.body);
    project_.creator = req.user._id;
    try {
        const storageProject = await project_.save();
        return res.json(storageProject);
    } catch (error) {
        return console.log(error);
    }

};

export default newProject;