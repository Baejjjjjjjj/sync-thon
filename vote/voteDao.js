export const selectVote = async(connection,board_id,part)=>{

    const selectVoteQuery = `select * from tool as t, tool_option as o where t.id = o.tool_id and o.board_id = ${board_id} and t.part = ${part};`
    const [selectVoteRow] = await connection.query(selectVoteQuery);
    return selectVoteRow; 
}

export const insertFrontTool = async(connection,board_id)=>{

    const insertFrontToolQuery = `insert tool(part,question_name,board_id) values(1,"Framework",${board_id});`+`insert tool(part,question_name,board_id) values(1,"CSSFramework",${board_id});`+ `insert tool(part,question_name,board_id) values(1,"PackageManager",${board_id});`
    const insertFrontToolRow = await connection.query(insertFrontToolQuery);
    return 0; 
}


export const selectFrontTool= async(connection,board_id)=>{

    const selectFrontToolQuery = `select id from tool where board_id = ${board_id} and question_name = "Framework";`+ `select id from tool where board_id = ${board_id} and question_name = "CSSFramework";`+ `select id from tool where board_id = ${board_id} and question_name = "PackageManager";`
    const [selectFrontToolRow] = await connection.query(selectFrontToolQuery);
    console.log(selectFrontToolRow)
    return selectFrontToolRow; 

}
export const insertFrameworkDefaultVote= async(connection,tool_id,board_id)=>{

    const insertVoteQuery = `insert into tool_option(option_name,votes,tool_id,board_id) values("React",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("Vue",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("Next",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("Anqular",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("기타",0,${tool_id},${board_id});`

    const insertVoteRow = await connection.query(insertVoteQuery);

    return insertVoteRow;


}

export const insertCSSDefaultVote= async(connection,tool_id,board_id)=>{

    const insertVoteQuery = `insert into tool_option(option_name,votes,tool_id,board_id) values("tailwind",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("bootstrap",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("material-ui",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("chakra-ui",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("기타",0,${tool_id},${board_id});`

    const insertVoteRow = await connection.query(insertVoteQuery);

    return insertVoteRow;


}

export const insertPackageDefaultVote= async(connection,tool_id,board_id)=>{

    const insertVoteQuery = `insert into tool_option(option_name,votes,tool_id,board_id) values("npm",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("yarn",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("pnpm",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("nower",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("기타",0,${tool_id},${board_id});`

    const insertVoteRow = await connection.query(insertVoteQuery);

    return insertVoteRow;


}

export const defaultvotefrontResult = async(connection,tool_id,board_id)=>{

    const insertVoteQuery = `insert into tool_option(option_name,votes,tool_id,board_id) values("Framework",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("DB",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("DBTool",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("APISpecification",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("RemoteRepository",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("Editor",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("Clouding",0,${tool_id},${board_id});`

    return insertVoteRow;



}

export const insertFVote =  async(connection,tool_id,board_id,frameworkValue)=>{

    const insertFVote = `UPDATE tool_option SET votes=votes+1 WHERE option_name="${frameworkValue}" and tool_id = ${tool_id} and board_id = ${board_id};`
    const insertFRow = await connection.query(insertFVote);

    return 0;
}

export const insertCVote =  async(connection,tool_id,board_id,CSSFrameworkValue)=>{

    const insertCVote = `UPDATE tool_option SET votes=votes+1 WHERE option_name="${CSSFrameworkValue}" and tool_id = ${tool_id} and board_id = ${board_id};`
    const insertCRow = await connection.query(insertCVote);
    return insertCRow;
}

export const insertPVote = async(connection,tool_id,board_id,PackageMangerValue)=>{

    const insertPVote = `UPDATE tool_option SET votes=votes+1 WHERE option_name="${PackageMangerValue}" and tool_id = ${tool_id} and board_id = ${board_id};`
    const insertPRow = await connection.query(insertPVote);
    return insertPRow;
}

///////////////////

export const insertBackEndTool = async(connection,board_id)=>{

    const insertFrontToolQuery = `insert tool(part,question_name,board_id) values(2,"Framework",${board_id});`+`insert tool(part,question_name,board_id) values(2,"DB",${board_id});`+ `insert tool(part,question_name,board_id) values(2,"DBTool",${board_id});`+`insert tool(part,question_name,board_id) values(2,"APISpecification",${board_id});`+`insert tool(part,question_name,board_id) values(2,"RemoteRepository",${board_id});`+ `insert tool(part,question_name,board_id) values(2,"Editor",${board_id});`+ `insert tool(part,question_name,board_id) values(2,"Clouding",${board_id});`
    const insertFrontToolRow = await connection.query(insertFrontToolQuery);
    return 0; 
}


export const selectBackEndTool= async(connection,board_id)=>{

    const selectFrontToolQuery = `select id from tool where board_id = ${board_id} and question_name = "Framework";`+ `select id from tool where board_id = ${board_id} and question_name = "DB";`+ `select id from tool where board_id = ${board_id} and question_name = "DBTool";` + `select id from tool where board_id = ${board_id} and question_name = "APISpecification";`+ `select id from tool where board_id = ${board_id} and question_name = "RemoteRepository";`+ `select id from tool where board_id = ${board_id} and question_name = "Editor";`+ `select id from tool where board_id = ${board_id} and question_name = "Clouding";`
    const [selectFrontToolRow] = await connection.query(selectFrontToolQuery);
    console.log(selectFrontToolRow)
    return selectFrontToolRow; 

}
export const insertBackendFrameworkDefaultVote= async(connection,tool_id,board_id)=>{

    const insertVoteQuery = `insert into tool_option(option_name,votes,tool_id,board_id) values("Node.js",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("SpringBoot",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("Django",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("Laravel",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("기타",0,${tool_id},${board_id});`

    const insertVoteRow = await connection.query(insertVoteQuery);

    return insertVoteRow;


}

