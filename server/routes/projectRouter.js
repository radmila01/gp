const Router = require('express')
const router = new Router()
const projectController = require('../controllers/projectController')
const accoutsController = require("../controllers/accountsController")
/*
/**
 * @swagger
 * paths:
 *   /project/{projectId}:
 *     get:
 *       summary: Get a user by ID
 *       tags: [Projects]
 *       parameters:
 *         ...
 *       responses:
 *         '200':
 *           description: A single user.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Project'
 *         '400':
 *              description: Invalid ID value
 *         '404':
 *              description: User not found
 *
 *   /project:
 *     get:
 *       summary: Get all projects
 *       tags: [Projects]
 *       operationId: getAll
 *       responses:
 *         '200':
 *           description: A list of users.
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
 *           description: OK
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
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       properties:
 *            id:
 *              type: integer
 *              description: id
 *            name:
 *              type: string
 *              description: name
 *            email:
 *              type: string
 *              description: email
 *            role:
 *              type: string
 *              description: role
 *            organization:
 *              type: string
 *              description: organization
 *
 */
/*
/**
 * @swagger
 * tags:
 *   name: Projects
 *   description: The users managing API
 */

router.post('/', projectController.create)
router.put('/', projectController.update)
router.get('/getAll',projectController.getAll)
router.get('/:id',projectController.getOne)
router.delete('/', projectController.delete)
module.exports = router