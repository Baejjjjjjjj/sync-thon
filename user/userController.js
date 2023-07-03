import baseResponse from "../config/baseResponseStatus";
import crypto from "crypto";
import { SUCCESSResponse, errResponse } from "../config/response";
import {hashedPassword,createUser} from "./userService";

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