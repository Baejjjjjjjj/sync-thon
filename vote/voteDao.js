export const selectVote = async(connection,board_id)=>{

    const selectVoteQuery = `select * from tool as t, tool_option as o where t.id = o.tool_id and o.board_id = ${board_id};`
    const [selectVoteRow] = await connection.query(selectVoteQuery);
    return selectVoteRow; 
}