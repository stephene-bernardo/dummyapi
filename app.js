const DummyResponse = require('./src/model/DummyResponse')
const express = require('express')
var bodyParser = require('body-parser')

const app = express()
var jsonParser = bodyParser.json()

var returnValue = {statuscode: 200, body: ""};

app.post('/setReturnValue', jsonParser, (req, res) => {
    returnValue = req.body
    res.send('Successfully stored')
})

app.get('/*', (req, res) => {
    res.status(returnValue.statuscode).send(returnValue.body);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))