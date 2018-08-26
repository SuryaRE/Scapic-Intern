const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());

app.all('/*',function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept');
    if(req.method=='OPTIONS'){
        res.status(200).end();
    }else{
        next();
    }
});


app.use('/api/user',require('../src/api/user'));
app.use('/api/excel',require('../src/api/data'));

module.exports = app;