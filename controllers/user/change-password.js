import User from '../../models/users.js';
import generateJWT from '../../helpers/token-generator.js';

const changePassword = async (req, res) => {
    const { password, token } = req.body;
    const user = await User.findOne({ token });

    if(!user){
        const error = new Error(`Invalid or expired token`);
        return res.status(403).json({msg: error.message});
    }

    try {
        user.password = password;
        user.token = '';
        await user.save();
        return res.json({msg: 'Password changed successfully'});
    } catch (error) {
        console.log(error);
    }
}

export default changePassword;