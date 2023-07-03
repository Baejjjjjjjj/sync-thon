import express from "express"
import {PostSignUp} from "./userController"

const userRouter = express.Router();
userRouter.post('/signup',PostSignUp);

export default userRouter