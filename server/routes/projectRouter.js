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
 *              description:
 *                  type: string
 *                  description: Project description
 *          example:
 *              id: 7
 *              name: TestProject
 *              description: Project description
 */

/**
 * @swagger
 * paths:
 *   /api/project/getAll:
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
 *   /api/project/{id}:
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
 *       summary: Delete project
 *       tags: [Projects]
 *       description: Delete project
 *       operationId: delete
 *       parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Project id
 *       responses:
 *         '200':
 *           description: Project was deleted.
 *
 *   /api/project:
 *     post:
 *       summary: Create a project
 *       tags: [Projects]
 *       description: Create a project
 *       operationId: create
 *       requestBody:
 *         required: true
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 img:
 *                   type: string
 *                   format: binary
 *       responses:
 *         '200':
 *           description: Успешно
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   img:
 *                     type: string
 *
 *     put:
 *       summary: Update project
 *       tags: [Projects]
 *       description: Update project
 *       operationId: update
 *       requestBody:
 *         description: Update project
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  id:
 *                      type: integer
 *                  name:
 *                      type: string
 *               example:
 *                  id: 1
 *                  name: Project
 *         required: true
 *       responses:
 *         '200':
 *           description: Successfully updated
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