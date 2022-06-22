import express from "express";
const router = express.Router();
import {
  getPortfolios,
  getPortfoliosByExLevel,
  getPortfoliosByKeyword,
  addNewPortfolio,
  deletePortfolio,
  fullUpdateOfPortfolio,
  getPortfolioById,
  UpdateImagePortfolio,
  UpdateURLPortfolio,
  UpdateKeywordPortfolio,
  UpdateExpPortfolio,
  UpdateDescriptionPortfolio,
} from "../models/portfolios.js";

router.get("/", async function (req, res) {
  //search for keyword and return all portfolios
  if (req.query.keyword !== undefined) {
    const result = await getPortfoliosByKeyword(req.query.keyword);
    return res.json({ success: true, payload: result });
  }
  //search for exp level and return all portfolios
  if (req.query.experience !== undefined) {
    const result = await getPortfoliosByExLevel(req.query.experience);
    return res.json({ success: true, payload: result });
  }
  //returns all portfolios if no specific search done
  const result = await getPortfolios();
  res.json({ success: true, payload: result });
});

//add portfolio
router.post("/", async function (req, res) {
  const result = await addNewPortfolio(req.body);
  return res.json({ success: true, payload: result });
});

//search for specific portfolio
router.get("/:id", async function (req, res) {
  const result = await getPortfolioById(Number(req.params.id));
  return res.json({ success: true, payload: result });
});

//delete portfolio
router.delete("/:id", async function (req, res) {
  const result = await deletePortfolio(Number(req.params.id));
  return res.json({ success: true, payload: result });
});

//full update of specific portfolio
router.put("/:id", async function (req, res) {
  const result = await fullUpdateOfPortfolio(Number(req.params.id), req.body);
  return res.json({ success: true, payload: result });
});

//partial update of specific portfolio
router.patch("/:id", async function (req, res) {
  const keys = Object.keys(req.body);
  const value = Object.values(req.body);
  let result = "";

  //checks what has been requested to be updated and calls appropriate function
  if (keys[0] === "site_image") {
    result = await UpdateImagePortfolio(Number(req.params.id), value[0]);
  }
  if (keys[0] === "site_url") {
    result = await UpdateURLPortfolio(Number(req.params.id), value[0]);
  }
  if (keys[0] === "description") {
    result = await UpdateDescriptionPortfolio(Number(req.params.id), value[0]);
  }
  if (keys[0] === "experience_level") {
    result = await UpdateExpPortfolio(Number(req.params.id), value[0]);
  }
  if (keys[0] === "keyword_search") {
    result = await UpdateKeywordPortfolio(Number(req.params.id), value[0]);
  }
  return res.json({ success: true, payload: result });
});

export default router;
