module.exports = {
	swaggerDefinition: {
		openapi: "3.0.0",
		info: {
			title: "API Doc",
			version: "0.0.1",
			description: "Document for robust backend api"
		}
	},
	apis: [`${__dirname.replace('config', '')}/routes/*.js`]
};