import { query } from "../db/index.js";

//return all portfolios in DB
export async function getPortfolios() {
  const res = await query("SELECT * FROM portfolios;");
  return res.rows;
}

//return all portfolios based on exp level
export async function getPortfoliosByExLevel(experience) {
  const res = await query(
    "SELECT * FROM portfolios WHERE portfolios.experience_level = $1;",
    [experience]
  );
  return res.rows;
}

//return all portfolios based on keyword search
export async function getPortfoliosByKeyword(keyword) {
  const res = await query(
    `SELECT * FROM portfolios WHERE portfolios.keyword_search LIKE '%' || $1 || '%';`,
    [keyword]
  );
  return res.rows;
}

//add new portfolio
export async function addNewPortfolio(portfolio) {
  const res = await query(
    "INSERT INTO portfolios (site_url, site_image, description, experience_level, key_word_search_data, voting_score) VALUES ($1, $2, $3, $4, $5, $6);",
    [
      portfolio.url,
      portfolio.image,
      portfolio.description,
      portfolio.experience,
      portfolio.keyword,
      portfolio.voting,
    ]
  );
  return res.rows;
}

//delete portfolio
export async function deletePortfolio(reference) {
  const res = await query(
    "DELETE FROM portfolios WHERE portfolio_id = $1 RETURNING*;",
    [reference]
  );
}
