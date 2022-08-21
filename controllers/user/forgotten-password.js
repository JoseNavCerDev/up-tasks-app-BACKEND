import User from '../../models/users.js';
import generateJWT from '../../helpers/token-generator.js';

const forgottenPassword = async(req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email: email});
    
    if(!user){
        const error = new Error(`Account ${email} is not registered`);
        return res.status(404).json({msg: error.message});
    }

    try {
        user.token = generateJWT(email);
        await user.save();
        return res.json({msg: `An email to ${email} was sended... check your inbox`});
    } catch (error) {
        console.log(error);
    }
}

export default forgottenPassword;