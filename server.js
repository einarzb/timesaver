//package requirements
var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require ('fs');

//port
var port = 6000;


//rocknroll/
var app = express();


app.listen(port, function () {
  console.log("fighting time consumption like a muddafucker using pinterest" + port );
})
