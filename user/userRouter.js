import express from "express"
import {PostLogIn,PostSignUp, GetUsers,GetUser} from "./userController"
import { jwtMiddleware } from '../config/jwtMiddleware';
const userRouter = express.Router();
userRouter.post('/signup',PostSignUp);
userRouter.post('/login',PostLogIn);
userRouter.get('/board',GetUsers);
userRouter.get('/',jwtMiddleware,GetUser);
export default userRouter