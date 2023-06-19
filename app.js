const express = require('express')
const path = require('path')

const jokesRouter = require('./routes/jokes')

const app = express()
const cors = require('cors')
const port = 3000

app.use(express.json())
app.use(cors())

app.use('/jokes', jokesRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
