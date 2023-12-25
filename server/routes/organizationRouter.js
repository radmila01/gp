const Router = require('express')
const router = new Router()
const organizationController = require('../controllers/organizationController')

/**
 *@swagger
 *components:
 *  schemas:
 *      Organization:
 *          type: object
 *          required:
 *              - id
 *              - name
 *          properties:
 *              id:
 *                  type: integer
 *                  description: The auto-generated id of the organization
 *              name:
 *                  type: string
 *                  description: Organization description
 *          example:
 *              id: 2
 *              name: TestOrganization
 */

/**
 * @swagger
 * paths:
 *   /api/organization:
 *     post:
 *       summary: Create organization
 *       tags: [Organization]
 *       description: Create organization
 *       operationId: create
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *               example:
 *                 name: TestOrganizationName
 *       responses:
 *         '200':
 *           description: Organization successfully created
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Organization'
 *         '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *
 *   /api/organization/users/add-to-company:
 *     post:
 *       summary: Add user to company
 *       tags: [Organization]
 *       description: Add user to company
 *       operationId: addToCompany
 *       requestBody:
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
 *                 organizationId:
 *                   type: integer
 *               example:
 *                 surname: test1
 *                 nam: test1
 *                 organizationId: 1
 *       responses:
 *         '200':
 *           description: User successfully added to company
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *         '404':
 *           description: Company or user not found
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *         '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *
 *   /api/organization/users/get-all-users/{id}:
 *     get:
 *       summary: Get users in company
 *       tags: [Organization]
 *       description: Get users in organization
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The organization id
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: Successful
 *         '404':
 *           description: Company not found
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *         '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 */

/**
 * @swagger
 * tags:
 *   name: Organization
 *   description: The organization managing API
 */

router.post('/', organizationController.create)
router.post('/users/add-to-company', organizationController.addToCompany);
router.get('/users/get-all-users/:organizationId', organizationController.getUsersInCompany);
module.exports = router