import { query } from "../index.js"
import "dotenv/config";

async function createUserTable (){
let res = await query (`CREATE TABLE IF NOT EXISTS Users (user_id PRIMARY KEY GENERATED ALWAYS AS IDENTITY, password TEXT, email TEXT);`);
}
createUserTable();