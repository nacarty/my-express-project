//this application

var EXPRESS = require('express');
var BODYPARSER = require('body-parser'); //used to parse the body of the request passed via the url
var app = EXPRESS();
var myPath = '/form'; //the url I wish to respond to...That is, when the request url = '/form', this event is triggered

//The following middleware function MUST appear before the app.post() function.
app.use(BODYPARSER.urlencoded({extended:false}));  

app.post(myPath, callback); //responds when the request is from url with '/form'. 


function callback(req, res)
{
    console.log(req.url);
    
    var revStr = req.body.str.split('').reverse().join(''); //split the string into an array, reverse it, then join it back into a string
    
    res.writeHead(200, {'Content-Type':'text/plain'}); //not always necessary
    res.end(revStr);  //may use instead:  res.send(revStr);
}

app.listen(process.argv[2]);
