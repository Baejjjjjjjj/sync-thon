import express from "express"
import { jwtMiddleware } from '../config/jwtMiddleware';
import {GetVotes,postBackEndVote,postFrontVote,postVoteQuestion,postVoteQuestionOption} from "./voteController";
const voteRouter = express.Router();

voteRouter.get('/',jwtMiddleware,GetVotes);
voteRouter.post('/backend',jwtMiddleware,postBackEndVote);
voteRouter.post('/front',jwtMiddleware,postFrontVote);
voteRouter.post('/question',postVoteQuestion);
voteRouter.post('/question/option',postVoteQuestionOption);

export default voteRouter