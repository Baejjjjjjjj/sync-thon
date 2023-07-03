import express from "express"
import { jwtMiddleware } from '../config/jwtMiddleware';
import {GetVotes,postBackEndVote,postFrontVote} from "./voteController";
const voteRouter = express.Router();

voteRouter.get('/',jwtMiddleware,GetVotes);
voteRouter.post('/backend',jwtMiddleware,postBackEndVote);
voteRouter.post('/front',jwtMiddleware,postFrontVote);


export default voteRouter