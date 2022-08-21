
const getUserProfile = (req, res) => {
    const { user } = req;
    res.json( user );
}


export default getUserProfile;