import db from '../../config/database'

class Board {
    constructor(body) {
        // this.body에는 req.params.id가 들어가있음
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
        const insertBoardQuery = 'INSERT INTO board (board_name, explanation, password) VALUES (?, ?, ?);'
        try {
          const connection = await db.getConnection();
          await connection.query('USE umc_hack');
      
          /** 게시글 정보 삽입*/ 
          const [insertBoardResult] = await connection.query(insertBoardQuery, [data.title, data.content, data.password]);
      
          const boardId = insertBoardResult.insertId;
      
        /** 링크 정보 삽입 */
          const linkValues = data.link.map(link => [link.linkName, link.link, boardId]);
          await connection.query('INSERT INTO board_link (link_name, link_value, board_id) VALUES ?', [linkValues]);
      
          connection.release();
        } catch (error) {
          throw error;
        }
      };
}

export default Board;