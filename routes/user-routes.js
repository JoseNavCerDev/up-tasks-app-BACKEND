import express, { Router } from 'express';
const userRouter = express.Router();

import middlewareUserAuth from '../middlewares/check-auth.js';

import createUser from '../controllers/user/create-user.js';
import authenticationUser from '../controllers/user/authentication-user.js';
import confirmationUser from '../controllers/user/confirmation-user.js';
import forgottenPassword from '../controllers/user/forgotten-password.js';
import checkToken from '../controllers/user/check-token.js';
import changePassword from '../controllers/user/change-password.js';
import getUserProfile from '../controllers/user/get-user-profile.js'

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