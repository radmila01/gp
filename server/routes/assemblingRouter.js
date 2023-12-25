const Router = require('express')
const router = new Router()

const AssemblingController = require("../controllers/AssemblingController");

/**
 *@swagger
 *components:
 *  schemas:
 *      Assembling:
 *          type: object
 *          required:
 *              - id
 *              - description
 *              - version
 *              - url
 *              - assemblingNumber
 *          properties:
 *              id:
 *                  type: integer
 *                  description: The auto-generated id of the assembling
 *              description:
 *                  type: string
 *                  description: Assembling description
 *              version:
 *                  type: string
 *                  description: Assembling version
 *              url:
 *                  type: string
 *                  description: Assembling URL
 *              assemblingNumber:
 *                  type: integer
 *                  description: Assembling number
 *          example:
 *              description: AssemblingDescription
 *              version: AssemblingVersion
 *              assemblingNumber: 11
 */

/**
 * @swagger
 * paths:
 *    /api/assembling/{id}:
 *      get:
 *         summary: Get an assembling by ID
 *         tags: [Assembling]
 *         description: Get an assembling by ID
 *         parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: The assembling id
 *         responses:
 *           '200':
 *             description: A single assembling.
 *             content:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/Assembling'
 *           '400':
 *                description: Invalid ID value
 *           '404':
 *                description: Assembling not found
 *
 * /api/assembling:
 *   post:
 *     summary: Create assembling
 *     tags: [Assembling]
 *     description: Create assembling
 *     operationId: createAssembling
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *               version:
 *                 type: string
 *               assemblingNumber:
 *                 type: integer
 *               url:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: Successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 description:
 *                   type: string
 *                 version:
 *                   type: string
 *                 assemblingNumber:
 *                   type: integer
 *                 url:
 *                   type: string
 *                   format: binary
 */

/**
 * @swagger
 * tags:
 *   name: Assembling
 *   description: The assembling managing API
 */

router.post('/', AssemblingController.create)
router.get('/:id', AssemblingController.getAssemblingById)

module.exports = router