const express = require("express");
const path = require("path");
const router = express.Router(),
	rapidAPIController = require("./rapid.api");
/* GET home page. */
router.get("/", (req, res) => {
	res.render("index", { title: "Express" });
});
router.use("/rapid-api", rapidAPIController);

router.get("/error.log", (req, res) => {
	res.sendFile(path.join(__dirname, "../error.log"));
});

module.exports = router;