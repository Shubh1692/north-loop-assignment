const { search } = require("../routes");

(function () {
	const
		{ validationErrorWithData } = require("../helpers/apiResponse"),
		{ validationResult } = require("express-validator"),
		{ getAnalysisSchema, getNewsSchema } = require("../helpers/requestSchemaValidator"),
		{ RAPID_AP_HOST, RAPID_AP_KEY } = process.env;
	const getAnalysis = [getAnalysisSchema, async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return validationErrorWithData(req, res, "Validation Error.", errors.array());
		}
		try {
			const { symbol, region } = req.body;
			const unirest = require("unirest");
			const rapidAPIReq = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis");
			rapidAPIReq.query({
				symbol,
				region
			});
			rapidAPIReq.headers({
				"x-rapidapi-key": RAPID_AP_KEY,
				"x-rapidapi-host": RAPID_AP_HOST,
				"useQueryString": true
			});
			rapidAPIReq.end((rapidAPIRes) => {
				if (rapidAPIRes.error || !rapidAPIRes.body) return validationErrorWithData(req, res, 'Error while calling rapid api', rapidAPIRes.error);
				return res.status(200).json({
					message: 'Fetch analysis data successfully',
					data: rapidAPIRes.body,
					status: 200,
					success: true
				});
			});
		} catch (error) {
			return validationErrorWithData(req, res, error.message, error);
		}
	}];

	const getNews = [getNewsSchema, async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return validationErrorWithData(req, res, "Validation Error.", errors.array());
		}
		try {
			const { s, region, snippetCount } = req.body;
			const unirest = require("unirest");
			const rapidAPIReq = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/list");
			rapidAPIReq.query({
				s,
				region,
				snippetCount
			});
			rapidAPIReq.headers({
				"x-rapidapi-key": RAPID_AP_KEY,
				"x-rapidapi-host": RAPID_AP_HOST,
				"useQueryString": true
			});
			rapidAPIReq.end((rapidAPIRes) => {
				if (rapidAPIRes.error || !rapidAPIRes.body) return validationErrorWithData(req, res, 'Error while calling rapid api', rapidAPIRes.error);
				return res.status(200).json({
					message: 'Fetch analysis data successfully',
					data: rapidAPIRes.body,
					status: 200,
					success: true
				});
			});
		} catch (error) {
			return validationErrorWithData(req, res, error.message, error);
		}
	}];

	module.exports = {
		getAnalysis,
		getNews
	};
})();