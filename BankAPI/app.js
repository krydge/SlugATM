const express = require('express')
const app = express()
const port = 5001

app.get('/', (req, res) => {
    res.send('Welcome to the slug bank')
})

app.listen(port)