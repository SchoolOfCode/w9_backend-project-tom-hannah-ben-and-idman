import { query } from "../index.js";
import "dotenv/config";
//import portfolio data

//finish when we have data file done
async function populatePortfolioTable() {
  for (let i = 0; i < Portfolio.length; i++) {
    let res = await query(
      `INSERT INTO portfolios (site_url, site_image, description, experience_level, key_word_search_data, voting_score, designers_name) VALUES ($1, $2, $3, $4, $5, $6, $7);`,
      []
    );
  }
}

populatePortfolioTable();
