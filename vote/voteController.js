import baseResponse from "../config/baseResponseStatus";
import { SUCCESSResponse, errResponse } from "../config/response";
import jwt from "jsonwebtoken"
import { retrievUsers } from "../user/userProvider";
import {retrievVotes} from "./voteProvider" 
/*투표 정보 가지고 오기
tool 정보와 그에 해당하는 tool option정보를 가지고 와야 한다. 
join으로 가지고 올 것
이를 하려면 jwt 토큰을 가지고 있어야 하며 
board_id가 있어야 한다. 

*/

export const GetVotes = async(req,res)=>{
    const {board_id} = req.body;
    console.log("here"+board_id);
    const GetVotesResult = await retrievVotes(board_id);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS,GetVotesResult));
}
/*투표하기*/
export const postVote = async(req,res)=>{


}
export const postVoteQuestion = async(req,res)=>{


}
export const postVoteQuestionOption = async(req,res)=>{


}