import {selectUsers} from "./userDao"
import pool from "../config/database"
export const retrievUsers = async(board_id)=>{

    const connection = await pool.getConnection(async (conn) => conn);
    const retrievUsersResult = await selectUsers(connection,board_id);
    return retrievUsersResult
}