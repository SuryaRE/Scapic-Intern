var express=require('express');
var Excel = require('exceljs');
var path = require('path');
const JSON = require('circular-json');
var workbook = new Excel.Workbook();
var router = express.Router();
var root = path.dirname(require.main.filename);

router.get('/read',function(req,res,next){
    workbook.csv.readFile('F:\\GUVI\\WEB\\Retail.csv')
    .then(function(worksheet) { 
    res.send(JSON.stringify(worksheet));
    res.end();
    });
});


module.exports = router;