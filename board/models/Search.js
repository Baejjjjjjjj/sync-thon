"use strict";
import db from '../../config/database'

class Search {
    constructor(body) {
        this.body = body;
      }
      async searchData(data) {
        const boardNameQuery = `SELECT * FROM (SELECT * FROM board WHERE board_name REGEXP ?) AS 
        subquery ORDER BY created_at DESC;`
            try {
                const connection = await db.getConnection();
                await connection.query('USE umc_hack');
                const [rows] = await connection.query(boardNameQuery, data.name);
                connection.release();
                console.log(rows);
                return rows;
            } catch (error) {
              throw error;
            }
    }

}

export default Search;