/*
This program receives a GET request with path '/search' and resends the query to the 
user in JSON format. NOTE: res.send() converts objects into JSON automatically.
*/

var express = require('express');
var app = express();
var path = '/search';  //the path supplied by the GET request
var port = process.argv[2];  //supplied in the command line

app.get(path, callback);
app.listen(port);

function callback(req, res)
{
    var q = req.query; //the query associated with the GET request
    res.send(q);
    
/* // OR
    var Keys = Object.keys(q);
    var obj = {};
    
    for (var i = 0; i<Keys.length; i++)
       obj[Keys[i].toString()] = q[Keys[i]];
    

    res.send(obj);
*/
}