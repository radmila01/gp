const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

/**
 * @swagger
 * paths:
 *   /user/{userId}:
 *     get:
 *       summary: Get a user by ID
 *       tags: [Users]
 *       parameters:
 *         ...
 *       responses:
 *         '200':
 *           description: A single user.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *         '400':
 *              description: Invalid ID value
 *         '404':
 *              description: User not found
 *
 *   /user:
 *     get:
 *       summary: Get all users
 *       tags: [Users]
 *       operationId: getAll
 *       responses:
 *         '200':
 *           description: A list of users.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/User'
 *
 *      /user/registration:
 *     post:
 *       summary: Registration
 *       tags: [Users]
 *       description: Registration
 *       operationId: registration
 *       requestBody:
 *         description: Create a new User
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *           application/xml:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *           application/x-www-form-urlencoded:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *         required: true
 *       responses:
 *         '200':
 *           description: Successful operation
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *             application/xml:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *         '405':
 *           description: Invalid input
 *
 *
 *
 * components:
 *   schemas:
 *     User:
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

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 */

router.post('/registration', userController.registration)
router.post('/login', userController.login)


router.get('/auth', userController.check)
router.get('/getAll',userController.getAll)
router.get('/:id',userController.getOne)


module.exports = router