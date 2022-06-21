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
    const result = await getPortfoliosByKeyword(req.query.keyword);
    return res.json({ success: true, payload: result });
  }
  //search for exp level
  if (req.query.experience !== undefined) {
    const result = await getPortfoliosByExLevel(req.query.experience);
    return res.json({ success: true, payload: result });
  }
  //returns all if no specific search done
  const result = await getPortfolios();
  res.json({ success: true, payload: result });
});

//add portfolio
router.post("/", async function (req, res) {
  console.log(req.body);
  const result = await addNewPortfolio(req.body);
  console.log('result ' + result)
  return res.json({ success: true, payload: result });
});

//delete portfolio
router.delete("/:id", async function (req, res) {
  const result = await deletePortfolio(Number(req.params.id));
  return res.json({ success: true, payload: result });
});

export default router;
