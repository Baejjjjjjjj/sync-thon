import db from '../../config/database'

class Tools {
    constructor(body) {
        this.body = body;
      }

      async passwordConfirm(data) {
        const boardName = data.boardName;
        const boardPassWord = data.password;

        const boardNameQuery = "SELECT password FROM board WHERE board_name = ?;";
        try {
          const connection = await db.getConnection();
          await connection.query('USE umc_hack');
          const [rows] = await connection.query(boardNameQuery, boardName);
          connection.release();

          if (rows[0].password == boardPassWord) {
            return {success: true, msg: "게시글 진입 성공"};
          }
          else {
            return {success: false, msg: "비밀번호가 틀립니다."};
          }
        } catch (error) {
          throw error;
        }
      };

      async getToolsLink(id) {
        try {
            const data = parseInt(id);
            const boardLinkQuery = 'select * from board_link where board_id = ?;'
            const connection = await db.getConnection();
            await connection.query('USE umc_hack');
            const [rows] = await connection.query(boardLinkQuery, data);
            connection.release();
            return rows;
        } catch (error) {
          throw error;
        }
      }

}

export default Tools;