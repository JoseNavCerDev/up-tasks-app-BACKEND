import express, { Router } from 'express';
const userRouter = express.Router();

import middlewareUserAuth from '../middlewares/check-auth.js';

import { 
    createUser,
    authenticationUser,
    confirmationUser,
    forgottenPassword,
    checkToken,
    changePassword,
    getUserProfile 
} from '../controllers/user-controller.js'

//Create USER
userRouter.post('/', createUser );

//Authentication USER
userRouter.post('/auth', authenticationUser);

//Confirmation USER
userRouter.get('/confirmation/:token', confirmationUser);

//Forgotten Password
userRouter.post('/forgotten-pass', forgottenPassword);

//Validate token for Changed password
userRouter.get('/forgotten-pass/:token', checkToken);

//Change password postJWT Validated
userRouter.post('/change-pass', changePassword);

//Return user profile with JWT
userRouter.get('/profile/:token', middlewareUserAuth, getUserProfile);

export default userRouter;