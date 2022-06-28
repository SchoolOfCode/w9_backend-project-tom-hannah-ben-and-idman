import { query } from "../index.js";
import "dotenv/config";
import portfolios from "./lib/portfolios.js";

async function populatePortfolioTable() {
	for (let i = 0; i < portfolios.length; i++) {
		await query(
			`INSERT INTO portfolios (site_url, site_image, description, experience_level, keywords, voting_score, designers_name) VALUES ($1, $2, $3, $4, $5, $6, $7);`,
			[
				portfolios[i].site_url,
				portfolios[i].site_image,
				portfolios[i].description,
				portfolios[i].experience_level,
				portfolios[i].keywords,
				0,
				portfolios[i].designers_name,
			]
		);
	}
}

populatePortfolioTable();
