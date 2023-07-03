import express from "express"
import {PostLogIn,PostSignUp, GetUsers} from "./userController"
import { jwtMiddleware } from '../config/jwtMiddleware';
const userRouter = express.Router();
userRouter.post('/signup',PostSignUp);
userRouter.post('/login',PostLogIn);
userRouter.get('/board',GetUsers)
export default userRouter