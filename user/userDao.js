export const insertUser= async(connection,insertUserParams)=>{

    const insertUserQuery = `insert user(name,password,part,github_id, Status,board_id) values(?,?,?,?,1,?)`
    const insertUserRow = await connection.query(insertUserQuery,insertUserParams);
    return insertUserRow
}

export const selectUser = async(connection, name,board_id)=>{

    const selectUserQuery = `select name from user where name = "${name}" and board_id = ${board_id};`
    const selectUserRow = await connection.query(selectUserQuery);
    return selectUserRow[0]; 
}

export const selectUserPassword = async(connection, name,password,board_id)=>{

    const selectUserPasswordQuery = `select password from user where name = "${name}" and password = "${password}" and board_id = ${board_id};`
    const selectUserPasswordRow = await connection.query(selectUserPasswordQuery);
    return selectUserPasswordRow[0]; 
}