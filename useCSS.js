/*
This program compiles CSS written in stylus to CSS, then serves a static file , index.html.
*/

var port = process.argv[2];
var myPath = process.argv[3]; 

var express = require('express');
var stylus = require('stylus'); //imports stylus functionality for compiling css formatted in stylus

var app = express();

app.use(stylus.middleware(__dirname||myPath)); //compiles main.stylus located in the current directory into main.css 
app.use(express.static(__dirname||myPath));   //serves the static file index.html from the current directory

app.listen(port);

