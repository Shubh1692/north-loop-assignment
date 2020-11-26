(function () {
	const { body } = require("express-validator");

	const getAnalysisSchema = [body("symbol").isString().isLength({ min: 2 }),
	body("region").optional().isString().isLength({ min: 2 })];
	const getNewsSchema = [body("snippetCount").optional().isString().isLength({ min: 2 }),
	body("s").optional().isString().isLength({ min: 2 }),
	body("region").optional().isString().isLength({ min: 2 })];

	module.exports = {
		getAnalysisSchema,
		getNewsSchema
	};
}());