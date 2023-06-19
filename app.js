const express = require('express')
const path = require('path')

const jokesRouter = require('./routes/jokes')

const app = express()
const cors = require('cors')
const port = 3000

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Carambar Jokes API',
    },
    servers: [{ url: '/api/jokes' }]
  },
  apis: ['./routes/*.js'], // files containing annotations as above
};
const swaggerSpec = swaggerJsdoc(options);


app.use(express.json())
app.use(cors())

app.use('/api/jokes', jokesRouter)
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
