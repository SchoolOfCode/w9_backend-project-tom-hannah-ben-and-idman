import pg from "pg";
import "dotenv/config";

export const pool = new pg.Pool({
host: process.env.PGHOST,
database: process.env.PGDATABASE,
user: process.env.PGUSER,
password: process.env.PGPASSWORD,
port: process.env.PGPORT,
ssl: {rejectUnauthorized: false}
});

// await pool.connect();
// const result = await pool.query(`SELECT NOW()`);
// console.log(result);

export function query(text,params,callback){
    return pool.query (text,params,callback)};