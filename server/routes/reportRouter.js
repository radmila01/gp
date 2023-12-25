const Router = require('express')
const router = new Router()
const reportController = require("../controllers/reportController");

/**
 *@swagger
 *components:
 *  schemas:
 *      Reports:
 *          type: object
 *          required:
 *              - id
 *              - photo
 *          properties:
 *              id:
 *                  type: integer
 *                  description: The auto-generated id of the report
 *              comments:
 *                  type: string
 *                  description: Reports comments
 *              photo:
 *                  type: string
 *                  description: Reports photo
 *          example:
 *              assemblingId: 1
 *              comments: Reports comments
 *              photo: Reports photo
 */

/**
 * @swagger
 * paths:
 *   /api/report:
 *     post:
 *       summary: Add report
 *       tags: [Reports]
 *       description: Add report
 *       operationId: addReport
 *       requestBody:
 *         required: true
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               properties:
 *                 assemblingId:
 *                   type: integer
 *                 comments:
 *                   type: string
 *                 photo:
 *                   type: string
 *                   format: binary
 *               example:
 *                 assemblingId: 1
 *                 comments: comments
 *                 photo: photo
 *       responses:
 *         '200':
 *           description: Report successfully added
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Report'
 *         '404':
 *           description: Assembling not found
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *         '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                   error:
 *                     type: string
 *
 *   /api/report/{id}:
 *     get:
 *       summary: Get report by ID
 *       tags: [Reports]
 *       description: Get report by ID
 *       operationId: getReportById
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Report`s id
 *           schema:
 *             type: integer
 *       responses:
 *         '200':
 *           description: Successful
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Report'
 *         '404':
 *           description: Report not found
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *         '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                   error:
 *                     type: string
 */

/**
 * @swagger
 * tags:
 *   name: Reports
 *   description: The reports managing API
 */

router.get('/:id',reportController.getReportById)

router.post('/', reportController.addReport)
//router.post('/create-report', reportController.create)

module.exports = router