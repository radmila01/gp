const Router = require('express')
const router = new Router()
const accountsController = require('../controllers/accountsController')


/**
 *@swagger
 *components:
 *  schemas:
 *      Account:
 *          type: object
 *          required:
 *              - id
 *              - name
 *          properties:
 *              id:
 *                  type: integer
 *                  description: The auto-generated id of the account
 *              name:
 *                  type: string
 *                  description: The name of the account
 *              email:
 *                  type: string
 *                  description: The account email
 *              role:
 *                  type: string
 *                  description: The account role
 *              organization:
 *                  type: string
 *                  description: The account organization
 *          example:
 *              id: 7
 *              name: TestAccount
 *              email: TestEmail@email.com
 *              role: Admin
 *              organization: Test
 */

/**
 * @swagger
 * paths:
 *   /api/accounts/getAll:
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
 *
 *   /api/accounts/{id}:
 *     get:
 *       summary: Get an account by ID
 *       tags: [Accounts]
 *       parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: The account id
 *       responses:
 *         '200':
 *              description: A single account.
 *         '400':
 *              description: Invalid ID value
 *         '404':
 *              description: Account not found
 *
 *
 *   /api/accounts:
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
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *                 fio:
 *                   type: string
 *               example:
 *                 email: admin@mail.ru
 *                 password: 2efD43_
 *                 fio: ADMIN
 *         required: true
 *       responses:
 *         '200':
 *              description: Successful created
 *         '405':
 *              description: Invalid input
 *
 *
 *   /api/accounts/login:
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
 *               type: object
 *               properties:
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string
 *               example:
 *                  email: admin@mail.ru
 *                  password: 2efD43_
 *         required: true
 *       responses:
 *         '200':
 *           description: Successful created
 *         '405':
 *           description: Invalid input
 *
 *   /api/accounts/auth:
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
 *               type: object
 *               properties:
 *                  id:
 *                      type: integer
 *                  email:
 *                      type: string
 *                  rolle:
 *                      type: string
 *               example:
 *                  id: 1
 *                  email: admin@mail.ru
 *                  password: 2efD43_
 *         required: true
 *        responses:
 *         '200':
 *           description: Successful
 *         '405':
 *           description: Invalid input
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
router.delete('/delete/:id',accountsController.delete)



module.exports = router