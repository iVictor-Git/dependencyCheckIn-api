const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello World'
    })
})

app.get('/organizations', (req, res) => {
    
})

app.listen(3000)