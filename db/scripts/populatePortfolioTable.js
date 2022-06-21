import { query } from "../index.js"
import "dotenv/config";
//import portfolio data

async function populatePortfolioTable() {
 for (let i = 0; i < Portfolio.length; i++){
    let res = await query(`INSERT INTO portfolios (site_url, site_image, description, experience_level, key_word_search_data, voting_score) VALUES ($1, $2, $3, $4, $5, $6);`, [])
 }
    
}