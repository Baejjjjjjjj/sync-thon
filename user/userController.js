import baseResponse from "../config/baseResponseStatus";
import crypto from "crypto";
import { SUCCESSResponse, errResponse } from "../config/response";
import {retrievUsers,retrieveUser} from "./userProvider";
import {createUser,FindUser} from "./userService";
import jwt from "jsonwebtoken"

export const PostSignUp = async(req,res)=>{

    try{

        const {name,password, part, github_id,board_id} = req.body;

        if(typeof name == "undefined"){
            return res.send(errResponse(baseResponse.SIGNUP_EMPTY_NAME))
        }
        if(typeof password == "undefined"){
            return res.send(errResponse(baseResponse.SIGNUP_EMPTY_PASSWORD))
        }
        if(password.length != 4){
            return res.send(errResponse(baseResponse.SIGNUP_WRONG_LENGTH_PASSWORD))
        }
        if(typeof part == "undefined"){
            return res.send(errResponse(baseResponse.SIGNUP_EMPTY_PART))
        }
        if(typeof github_id == "undefined"){
            return res.send(errResponse(baseResponse.SIGNUP_EMPTY_GITHUBID))
        }
        if(typeof board_id =="undefined"){
            return res.send(errResponse(baseResponse.SIGNUP_EMPTY_BOARDID))

        }

        const hashedPassword  = await crypto.createHash("sha512").update(password).digest("hex");
        
        const PostSignUpResult = await createUser(name,hashedPassword,part,github_id,board_id);

        return res.send(SUCCESSResponse(baseResponse.SUCCESS,"sucess"));

    }catch(err){
        console.log(err)
    }
}

export const PostLogIn = async(req,res)=>{

    try{

        const {name,password,board_id} = req.body;

        if(typeof name == "undefined"){
            return res.send(errResponse(baseResponse.SIGNUP_EMPTY_NAME))
        }
        if(typeof password == "undefined"){
            return res.send(errResponse(baseResponse.SIGNUP_EMPTY_PASSWORD))
        }
        if(typeof board_id =="undefined"){
            return res.send(errResponse(baseResponse.SIGNUP_EMPTY_BOARDID))

        }

        if(password.length != 4){
            return res.send(errResponse(baseResponse.SIGNUP_WRONG_LENGTH_PASSWORD))
        }
        

        const hashedPassword  = await crypto.createHash("sha512").update(password).digest("hex");

        const check = await FindUser(name,hashedPassword,board_id);
        const user_id = check.selectUserIdresult.id;

        var user_name;

        if(check.selectUserIdresult){
            user_name = check.selectUserIdresult.name;

        }

        var user_password;
        if(check.selectUserIdPasswordresult){
            user_password = check.selectUserIdPasswordresult.password;
            
        }
        
        if(!user_name){
            return res.send(errResponse(baseResponse.LOGIN_NOT_JOIN))
        }

        if(!user_password){
            return res.send(errResponse(baseResponse.LOGIN_NOT_PASSWORD))
        }

        const token = await jwt.sign({user_id : user_id,board_id:board_id, user_name : user_name,password: user_password},process.env.TOKEN_SECRET,{expiresIn:'3days'})
        console.log(token)
        if(token)    
            return res.send(SUCCESSResponse(baseResponse.SUCCESS,{token}))

    }catch(err){

        console.log(err);
    }

}

/*
특정 boardid에 속한 userid값을 전부 가지고 온다. 
*/

export const GetUsers = async(req,res)=>{

    const {board_id} = req.body;

    if(typeof board_id =="undefined"){
        return res.send(errResponse(baseResponse.SIGNUP_EMPTY_BOARDID))
    }

    const GetUsersResult = await retrievUsers(board_id);
    console.log(GetUsersResult)
    return res.send(SUCCESSResponse(baseResponse.SUCCESS,GetUsersResult))


}

export const GetUser = async(req,res)=>{
   console.log("hello")
    const {user_id} = req.verifiedToken;
    const GetUserResult = await retrieveUser(user_id);
    return res.send(SUCCESSResponse(baseResponse.SUCCESS,GetUserResult))
}