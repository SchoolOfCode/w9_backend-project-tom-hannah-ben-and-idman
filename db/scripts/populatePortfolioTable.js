import { query } from "../index.js";
import "dotenv/config";
//import portfolio data
import portfolios from "./portfolios.js";

//finish when we have data file done
async function populatePortfolioTable() {
  for (let i = 0; i < portfolios.length; i++) {
    let res = await query(
      `INSERT INTO portfolios (site_url, site_image, description, experience_level, keywords, voting_score, designers_name) VALUES ($1, $2, $3, $4, $5, $6, $7);`,
      [
        portfolios[i].site_url,
        portfolios[i].site_image,
        portfolios[i].description,
        portfolios[i].experience_level,
        portfolios[i].keywords,
        portfolios[i].voting_score,
        portfolios[i].designers_name,
      ]
    );
  }
}

populatePortfolioTable();
