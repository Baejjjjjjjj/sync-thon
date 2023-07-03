import crypto from "crypto"
import pool from "../config/database"
import {insertUser} from "./userDao"
export const hashedPassword = async(password)=>{

    try{

        const hashedPasswordResult = await crypto.createHasted("sha512").update(password).digest("hex");
        return hashedPasswordResult
    }catch(err){
        console.log(err);
    }

}

export const createUser= async(name,hashedPassword,part,github_id,board_id)=>{
    try{

        const connection = await pool.getConnection(async conn => conn);
        const insertUserParams = [name, hashedPassword, part, github_id,board_id];
        const createUserResult = await insertUser(connection,insertUserParams);
        connection.release();
        return createUserResult; 


    }catch(err){

        console.log(err)
    }


}