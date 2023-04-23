const Router = require('express')
const router = new Router()
const accountsController = require('../controllers/accountsController')

/**
 * @swagger
 * paths:
 *   /accounts/{accountsId}:
 *     get:
 *       summary: Get an account by ID
 *       tags: [Accounts]
 *       parameters:
 *         ...
 *       responses:
 *         '200':
 *           description: A single account.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Account'
 *         '400':
 *              description: Invalid ID value
 *         '404':
 *              description: Account not found
 *
 *
 *
 *   /accounts:
 *     get:
 *       summary: Get all accounts
 *       tags: [Accounts]
 *       operationId: getAll
 *       responses:
 *         '200':
 *           description: A list of accounts.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Account'
 *
 *     post:
 *       summary: Registration
 *       tags: [Accounts]
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
 *           description: Successful created
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
 *   /accounts/login:
 *     post:
 *       summary: Logging to account
 *       tags: [Accounts]
 *       description: Logging to account
 *       operationId: login
 *       requestBody:
 *         description: Logging to account
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
 *           description: Successful created
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
 *   /accounts/auth:
 *      get:
 *        summary: Check JWT
 *        tags: [Accounts]
 *        description: Logging to account
 *        operationId: check
 *        requestBody:
 *         description: Check JWT
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
 *
 *
 *
 * components:
 *   schemas:
 *     Account:
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
 */

/**
 * @swagger
 * tags:
 *   name: Accounts
 *   description: The accounts managing API
 */

router.post('/', accountsController.registration)
router.post('/login', accountsController.login)


router.get('/auth', accountsController.check)
router.get('/getAll',accountsController.getAll)
router.get('/:id',accountsController.getOne)


module.exports = router