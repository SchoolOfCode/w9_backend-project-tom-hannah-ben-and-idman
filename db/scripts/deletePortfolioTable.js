import { query } from "../index.js";
import "dotenv/config";

async function deletePortfolioTable() {
  let res = await query(`DROP TABLE IF EXISTS portfolio;`);
}
deletePortfolioTable();
