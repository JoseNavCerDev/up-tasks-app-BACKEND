import newModel from '../models/user.js';
import generateJWT from '../helpers/token-generator.js';


const createUser = async (req, res) => {
    try {
        const user = new newModel(req.body);
        user.token = generateJWT();
        const userSaved = await user.save();

        console.log(user.token);

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


const authenticationUser = async (req, res) => {
    const { email, password } = req.body;
    
    //Check user exist
    const user = await newModel.findOne({ email: email});
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


const confirmationUser = async (req, res) => {    
    const { token } = req.params;    
    const userConfirm = await newModel.findOne({ token });

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

const forgottenPassword = async(req, res) => {
    const { email } = req.body;
    const user = await newModel.findOne({ email: email});
    
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


const checkToken = async (req, res) => {
    const { token } = req.params;
    const user = await newModel.findOne({ token });

    if(!user){
        const error = new Error(`Invalid Token`);
        return res.status(403).json({msg: error.message});
    }
    return res.json({msg: 'Validate Token'});

}

const changePassword = async (req, res) => {
    const { password, token } = req.body;
    const user = await newModel.findOne({ token });

    if(!user){
        const error = new Error(`Invalid or expired token`);
        return res.status(403).json({msg: error.message});
    }

    try {
        user.password = password;
        user.token = '';
        await user.save();
        console.log(user);
        return res.json({msg: 'Password changed successfully'});
    } catch (error) {
        console.log(error);
    }
}


const getUserProfile = (req, res) => {
    const { user } = req;
    res.json( user );
}


export {
    createUser,
    authenticationUser,
    confirmationUser,
    forgottenPassword,
    checkToken,
    changePassword,
    getUserProfile
};