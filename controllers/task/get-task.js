import Task from "../../models/task.js";

const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const taskGetting = await Task.findById(id);
        return res.status(200).json( { msg : "Ok", task : taskGetting } );
    } catch (error) {
        console.log(error);
        const error_ = new Error('Something is wrong');
        return res.status(404).json( { msg : error_.message } );
    }
}

export default getTask;