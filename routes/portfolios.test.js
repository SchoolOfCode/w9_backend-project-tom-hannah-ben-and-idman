import request from "supertest";
import app from "../app.js";
import { test, expect } from "@jest/globals";

//Get all portfolios
test(`if get request is sent to /portfolio, all portfolios should be returned`, async () => {
    const response = await request(app).get("/portfolio");
    const expectedBody = {success: true, payload: expect.arrayContaining([expect.objectContaining ({
        portfolio_id: expect.any(Number),
        site_url: expect.any(String),
        site_image: expect.any(String),
        description: expect.any(String),
        experience_level: expect.any(String),
        keywords: expect.any(String),
        voting_score: expect.any(Number),
        designers_name: expect.any(String),
    })
                ])}
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toEqual(expectedBody);

})

test.only(`if get request is sent to /portfolio/1, portfolio with id 1 should be returned`, async () => {
    const response = await request(app).get("/portfolio/1");
    const expectedBody = {success: true, payload: expect.arrayContaining([expect.objectContaining ({
        portfolio_id: 1,
        site_url: expect.any(String),
        site_image: expect.any(String),
        description: expect.any(String),
        experience_level: expect.any(String),
        keywords: expect.any(String),
        voting_score: expect.any(Number),
        designers_name: expect.any(String),
    })
                ])}
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toEqual(expectedBody);

})