const express = require("express");
const router = express.Router();
const RapidAPIController = require("../controllers/rapid.api.controller");
/**
 * @swagger
 * tags:
 * - name: "rapidAPIs"
 * components:
 *   securitySchemes:
 *     ApiKeyAuth:
 *       type: apiKey
 *       in: header
 *       name: Authorization
 *   schemas:
 *      AnalysisReq:
 *       type: object
 *       required:
 *         - symbol
 *       properties:
 *         symbol:
 *           type: string
 *         region:
 *           type: string
 *      NewsReq:
 *       type: object
 *       properties:
 *         snippetCount:
 *           type: string
 *         region:
 *           type: string
 *         s:
 *           type: string
 *      AnalysisRes:
 *        type: object
 *        properties:
 *            recommendationTrend:
 *              type: object
 *            financialsTemplate:
 *              type: object
 *            price:
 *              type: object
 *            earningsHistory:
 *              type: object
 *            indexTrend:
 *              type: object
 *            financialData:
 *              type: object
 *            earningsTrend:
 *              type: object
 *            quoteType:
 *              type: object
 *            sectorTrend:
 *              type: object
 *            summaryDetail:
 *              type: object
 *            symbol:
 *              type: string
 *            upgradeDowngradeHistory:
 *              type: object
 *            pageViews:
 *              type: object
 *            industryTrend:
 *              type: object
 *      NewsRes:
 *        type: object
 *        properties:
 *            recommendationTrend:
 *              type: object
 *            financialsTemplate:
 *              type: object
 *            price:
 *              type: object
 *            earningsHistory:
 *              type: object
 *            indexTrend:
 *              type: object
 *            financialData:
 *              type: object
 *            earningsTrend:
 *              type: object
 *            quoteType:
 *              type: object
 *            sectorTrend:
 *              type: object
 *            summaryDetail:
 *              type: object
 *            symbol:
 *              type: string
 *            upgradeDowngradeHistory:
 *              type: object
 *            pageViews:
 *              type: object
 *            industryTrend:
 *              type: object
 *      BadRequest:
 *       type: object
 *       properties:
 *           status:
 *             type: string
 *           message:
 *            type: string
 *       required:
 *         - status
 *         - message
 */

/**
 * @swagger
 *
 * /api/rapid-api/analysis:
 *   post:
 *     tags:
 *       - "rapidAPIs"
 *     summary: Fetch analysis data
 *     consumes:
 *       - application/json
 *     requestBody:
 *       content:
 *         application/json:
 *           type: object
 *           schema:
 *             $ref: '#/components/schemas/AnalysisReq'
 *     responses:
 *       200:
 *         description: user
 *         schema:
 *           $ref: '#/components/schemas/AnalysisRes'
 *       400:
 *         description: Bad Request error
 *         schema:
 *           $ref: '#/components/schemas/BadRequest'
 *       401:
 *         description: Unauthorized
 *         schema:
 *           $ref: '#/components/schemas/BadRequest'
 *       404:
 *         description: Not found error
 *         schema:
 *           $ref: '#/components/schemas/BadRequest'
 */
router.post("/analysis", RapidAPIController.getAnalysis);


/**
 * @swagger
 *
 * /api/rapid-api/news:
 *   post:
 *     tags:
 *       - "rapidAPIs"
 *     summary: Fetch news data
 *     consumes:
 *       - application/json
 *     requestBody:
 *       content:
 *         application/json:
 *           type: object
 *           schema:
 *             $ref: '#/components/schemas/NewsReq'
 *     responses:
 *       200:
 *         description: user
 *         schema:
 *           $ref: '#/components/schemas/NewsRes'
 *       400:
 *         description: Bad Request error
 *         schema:
 *           $ref: '#/components/schemas/BadRequest'
 *       401:
 *         description: Unauthorized
 *         schema:
 *           $ref: '#/components/schemas/BadRequest'
 *       404:
 *         description: Not found error
 *         schema:
 *           $ref: '#/components/schemas/BadRequest'
 */
router.post("/v", RapidAPIController.getNews);

module.exports = router;