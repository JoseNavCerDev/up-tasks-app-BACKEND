import User from '../../models/users.js';
import generateJWT from '../../helpers/token-generator.js';

const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        user.token = generateJWT();
        const userSaved = await user.save();

        res.json({
            msg: 
            `We send you a confirm email in the account ${req.body.email}`
        });
    } catch (error) {
        const misstake = new Error("Ops this email was already register");
        error.keyValue && 
            res.status(400).json({
                msg: misstake.message
            });
        console.log(error);
    }
    
}

export default createUser;