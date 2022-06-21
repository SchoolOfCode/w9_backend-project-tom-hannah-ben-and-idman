import { query } from "../index.js"
import "dotenv/config";

async function createFavouriteTable (){
let res = await query (`CREATE TABLE IF NOT EXISTS Favourites(portfolio_id INT, user_id INT);`);
}
createFavouriteTable();