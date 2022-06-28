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
		`SELECT * FROM portfolios WHERE portfolios.keywords LIKE '%' || $1 || '%';`,
		[keyword]
	);
	return res.rows;
}

//return all portfolios based on designer name
export async function getPortfoliosByDesigner(designer) {
	const res = await query(
		`SELECT * FROM portfolios WHERE portfolios.designers_name LIKE '%' || $1 || '%';`,
		[designer]
	);
	return res.rows;
}

//return portfolio by id
export async function getPortfolioById(id) {
	const res = await query(
		"SELECT * FROM portfolios WHERE portfolios.portfolio_id = $1;",
		[id]
	);
	return res.rows;
}

//add new portfolio
export async function addNewPortfolio(portfolio) {
	const res = await query(
		"INSERT INTO portfolios (site_url, site_image, description, experience_level, keywords, voting_score, designers_name) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING*;",
		[
			portfolio.site_url,
			portfolio.site_image,
			portfolio.description,
			portfolio.experience_level,
			portfolio.keywords,
			0,
			portfolio.designers_name,
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

//Not used on front end as of current build (2022.06.28)
//fully update a portfolio
export async function fullUpdateOfPortfolio(id, portfolio) {
	const res = await query(
		"UPDATE portfolios SET site_url = $1, site_image = $2, description = $3, experience_level = $4, keywords = $5, voting_score = $6, designers_name = $7 WHERE portfolio_id = $8 RETURNING*;",
		[
			portfolio.site_url,
			portfolio.site_image,
			portfolio.description,
			portfolio.experience_level,
			portfolio.keywords,
			portfolio.voting_score,
			portfolio.designers_name,
			id,
		]
	);
	return res.rows;
}

//following functions are for specific updates or an entry as per name
//update URL of portfolio
export async function UpdateURLPortfolio(id, value) {
	const res = await query(
		"UPDATE portfolios SET site_url = $1 WHERE portfolio_id = $2 RETURNING*;",
		[value, id]
	);
}

//update image of portfolio
export async function UpdateImagePortfolio(id, value) {
	const res = await query(
		"UPDATE portfolios SET site_image = $1 WHERE portfolio_id = $2 RETURNING*;",
		[value, id]
	);
}

//update description of portfolio
export async function UpdateDescriptionPortfolio(id, value) {
	const res = await query(
		"UPDATE portfolios SET description = $1 WHERE portfolio_id = $2 RETURNING*;",
		[value, id]
	);
}

//update experience_level of portfolio
export async function UpdateExpPortfolio(id, value) {
	const res = await query(
		"UPDATE portfolios SET experience_level = $1 WHERE portfolio_id = $2 RETURNING*;",
		[value, id]
	);
}

//update keyword search of portfolio
export async function UpdateKeywordPortfolio(id, value) {
	const res = await query(
		"UPDATE portfolios SET keywords = $1 WHERE portfolio_id = $2 RETURNING*;",
		[value, id]
	);
}
