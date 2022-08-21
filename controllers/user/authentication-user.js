import User from '../../models/users.js';
import generateJWT from '../../helpers/token-generator.js';

const authenticationUser = async (req, res) => {
    const { email, password } = req.body;
    
    //Check user exist
    const user = await User.findOne({ email: email});
    if(!user){
        const error = new Error(`User ${email} is not registered`);
        return res.status(404).json({msg: error.message});
    }

    //Check if user is confirmed
    if(!user.userValidate){
        const error = new Error(`User ${email} is not validated`);
        return res.status(403).json({msg: error.message});
    }

    //Check their password
    if(await user.checkPassword(password)){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateJWT( user._id )
        });
    } else {
        const error = new Error(`Password is wrong`);
        return res.status(403).json({msg: error.message});
    }    
}

export default authenticationUser;