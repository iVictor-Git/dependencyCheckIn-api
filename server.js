const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.status(200).json({
        message: 'Hello World'
    })
})

app.listen(3000)