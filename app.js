import express from "express";
import portfolioRouter from "./routes/portfolios.js";
import cors from "cors";

const PORT = 3002;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/portfolio", portfolioRouter);

if (process.env.NODE_ENV != "test") {
	app.listen(PORT, () => {
		console.log(`listening on port ${PORT}`);
	});
}

export default app;
