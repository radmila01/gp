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
 *              - nam
 *          properties:
 *              id:
 *                  type: integer
 *                  description: The auto-generated id of the account
 *              surname:
 *                  type: string
 *                  description: Account surname
 *              nam:
 *                  type: string
 *                  description: Account name
 *              email:
 *                  type: string
 *                  description: Account email
 *              password:
 *                  type: string
 *                  description: Account password
 *              organization:
 *                  type: string
 *                  description: Account organization
 *          example:
 *              id: 7
 *              surname: AccountSurname
 *              name: AccountName
 *              email: TestEmail@email.com
 *              password: TestPassword
 *              organization: TestOrganization
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
 *                 surname:
 *                   type: string
 *                 nam:
 *                   type: string
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *               example:
 *                 surname: userSurname
 *                 nam: userName
 *                 email: admin@mail.ru
 *                 password: 2efD43_
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
 *       summary: Login to account
 *       tags: [Accounts]
 *       description: Login to account
 *       operationId: login
 *       requestBody:
 *         description: Login to account
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
 *   /api/accounts/users/projects/addUserToProject:
 *     post:
 *       summary: Добавление пользователя к проекту
 *       tags: [Accounts]
 *       description: Добавление пользователя к проекту по фамилии, имени, и почте
 *       operationId: addUserToProject
 *       requestBody:
 *         description: Данные для добавления пользователя к проекту
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 surname:
 *                   type: string
 *                 nam:
 *                   type: string
 *                 email:
 *                   type: string
 *                 projectId:
 *                   type: integer
 *             example:
 *               surname: "zavalishin"
 *               nam: "kirill"
 *               email: "admin@mail.ru"
 *               projectId: 1
 *       responses:
 *         '200':
 *           description: Успешно
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *         '500':
 *           description: Внутренняя ошибка сервера
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *
 *
 *   /api/accounts/delete/{id}:
 *     delete:
 *       summary: Delete account
 *       tags: [Accounts]
 *       description: Delete account
 *       operationId: delete
 *       parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Account id
 *       responses:
 *         '200':
 *           description: Account was deleted.
 */

/**
 * @swagger
 * tags:
 *   name: Accounts
 *   description: The accounts managing API
 */

router.post('/', accountsController.registration)
router.post('/login', accountsController.login)


router.get('/getAll',accountsController.getAll)
router.get('/:id',accountsController.getOne)
router.delete('/delete/:id',accountsController.delete)

router.post('/users/projects/addUserToProject', accountsController.addUserToProject);
router.post('/auth', accountsController.check)


module.exports = router