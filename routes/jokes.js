const express = require('express')
const router = express.Router()
const jokesController = require('../controllers/jokes')

/* GET users listing. */
router.get('/', jokesController.getJokes)

router.get('/joke/:id', jokesController.getJokeById)

router.get('/random', jokesController.getRandomJoke)

module.exports = router