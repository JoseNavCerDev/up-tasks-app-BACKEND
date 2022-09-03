import Task from '../../models/task.js';

const createTask = async (req, res) => {

    /* const newTask = new Task(req.body);
    project_.creator = req.user._id;
    try {
        const storageProject = await project_.save();
        return res.json(storageProject);
    } catch (error) {
        return console.log(error);
    } */

    return res.json( { msg : 'From Route create task' } );
}

export default createTask;