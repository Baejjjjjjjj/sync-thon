import pool from "../config/database"
import {selectVote} from "./voteDao"

export const retrievVotes = async(board_id)=>{
    const connection = await pool.getConnection(async (conn) => conn);
    const retrieVotesResult = await selectVote(connection,board_id);
    return retrieVotesResult
}