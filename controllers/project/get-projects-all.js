import Project from '../../models/projects.js';

const getProjectsAll = async (req,res) => {
    const projects = await Project.find().
    where('creator').equals(req.user);
    return res.json(projects);
};

export default getProjectsAll;