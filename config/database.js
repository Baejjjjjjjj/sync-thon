require("dotenv").config();
import mysql from "mysql2/promise"
const env = process.env;
const pool = mysql.createPool({
    host: env.host,
    user:env.user,
    port:env.port,
    password:env.password,
    database:env.database,
    connectionLimit: 30,
    multipleStatements: true

});

export default pool;