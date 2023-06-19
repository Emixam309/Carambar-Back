const express = require('express')
const path = require('path')

const indexRouter = require('./routes/index')
const jokesRouter = require('./routes/jokes')

const app = express()
const port = 3000

app.use(express.json())
// app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/jokes', jokesRouter)


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
