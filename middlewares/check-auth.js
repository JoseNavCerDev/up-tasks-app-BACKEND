import jwt from 'jsonwebtoken';
import newModel from '../models/user.js';

import tokenValidation from './token-validation.js';

const checkAuth = async(req, res, next) => {
    let token ;

    if(req.headers.authorization && 
    req.headers.authorization.startsWith('Bearer'))
    {
        try {            
            token = req.headers.authorization.split(' ')[1];
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

            console.log(decodedToken.id);
            
            req.user = await newModel.findById(decodedToken.id).
                select('-password -userValidate -token -createdAt -updatedAt -__v');

            return next();

        } catch (error) {
            return res.status(404).json({ msg: 'Something was wrong' });
        }
    } 

    if(!token){
        return res.status(401).json({ msg : `Invalid Token` });
    }

    next();
}

export default checkAuth;