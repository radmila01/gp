const Router = require('express')
const router = new Router()
const projectController = require('../controllers/projectController')
const accountsController = require("../controllers/accountsController");


/**
 *@swagger
 *components:
 *  schemas:
 *      Project:
 *          type: object
 *          required:
 *              - id
 *              - name
 *          properties:
 *              id:
 *                  type: integer
 *                  description: The auto-generated id of the project
 *              name:
 *                  type: string
 *                  description: The name of the project
 *          example:
 *              id: 7
 *              name: TestProject
 */

/**
 * @swagger
 * paths:
 *   /project/{projectId}:
 *     get:
 *       summary: Get a project by ID
 *       tags: [Projects]
 *       parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: The project id
 *       responses:
 *         '200':
 *           description: A single project.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Project'
 *         '400':
 *              description: Invalid ID value
 *         '404':
 *              description: Project not found
 *
 *     delete:
 *       summary: Delete the project
 *       tags: [Projects]
 *       description: Deleting the project
 *       operationId: delete
 *       parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: The project id
 *       responses:
 *         '200':
 *           description: The project was deleted.
 *
 *   /project:
 *     get:
 *       summary: Get all projects
 *       tags: [Projects]
 *       operationId: getAll
 *       responses:
 *         '200':
 *           description: A list of projects.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Project'
 *
 *     post:
 *       summary: Create a project
 *       tags: [Projects]
 *       description: Creating the project
 *       operationId: create
 *       requestBody:
 *         description: Create a new project
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *           application/xml:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *           application/x-www-form-urlencoded:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *         required: true
 *       responses:
 *         '200':
 *           description: Successfully created
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Project'
 *             application/xml:
 *               schema:
 *                 $ref: '#/components/schemas/Project'
 *         '405':
 *           description: Invalid input
 *
 *     put:
 *       summary: Update the project
 *       tags: [Projects]
 *       description: Updating the project
 *       operationId: update
 *       requestBody:
 *         description: Create a new project
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *           application/xml:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *           application/x-www-form-urlencoded:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *         required: true
 *       responses:
 *         '200':
 *           description: Successfully created
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Project'
 *             application/xml:
 *               schema:
 *                 $ref: '#/components/schemas/Project'
 *         '405':
 *           description: Invalid input
 */

/**
 * @swagger
 * tags:
 *   name: Projects
 *   description: The projects managing API
 */

router.post('/', projectController.create)

router.put('/', projectController.update)

router.get('/getAll',projectController.getAll)
router.get('/:id',projectController.getOne)

router.delete('/:id', projectController.delete)

module.exports = router