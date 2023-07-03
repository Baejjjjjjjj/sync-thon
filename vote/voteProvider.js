import pool from "../config/database"
import {selectVote} from "./voteDao"

export const retrievVotes = async(board_id,part)=>{
    try{
    const connection = await pool.getConnection(async (conn) => conn);
    const retrieVotesResult = await selectVote(connection,board_id,part);
    return retrieVotesResult
}catch(err){console.log(err)}
}