export const insertDBDefaultVote= async(connection,tool_id,board_id)=>{

    const insertVoteQuery = `insert into tool_option(option_name,votes,tool_id,board_id) values("Mysql",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("MongoDB",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("MariabDB",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("Oracle",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("기타",0,${tool_id},${board_id});`

    const insertVoteRow = await connection.query(insertVoteQuery);

    return insertVoteRow;


}

export const insertDBToolDefaultVote= async(connection,tool_id,board_id)=>{

    const insertVoteQuery = `insert into tool_option(option_name,votes,tool_id,board_id) values("QuickDBD",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("AqueryTool",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("Draw.io",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("SqlDBM",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("기타",0,${tool_id},${board_id});`

    const insertVoteRow = await connection.query(insertVoteQuery);

    return insertVoteRow;


}

export const insertAPISpecificationDefaultVote= async(connection,tool_id,board_id)=>{

    const insertVoteQuery = `insert into tool_option(option_name,votes,tool_id,board_id) values("swagger",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("postman",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("gitbook",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("excel",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("기타",0,${tool_id},${board_id});`

    const insertVoteRow = await connection.query(insertVoteQuery);

    return insertVoteRow;


}

export const insertRemoteDefaultVote= async(connection,tool_id,board_id)=>{

    const insertVoteQuery = `insert into tool_option(option_name,votes,tool_id,board_id) values("github",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("gitlab",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("bitbucket",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("기타",0,${tool_id},${board_id});`

    const insertVoteRow = await connection.query(insertVoteQuery);

    return insertVoteRow;


}

export const insertEditorDefaultVote= async(connection,tool_id,board_id)=>{

    const insertVoteQuery = `insert into tool_option(option_name,votes,tool_id,board_id) values("intelliJ",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("vscode",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("eclipse",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("기타",0,${tool_id},${board_id});`

    const insertVoteRow = await connection.query(insertVoteQuery);

    return insertVoteRow;


}

export const insertCloudingDefaultVote= async(connection,tool_id,board_id)=>{

    const insertVoteQuery = `insert into tool_option(option_name,votes,tool_id,board_id) values("aws",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("googleCloud",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("naverCloud",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("기타",0,${tool_id},${board_id});`

    const insertVoteRow = await connection.query(insertVoteQuery);

    return insertVoteRow;


}






export const defaultvoteBackEndResult = async(connection,tool_id,board_id)=>{

    const insertVoteQuery = `insert into tool_option(option_name,votes,tool_id,board_id) values("Framework",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("DB",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("DBTool",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("APISpecification",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("RemoteRepository",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("Editor",0,${tool_id},${board_id});`+`insert into tool_option(option_name,votes,tool_id,board_id) values("Clouding",0,${tool_id},${board_id});`

    return insertVoteRow;



}

export const insertFrameVote =  async(connection,tool_id,board_id,frameworkValue)=>{

    const insertFVote = `UPDATE tool_option SET votes=votes+1 WHERE option_name="${frameworkValue}" and tool_id = ${tool_id} and board_id = ${board_id};`
    const insertFRow = await connection.query(insertFVote);

    return 0;
}

export const insertDBVote =  async(connection,tool_id,board_id,CSSFrameworkValue)=>{

    const insertCVote = `UPDATE tool_option SET votes=votes+1 WHERE option_name="${CSSFrameworkValue}" and tool_id = ${tool_id} and board_id = ${board_id};`
    const insertCRow = await connection.query(insertCVote);
    return insertCRow;
}

export const insertDBToolVote =  async(connection,tool_id,board_id,CSSFrameworkValue)=>{

    const insertCVote = `UPDATE tool_option SET votes=votes+1 WHERE option_name="${CSSFrameworkValue}" and tool_id = ${tool_id} and board_id = ${board_id};`
    const insertCRow = await connection.query(insertCVote);
    return insertCRow;
}

export const insertAPITVote = async(connection,tool_id,board_id,PackageMangerValue)=>{

    const insertPVote = `UPDATE tool_option SET votes=votes+1 WHERE option_name="${PackageMangerValue}" and tool_id = ${tool_id} and board_id = ${board_id};`
    const insertPRow = await connection.query(insertPVote);
    return insertPRow;
}
export const insertRVote =  async(connection,tool_id,board_id,frameworkValue)=>{

    const insertFVote = `UPDATE tool_option SET votes=votes+1 WHERE option_name="${frameworkValue}" and tool_id = ${tool_id} and board_id = ${board_id};`
    const insertFRow = await connection.query(insertFVote);

    return 0;
}

export const insertEVote =  async(connection,tool_id,board_id,CSSFrameworkValue)=>{

    const insertCVote = `UPDATE tool_option SET votes=votes+1 WHERE option_name="${CSSFrameworkValue}" and tool_id = ${tool_id} and board_id = ${board_id};`
    const insertCRow = await connection.query(insertCVote);
    return insertCRow;
}

export const insertCTVote = async(connection,tool_id,board_id,PackageMangerValue)=>{

    const insertPVote = `UPDATE tool_option SET votes=votes+1 WHERE option_name="${PackageMangerValue}" and tool_id = ${tool_id} and board_id = ${board_id};`
    const insertPRow = await connection.query(insertPVote);
    return insertPRow;
}


