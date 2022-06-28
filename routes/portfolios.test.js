import request from "supertest";
import app from "../app.js";
import { test, expect } from "@jest/globals";

//Get all portfolios
test(`if get request is sent to /portfolio, all portfolios should be returned`, async () => {
	const response = await request(app).get("/portfolio");
	const expectedBody = {
		success: true,
		payload: expect.arrayContaining([
			expect.objectContaining({
				portfolio_id: expect.any(Number),
				site_url: expect.any(String),
				site_image: expect.any(String),
				description: expect.any(String),
				experience_level: expect.any(String),
				keywords: expect.any(String),
				voting_score: expect.any(Number),
				designers_name: expect.any(String),
			}),
		]),
	};
	expect(response.statusCode).toBe(200);
	expect(response.headers["content-type"]).toMatch(/json/);
	expect(response.body).toMatchObject(expectedBody);
});

//test for specific portfolio
test.only(`if get request is sent to /portfolio/2, portfolio with id 2 should be returned`, async () => {
	const response = await request(app).get("/portfolio/2");
	const expectedBody = {
		success: true,
		payload: expect.arrayContaining([
			expect.objectContaining({
				portfolio_id: 2,
				site_url: expect.any(String),
				site_image: expect.any(String),
				description: expect.any(String),
				experience_level: expect.any(String),
				keywords: expect.any(String),
				voting_score: expect.any(Number),
				designers_name: expect.any(String),
			}),
		]),
	};
	expect(response.statusCode).toBe(200);
	expect(response.headers["content-type"]).toMatch(/json/);
	expect(response.body).toEqual(expectedBody);
});

//test for posting new portfolio
test(`if new portfolio data sent to /portfolio, should send and return success`, async () => {
	const response = await request(app)
		.post("/portfolio")
		.send({
			site_url: "test site",
			site_image: "test image",
			description: "test desc",
			experience_level: "pro",
			keywords: "animation",
			voting_score: expect.any(Number),
			designers_name: "test name",
		});

	const expectedBody = {
		success: true,
		payload: expect.arrayContaining([
			expect.objectContaining({
				portfolio_id: expect.any(Number),
				site_url: expect.any(String),
				site_image: expect.any(String),
				description: expect.any(String),
				experience_level: expect.any(String),
				keywords: expect.any(String),
				voting_score: expect.any(Number),
				designers_name: expect.any(String),
			}),
		]),
	};

	expect(response.statusCode).toBe(201);
	expect(response.headers["content-type"]).toMatch(/json/);
	expect(response.body).toEqual(expectedBody);
});

//test for delete portfolio by id
test(`Sending a portfolio id to delete route, should delete portfolio entry and confirm`, async () => {
    const response = await request(app).delete("/portfolio/10")
    const expectedBody = {success: true, message: "deleted portfolio"}
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toEqual(expectedBody);
});

//test for PUT by id
test(`Sending a new portfolio information for a specific id to put route, should update portfolio entry and confirm`, async () => {
	const response = await request(app).put("/portfolio/9").send({
		site_url: "test site",
		site_image: "test image",
		description: "test desc",
		experience_level: "pro",
		keywords: "animation",
		voting_score: 2,
		designers_name: "test name",
	});
	const expectedBody = {
		success: true,
		payload: expect.arrayContaining([
			expect.objectContaining({
				portfolio_id: 9,
				site_url: "test site",
				site_image: "test image",
				description: "test desc",
				experience_level: "pro",
				keywords: "animation",
				voting_score: 2,
				designers_name: "test name",
			}),
		]),
	};

	expect(response.statusCode).toBe(200);
	expect(response.headers["content-type"]).toMatch(/json/);
	expect(response.body).toEqual(expectedBody);
});
