import { test, expect } from "@jest/globals";

//test for success message in response
test("Has the structure { success: true }", function () {
	const actual = {
		success: true,
	};
	expect(actual.success).toEqual(true);
});

//test for overall object structure
test("Has correct object structure", function () {
	const actual = {
		portfolio_id: 1,
		site_url: "www.google.com",
		site_image: "some image",
		description: "cool item",
		experience_level: "NULL",
		keywords: "animation",
		voting_score: 5,
		designers_name: "Barry Johnson",
	};

	const expected = {
		portfolio_id: expect.any(Number),
		site_url: expect.any(String),
		site_image: expect.any(String),
		description: expect.any(String),
		experience_level: expect.any(String),
		keywords: expect.any(String),
		voting_score: expect.any(Number),
		designers_name: expect.any(String),
	};

	expect(actual).toStrictEqual(expected);
});

//test for getPortfolios function
test(`When called getPortfolios function will return with an array of objects with the correct structure`, () => {
	async function getPortfolios() {
		return {
			success: true,
			payload: [
				{
					portfolio_id: 1,
					site_url: "www.google.com",
					site_image: "some image",
					description: "cool item",
					experience_level: "NULL",
					keywords: "animation",
					voting_score: 5,
					designers_name: "Barry Johnson",
				},
				{
					portfolio_id: 2,
					site_url: "www.test.com",
					site_image: "test image",
					description: "cool test",
					experience_level: "expert",
					keywords: "sidebar",
					voting_score: 0,
					designers_name: "Steve Stevenson",
				},
				{
					portfolio_id: 3,
					site_url: "www.simon.com",
					site_image: "simon's image",
					description: "cool site",
					experience_level: "beginner",
					keywords: "CSS",
					voting_score: 2,
					designers_name: "Simon Jones",
				},
			],
		};
	}

	const actual = getPortfolios();

	const expected = {
		success: true,
		payload: [
			{
				portfolio_id: expect.any(Number),
				site_url: expect.any(String),
				site_image: expect.any(String),
				description: expect.any(String),
				experience_level: expect.any(String),
				keywords: expect.any(String),
				voting_score: expect.any(Number),
				designers_name: expect.any(String),
			},
			{
				portfolio_id: expect.any(Number),
				site_url: expect.any(String),
				site_image: expect.any(String),
				description: expect.any(String),
				experience_level: expect.any(String),
				keywords: expect.any(String),
				voting_score: expect.any(Number),
				designers_name: expect.any(String),
			},
			{
				portfolio_id: expect.any(Number),
				site_url: expect.any(String),
				site_image: expect.any(String),
				description: expect.any(String),
				experience_level: expect.any(String),
				keywords: expect.any(String),
				voting_score: expect.any(Number),
				designers_name: expect.any(String),
			},
		],
	};

	expect(actual).resolves.toStrictEqual(expected);
});

//test for getPortfoliosByExperience function
test(`When called getPortfoliosByExperience function will return with an array of objects with the correct structure with the request experience level only`, () => {
	async function getPortfoliosByExLevel() {
		return {
			success: true,
			payload: [
				{
					portfolio_id: 1,
					site_url: "www.google.com",
					site_image: "some image",
					description: "cool item",
					experience_level: "high",
					keywords: "animation",
					voting_score: 5,
					designers_name: "Barry Johnson",
				},
				{
					portfolio_id: 2,
					site_url: "www.test.com",
					site_image: "test image",
					description: "cool test",
					experience_level: "high",
					keywords: "sidebar",
					voting_score: 0,
					designers_name: "Steve Stevenson",
				},
				{
					portfolio_id: 3,
					site_url: "www.simon.com",
					site_image: "simon's image",
					description: "cool site",
					experience_level: "high",
					keywords: "CSS",
					voting_score: 2,
					designers_name: "Simon Jones",
				},
			],
		};
	}

	const actual = getPortfoliosByExLevel();

	const expected = {
		success: true,
		payload: [
			{
				portfolio_id: expect.any(Number),
				site_url: expect.any(String),
				site_image: expect.any(String),
				description: expect.any(String),
				experience_level: "high",
				keywords: expect.any(String),
				voting_score: expect.any(Number),
				designers_name: expect.any(String),
			},
			{
				portfolio_id: expect.any(Number),
				site_url: expect.any(String),
				site_image: expect.any(String),
				description: expect.any(String),
				experience_level: "high",
				keywords: expect.any(String),
				voting_score: expect.any(Number),
				designers_name: expect.any(String),
			},
			{
				portfolio_id: expect.any(Number),
				site_url: expect.any(String),
				site_image: expect.any(String),
				description: expect.any(String),
				experience_level: "high",
				keywords: expect.any(String),
				voting_score: expect.any(Number),
				designers_name: expect.any(String),
			},
		],
	};

	expect(actual).resolves.toStrictEqual(expected);
});

