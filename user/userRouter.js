import express from "express"
import {PostLogIn,PostSignUp} from "./userController"

const userRouter = express.Router();
userRouter.post('/signup',PostSignUp);
userRouter.post('/login',PostLogIn);
export default userRouter