const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

require('./src')(app)

app.listen(9000, ()=>{
    console.log('Express iniciou com sucesso');
})