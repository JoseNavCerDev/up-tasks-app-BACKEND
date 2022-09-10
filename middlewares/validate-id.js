import mongoose from "mongoose";

const validateIdMongoFormat = async (req, res, next) => {

    const { id } = req.params;
    
    if(!mongoose.isValidObjectId(id)){
        return res.status(400).json( { msg: 'Invalid ID' } );
    }
    next();
}

export default validateIdMongoFormat;