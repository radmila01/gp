const Router = require('express')
const router = new Router()
const accountsController = require('../controllers/accountsController')

/**
 * @swagger
 * paths:
 *   /Accounts/{accountsId}:
 *     get:
 *       summary: Get a user by ID
 *       tags: [Accounts]
 *       parameters:
 *         ...
 *       responses:
 *         '200':
 *           description: A single user.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Account'
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
 *                   $ref: '#/components/schemas/Account'
 *
 *      /user/registration:
 *     post:
 *       summary: Registration
 *       tags: [Users]
 *       description: Registration
 *       operationId: registration
 *       requestBody:
 *         description: Create a new Account
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Accounts'
 *           application/xml:
 *             schema:
 *               $ref: '#/components/schemas/Accounts'
 *           application/x-www-form-urlencoded:
 *             schema:
 *               $ref: '#/components/schemas/Accounts'
 *         required: true
 *       responses:
 *         '200':
 *           description: Successful operation
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Accounts'
 *             application/xml:
 *               schema:
 *                 $ref: '#/components/schemas/Accounts'
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
 *   name: Accounts
 *   description: The users managing API
 */

router.post('/', accountsController.registration)
router.post('/login', accountsController.login)


router.get('/auth', accountsController.check)
router.get('/getAll',accountsController.getAll)
router.get('/:id',accountsController.getOne)


module.exports = router