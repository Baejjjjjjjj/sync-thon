import express from "express"
import { jwtMiddleware } from '../config/jwtMiddleware';
import {GetVotes,postVote,postVoteQuestion,postVoteQuestionOption} from "./voteController";
const voteRouter = express.Router();

voteRouter.get('/',jwtMiddleware,GetVotes);
voteRouter.post('/',postVote);
voteRouter.post('/question',postVoteQuestion);
voteRouter.post('/question/option',postVoteQuestionOption);

export default voteRouter