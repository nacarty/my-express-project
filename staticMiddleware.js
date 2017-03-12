/*For any request, GET or POST or any other, the program serves 
  index.html (ie the main html file) located at myPath or in the current directory.
  In other words, we do not have to manually write text to the response stream. 
  That text comes from the index.html file.
*/

var EXPRESS = require('express');
var app = EXPRESS();
var PATH = require('path'); //not used. Usually used to join file path names etc

var port = process.argv[2];  //port to listen on
var myPath = process.argv[3];  //path to search for the file to serve


//The code below simply serves the main file located in 'myPath' or the current directory, '__dirname'. The main file if not specified is 'index.html'

app.use(EXPRESS.static(myPath||__dirname));  //Note: __dirname is an attribute of the global object. It is the current directory of the current file.

app.listen(port); 