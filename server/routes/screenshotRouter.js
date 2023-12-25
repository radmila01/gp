const Router = require('express')
const router = new Router()
const screenController = require("../controllers/screenshotController");
const projectController = require("../controllers/projectController");

/**
 *@swagger
 *components:
 *  schemas:
 *      Screenshot:
 *          type: object
 *          required:
 *              - id
 *              - name
 *              - img
 *          properties:
 *              id:
 *                  type: integer
 *                  description: The auto-generated id of the screenshot
 *              name:
 *                  type: string
 *                  description: Screenshot name
 *              img:
 *                  type: string
 *                  description: Screenshot description
 *          example:
 *              id: 2
 *              name: TestScreenshot
 *              img: TestImg
 */

/**
 * @swagger
 * paths:
 *   /api/screenshot/create:
 *     post:
 *       summary: Create screenshot
 *       tags: [Screenshot]
 *       description: Create a new screenshot
 *       operationId: createScreenshot
 *       requestBody:
 *         required: true
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: Screenshot name
 *                 img:
 *                   type: string
 *                   description: Screenshot image
 *                   format: binary
 *       responses:
 *         '200':
 *           description: Successful
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   img:
 *                     type: string
 *
 *   /api/screenshot/getAll:
 *     get:
 *       summary: Get all screenshots
 *       tags: [Screenshot]
 *       description: Get a list of all screenshots
 *       operationId: getAllScreenshots
 *       responses:
 *         '200':
 *           description: Successful
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     name:
 *                       type: string
 *                     img:
 *                       type: string
 */


/**
 * @swagger
 * tags:
 *   name: Screenshot
 *   description: The screenshot managing API
 */

router.post('/create', screenController.create)
router.get('/getAll',screenController.getAll)


module.exports = router