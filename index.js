const express = require('express')
const app = express()
const port = 3001

const bodyParser = require('body-parser')
const cors = require('cors')

const saveToken = require('./saveToken');

app.use(bodyParser.json())
app.use(cors())

app.post('/', saveToken)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))