import express from "express";
const router = express.Router();
import {
  getPortfolios,
  getPortfoliosByExLevel,
  getPortfoliosByKeyword,
  addNewPortfolio,
  deletePortfolio,
} from "../models/portfolios.js";

router.get("/", async function (req, res) {
  //search for keyword
  if (req.query.keyword !== undefined) {
    const result = getPortfoliosByKeyword(req.query.keyword);
    return res.json({ success: true, payload: result });
  }
  //search for exp level
  if (req.query.experience !== undefined) {
    const result = getPortfoliosByExLevel(req.query.experience);
    return res.json({ success: true, payload: result });
  }
  //returns all if no specific search done
  const result = await getPortfolios();
  res.json({ success: true, payload: result });
});

//add portfolio
router.post("/", async function (req, res) {
  const result = addNewPortfolio(req.body);
  return res.json({ success: true, payload: result });
});

//delete portfolio
router.delete("/", async function (req, res) {
  const result = deletePortfolio(req.body.id);
  return res.json({ success: true, payload: result });
});

export default router;
