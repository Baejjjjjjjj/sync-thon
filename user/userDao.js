export const insertUser= async(connection,insertUserParams)=>{

    const insertUserQuery = `insert user(name,password,part,github_id, Status,board_id) values(?,?,?,?,1,?)`
    const insertUserRow = await connection.query(insertUserQuery,insertUserParams);
    return insertUserRow
}