import Task from '../../models/task.js';

const findTask = async (req, res, next) => {
    
    //Find project after validate id
    const { id } = req.params;
    const task = await Task.findById(id);
    
    if(!task){
        const error = new Error('Task not found');
        return res.status(404).json({ msg: error.message });
    }
    next();
}

export default findTask;