import User from '../../models/users.js';
import generateJWT from '../../helpers/token-generator.js';

const confirmationUser = async (req, res) => {    
    const { token } = req.params;    
    const userConfirm = await User.findOne({ token });

    if(!userConfirm){
        const error = new Error(`Invalid Token`);
        return res.status(403).json({msg: error.message});
    }

    try {
        userConfirm.userValidate = true;
        userConfirm.token = "";
        await userConfirm.save();
        return res.json({ msg: "Successfull user validation"});
    } catch (error) {
        console.log(error);
        
    }
}

export default confirmationUser;