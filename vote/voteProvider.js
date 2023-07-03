import pool from "../config/database"
import {selectVote,selectAllVote} from "./voteDao"

export const retrievVotes = async(board_id,part)=>{
    try{
    const connection = await pool.getConnection(async (conn) => conn);
    const retrieVotesResult = await selectVote(connection,board_id,part);
    connection.release();
    return retrieVotesResult
}catch(err){console.log(err)}
}

export const retrievFinalVotes = async(board_id)=>{

    try{
        const connection = await pool.getConnection(async (conn) => conn);
        const retrieVotesResult = await selectAllVote(connection,board_id);
        connection.release();
        return retrieVotesResult
    }catch(err){console.log(err)}

}

