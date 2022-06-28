import { query } from "../index.js";
import "dotenv/config";

async function createPortfolioTable() {
	await query(
		`CREATE TABLE IF NOT EXISTS portfolios(portfolio_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, site_url TEXT, site_image TEXT, description TEXT, experience_level TEXT, keywords TEXT, voting_score INT, designers_name TEXT);`
	);
}
createPortfolioTable();