//test for getPortfoliosByKeyword function
test(`When called getPortfoliosByKeyword function will return with an array of objects with the correct structure relating to the keyword`, () => {
	const keyword = "animation";
	async function getPortfoliosByKeyword(keyword) {
		return {
			success: true,
			payload: [
				{
					portfolio_id: 1,
					site_url: "www.google.com",
					site_image: "some image",
					description: "cool item",
					experience_level: "NULL",
					keywords: keyword,
					voting_score: 5,
					designers_name: "Barry Johnson",
				},
				{
					portfolio_id: 2,
					site_url: "www.test.com",
					site_image: "test image",
					description: "cool test",
					experience_level: "expert",
					keywords: keyword,
					voting_score: 0,
					designers_name: "Steve Stevenson",
				},
				{
					portfolio_id: 3,
					site_url: "www.simon.com",
					site_image: "simon's image",
					description: "cool site",
					experience_level: "beginner",
					keywords: keyword,
					voting_score: 2,
					designers_name: "Simon Jones",
				},
			],
		};
	}

	const actual = getPortfoliosByKeyword(keyword);

	const expected = {
		success: true,
		payload: [
			{
				portfolio_id: expect.any(Number),
				site_url: expect.any(String),
				site_image: expect.any(String),
				description: expect.any(String),
				experience_level: expect.any(String),
				keywords: "animation",
				voting_score: expect.any(Number),
				designers_name: expect.any(String),
			},
			{
				portfolio_id: expect.any(Number),
				site_url: expect.any(String),
				site_image: expect.any(String),
				description: expect.any(String),
				experience_level: expect.any(String),
				keywords: "animation",
				voting_score: expect.any(Number),
				designers_name: expect.any(String),
			},
			{
				portfolio_id: expect.any(Number),
				site_url: expect.any(String),
				site_image: expect.any(String),
				description: expect.any(String),
				experience_level: expect.any(String),
				keywords: "animation",
				voting_score: expect.any(Number),
				designers_name: expect.any(String),
			},
		],
	};

	expect(actual).resolves.toStrictEqual(expected);
});

//test for getPortfoliosByDesigner
test(`When called getPortfoliosByDesigner function will return with an array of objects with the correct structure for the specified Designer`, () => {
	const designer = "Simon Jones";
	async function getPortfoliosByDesigner(designer) {
		return {
			success: true,
			payload: [
				{
					portfolio_id: 1,
					site_url: "www.google.com",
					site_image: "some image",
					description: "cool item",
					experience_level: "NULL",
					keywords: "animation",
					voting_score: 5,
					designers_name: designer,
				},
				{
					portfolio_id: 2,
					site_url: "www.test.com",
					site_image: "test image",
					description: "cool test",
					experience_level: "expert",
					keywords: "sidebar",
					voting_score: 0,
					designers_name: designer,
				},
				{
					portfolio_id: 3,
					site_url: "www.simon.com",
					site_image: "simon's image",
					description: "cool site",
					experience_level: "beginner",
					keywords: "CSS",
					voting_score: 2,
					designers_name: designer,
				},
			],
		};
	}

	const actual = getPortfoliosByDesigner(designer);

	const expected = {
		success: true,
		payload: [
			{
				portfolio_id: expect.any(Number),
				site_url: expect.any(String),
				site_image: expect.any(String),
				description: expect.any(String),
				experience_level: expect.any(String),
				keywords: expect.any(String),
				voting_score: expect.any(Number),
				designers_name: "Simon Jones",
			},
			{
				portfolio_id: expect.any(Number),
				site_url: expect.any(String),
				site_image: expect.any(String),
				description: expect.any(String),
				experience_level: expect.any(String),
				keywords: expect.any(String),
				voting_score: expect.any(Number),
				designers_name: "Simon Jones",
			},
			{
				portfolio_id: expect.any(Number),
				site_url: expect.any(String),
				site_image: expect.any(String),
				description: expect.any(String),
				experience_level: expect.any(String),
				keywords: expect.any(String),
				voting_score: expect.any(Number),
				designers_name: "Simon Jones",
			},
		],
	};

	expect(actual).resolves.toStrictEqual(expected);
});

//test for getPortfoliosById function
test(`When called getPortfolioById function will return with an object for that Id with the correct structure`, () => {
	const id = 1;
	async function getPortfolioById(id) {
		return {
			success: true,
			payload: {
				portfolio_id: id,
				site_url: "www.google.com",
				site_image: "some image",
				description: "cool item",
				experience_level: "NULL",
				keywords: "animation",
				voting_score: 5,
				designers_name: "Barry Johnson",
			},
		};
	}

	const actual = getPortfolioById(id);

	const expected = {
		success: true,
		payload: {
			portfolio_id: 1,
			site_url: expect.any(String),
			site_image: expect.any(String),
			description: expect.any(String),
			experience_level: expect.any(String),
			keywords: expect.any(String),
			voting_score: expect.any(Number),
			designers_name: expect.any(String),
		},
	};

	expect(actual).resolves.toStrictEqual(expected);
});
