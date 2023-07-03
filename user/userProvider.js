import {selectUsers,selectuserPart} from "./userDao"
import pool from "../config/database"
export const retrievUsers = async(board_id)=>{

    const connection = await pool.getConnection(async (conn) => conn);
    const retrievUsersResult = await selectUsers(connection,board_id);
    return retrievUsersResult
}

export const retrieveUser = async(user_id)=>{

    const connection = await pool.getConnection(async (conn)=> conn);
    const retrieveUserResult = await selectuserPart(connection,user_id);
    return retrieveUserResult
}