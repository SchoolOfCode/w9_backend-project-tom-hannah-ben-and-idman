import { query } from "../index.js"
import "dotenv/config";

async function createPortfolioTable (){
let res = await query (`CREATE TABLE IF NOT EXISTS Portfolios(portfolio_id PRIMARY KEY GENERATED ALWAYS AS IDENTITY, site_url TEXT, site_image TEXT, description TEXT, experience_level TEXT, key_word_search_data TEXT, voting_score INT);`);
}
createPortfolioTable();