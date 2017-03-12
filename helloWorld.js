/* Instead of using HTTP in naked NodeJS, we are using expressJS in this application.
Therefore, http.get() is substituted by app.get(). app.get() accepts a GET to a specified path.
The rest of the app looks very much like plain NodeJS. Look at the connectionListener for example.
*/

var express = require('express');
var app = express();
var path = '/home';
var port = process.argv[2];

app.get(path, connectionListener); //if a GET request is received with the '/home' path, then execute connectionListener()
app.listen(port);

function connectionListener(request, response)
{
    //the response object is being directly written to then sent....below
    response.writeHead(200, {'Content-Type':'utf8'});
    response.write('Hello World!'); 
    response.end();
}