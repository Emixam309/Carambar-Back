const jokes = require('../data/jokes.json')

const jokesController = {
  getJokes: (req, res) => {
    try {
      res.status(200).json({message: "Success", body: jokes})
      console.log("GET - /jokes")
    } catch (e) {
      console.error("Error | GET - /jokes - ", e)
    }
  },
  getJokeById: (req, res) => {
    try {
      const jokeIdString = req.params?.id
      const jokeId = parseInt(jokeIdString)
      const joke = jokes.find(joke => joke.id === jokeId)
      if (joke) {
        res.status(200).json({message: "Success", body: joke})
        console.log("GET - /jokes/joke/:id")
      } else {
        console.log("GET - /jokes/joke/:id - Not Found")
        res.status(404).json({message: 'Joke not found'})
      }
    } catch (e) {
      console.error("Error | GET - /jokes/joke/:id - ", e)
    }
  },
  getRandomJoke: (req, res) => {
    try {
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
      res.status(200).json(randomJoke)
      console.log("GET - /jokes/random-joke")
    } catch (e) {
      console.error("Error | GET - /jokes/random-joke - ", e)
    }
  }
}

module.exports = jokesController