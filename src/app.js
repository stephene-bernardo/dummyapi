const DummyResponse = require('./model/DummyResponse')
const express = require('express')
const webpack = require('webpack');
const bodyParser = require('body-parser')
const webpackDevMiddleware =require('webpack-dev-middleware');
const config = require('../webpack.config.js')
const compiler = webpack(config);

const app = express()
const jsonParser = bodyParser.json()

let returnValue = {statuscode: 200, body: ''};

app.post('/setReturnValue', jsonParser, (req, res) => {
    returnValue = req.body
    res.send('Successfullys stored')
})

app.get('/*', (req, res) => {
    res.status(returnValue.statuscode).send(returnValue.body);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
