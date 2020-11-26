(function () {
	const debug = require("debug"),
		{ argv } = require("yargs"),
		{ environment = "dev" } = argv,
		serverDebugger = debug("north-loop-assignment:server"),
		databaseDebugger = debug("north-loop-assignment:database"),
		errorDebugger = debug("north-loop-assignment:error");
	if (environment === "dev") {
		debug.enable("north-loop-assignment:*");
	}
	module.exports = {
		serverDebugger,
		errorDebugger,
		databaseDebugger
	};
}());