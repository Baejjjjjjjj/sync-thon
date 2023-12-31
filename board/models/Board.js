import db from '../../config/database'

class Board {
    constructor(body) {
        this.body = body;
      }
      /** 게시글 리스트 가져오기 */
      async getBoardList() {
        try {
          const connection = await db.getConnection();
          await connection.query('USE umc_hack');
          const [rows] = await connection.query('SELECT * FROM board');
          connection.release();
          return rows;
        } catch (error) {
          throw error;
        }
      }

      async write(data) {
        const now = new Date();
        const options = { timeZone: 'Asia/Seoul', hour12: false };
        const koreanTime = now.toLocaleString('en-US', options);
        console.log(koreanTime)

        const insertBoardQuery = 'INSERT INTO board (board_name, explanation, password, created_at) VALUES (?, ?, ?, ?);'
        try {
          const connection = await db.getConnection();
          await connection.query('USE umc_hack');
      
          /** 게시글 정보 삽입*/ 
          const [insertBoardResult] = await connection.query(insertBoardQuery, [data.title, data.content, data.password, koreanTime]);
      
          const boardId = insertBoardResult.insertId;
      
        /** 링크 정보 삽입 */
          const linkValues = data.link.map(link => [link.linkName, link.link, boardId]);
          await connection.query('INSERT INTO board_link (link_name, link_value, board_id) VALUES ?', [linkValues]);
      
          connection.release();
        } catch (error) {
          throw error;
        }
      };

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
}

export default Board;