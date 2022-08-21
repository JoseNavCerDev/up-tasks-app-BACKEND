import User from '../../models/users.js';

const checkToken = async (req, res) => {
    const { token } = req.params;
    const user = await User.findOne({ token });

    if(!user){
        const error = new Error(`Invalid Token`);
        return res.status(403).json({msg: error.message});
    }
    return res.json({msg: 'Validate Token'});

}

export default checkToken;