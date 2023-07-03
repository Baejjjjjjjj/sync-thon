import baseResponse from "../config/baseResponseStatus";
import { SUCCESSResponse, errResponse } from "../config/response";
import jwt from "jsonwebtoken"
import {retrievFinalVotes,retrievVotes} from "./voteProvider" 
import {createBackEndvote,createFrontvote} from "./voteService"
/*투표 정보 가지고 오기
tool 정보와 그에 해당하는 tool option정보를 가지고 와야 한다. 
join으로 가지고 올 것
이를 하려면 jwt 토큰을 가지고 있어야 하며 
board_id가 있어야 한다. 

*/

export const GetVotes = async(req,res)=>{
    try{
    const {board_id} = req.body;
    const {user_part} = req.verifiedToken;
    console.log("here"+board_id);
    const GetVotesResult = await retrievVotes(board_id,user_part);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS,GetVotesResult));
    }catch(err){console.log(err)}
}

export const GetFinalVotes = async(req,res)=>{

    try{
        const {board_id} = req.body;
        const GetVotesResult = await retrievFinalVotes(board_id);
        return res.send(SUCCESSResponse(baseResponse.SUCCESS,GetVotesResult));
        }catch(err){console.log(err)}
}
/*투표하기

*/
export const postFrontVote = async(req,res)=>{
try{
    const {frameworkValue, CSSFrameworkValue, PackageMangerValue,board_id} = req.body;
    console.log(frameworkValue, CSSFrameworkValue, PackageMangerValue,board_id);
    const postBackEndVoteResult = await createFrontvote(frameworkValue,CSSFrameworkValue,PackageMangerValue,board_id);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS,postBackEndVoteResult));
}catch(err){console.log(err)}
}

export const postBackEndVote = async(req,res)=>{
try{
    const {frameworkValue, DB, DBTool,API,Remote,Editor,Clouding,board_id} = req.body;
    const postBackEndVoteResult = await createBackEndvote(frameworkValue,DB, DBTool,API,Remote,Editor,Clouding,board_id);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS,postBackEndVoteResult));
}catch(err){console.log(err)}
}

