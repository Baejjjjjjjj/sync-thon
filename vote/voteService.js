import pool from "../config/database"
import {insertOptionDao,selectTeamIdDao,insertCTVote,insertCloudingDefaultVote,insertEVote,insertDBToolVote,insertRVote,insertAPITVote,insertDBVote ,insertFrameVote,insertEditorDefaultVote,insertRemoteDefaultVote,insertAPISpecificationDefaultVote,insertDBToolDefaultVote,insertDBDefaultVote,insertBackendFrameworkDefaultVote,selectBackEndTool,insertBackEndTool,insertPackageDefaultVote,insertCSSDefaultVote,insertFrameworkDefaultVote,insertFrontTool,selectFrontTool,defaultvotefrontResult,insertDefaultVote,insertFVote, insertCVote,insertPVote} from "./voteDao"
export const createFrontvote = async(frameworkValue,CSSFrameworkValue,PackageMangerValue,board_id)=>{
try{
    const connection = await pool.getConnection(async (conn) => conn);
    const defaultToolResult = await insertFrontTool(connection,board_id);
    const getToolList = await selectFrontTool(connection,board_id);
    const tool_id1 = getToolList[0][0].id;

    const tool_id2 = getToolList[1][0].id;
    console.log(getToolList);
    const tool_id3 = getToolList[2][0].id;
    console.log(getToolList[0].id);
    console.log(tool_id1);

    const defaultFrameworkvoteResult = await insertFrameworkDefaultVote(connection,tool_id1,board_id);
    const defaultCSSvoteResult = await insertCSSDefaultVote(connection,tool_id2,board_id);
    const defaultPackagevoteResult = await insertPackageDefaultVote(connection,tool_id3,board_id);



    const createFramevoteResult = await insertFVote(connection,tool_id1,board_id,frameworkValue);
    
    const createCSSvoteResult = await insertCVote(connection,tool_id2,board_id,CSSFrameworkValue);
   
    const createPackagevoteResult = await insertPVote(connection,tool_id3,board_id,PackageMangerValue);
    connection.release();
    return 0;
}
catch(err){

    console.log(err);
}
}

export const createBackEndvote = async(frameworkValue,DB, DBTool,API,Remote,Editor,Clouding,board_id)=>{
try{
    const connection = await pool.getConnection(async (conn) => conn);
    const defaultToolResult = await insertBackEndTool(connection,board_id);
    const getToolList = await selectBackEndTool(connection,board_id);
    console.log(getToolList);
    const tool_id1 = getToolList[0][0].id;

    const tool_id2 = getToolList[1][0].id;

    const tool_id3 = getToolList[2][0].id;

    const tool_id4= getToolList[3][0].id;

    const tool_id5= getToolList[4][0].id;

    const tool_id6= getToolList[5][0].id;

    const tool_id7 = getToolList[6][0].id;

    const defaultFrameworkvoteResult = await insertBackendFrameworkDefaultVote(connection,tool_id1,board_id);
    const defaultDBResult = await insertDBDefaultVote(connection,tool_id2,board_id);
    const defaultDBToolvoteResult = await insertDBToolDefaultVote(connection,tool_id3,board_id);
    const defaultAPIResult = await insertAPISpecificationDefaultVote(connection,tool_id4,board_id);
    const defaultRemotevoteResult = await insertRemoteDefaultVote(connection,tool_id5,board_id);
    const defaultEditorResult = await insertEditorDefaultVote(connection,tool_id6,board_id);
    const defaultCloudingvoteResult = await insertCloudingDefaultVote(connection,tool_id7,board_id);

    const createFramevoteResult = await  insertFrameVote(connection,tool_id1,board_id,frameworkValue);
    
    const createCSSvoteResult = await insertDBVote(connection,tool_id2,board_id,DB);
   
    const createPackagevoteResult = await insertDBToolVote(connection,tool_id3,board_id,DBTool);

    const createAPIResult = await  insertAPITVote(connection,tool_id4,board_id,API);

    const createRemoteResult = await insertRVote(connection,tool_id5,board_id,Remote);

    const createEditorResult = await insertEVote(connection,tool_id6,board_id,Editor);

    const createCloudingResult = await insertCTVote(connection,tool_id7,board_id,Clouding);
    connection.release();
    return 0;
}catch(err){

    console.log(err)
}
}

export const createOption = async(Questionname,board_id,option)=>{

    try{
        const connection = await pool.getConnection(async (conn) => conn);
        const selectTeamId = await selectTeamIdDao(connection,Questionname,board_id);
        const tool_id = selectTeamId[0].id;
        const insertOption = await insertOptionDao(connection,option,tool_id,board_id)
        return insertOption; 
        connection.release();
    }catch(err){
        console.log(err);
    }

}