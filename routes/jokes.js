const express = require('express')
const router = express.Router()
const jokesController = require('../controllers/jokes')

/**
 * @swagger
 *
 * /:
 *   get:
 *     tags:
 *     - Jokes
 *     produces:
 *       - application/json
 *     summary: Get all jokes
 *     description: Get all jokes
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Joke not found
 */
router.get('/', jokesController.getJokes)

/**
 * @swagger
 *
 * /joke/{id}:
 *   get:
 *     tags:
 *     - Jokes
 *     produces:
 *       - application/json
 *     summary: Get joke by id
 *     description: Get answer by id
 *     parameters:
 *     - name: id
 *       in: path
 *       description: ID of the joke
 *       required: true
 *       schema:
 *         type: number
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Joke not found
 */
router.get('/joke/:id', jokesController.getJokeById)

/**
 * @swagger
 *
 * /random:
 *   get:
 *     tags:
 *     - Jokes
 *     produces:
 *       - application/json
 *     summary: Get a random joke
 *     description: Get a random joke
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.get('/random', jokesController.getRandomJoke)

module.exports = router