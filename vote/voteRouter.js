import express from "express"
import { jwtMiddleware } from '../config/jwtMiddleware';
import {GetFinalVotes,GetVotes,postBackEndVote,postFrontVote} from "./voteController";
const voteRouter = express.Router();

voteRouter.get('/',jwtMiddleware,GetVotes);
voteRouter.get('/votes',jwtMiddleware,GetFinalVotes);
voteRouter.post('/backend',jwtMiddleware,postBackEndVote);
voteRouter.post('/front',jwtMiddleware,postFrontVote);


export default voteRouter