import express from "express";
import portfolioRouter from "./routes/portfolios.js";
import cors from "cors";
// const cors = require('cors');
const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/portfolio", portfolioRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
