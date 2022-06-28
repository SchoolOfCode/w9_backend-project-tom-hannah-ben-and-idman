import { query } from "../index.js";
import "dotenv/config";

async function deletePortfolioTable() {
	await query(`DROP TABLE IF EXISTS portfolios;`);
}
deletePortfolioTable();
