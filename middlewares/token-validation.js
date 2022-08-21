import jwt from 'jsonwebtoken';

const tokenValidation = (token) => {
    const infoToken = jwt.verify(token, process.env.JWT_SECRET);
    return infoToken;
}

export default tokenValidation;