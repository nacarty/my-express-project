/* 
We are using jade instead of HTML. Therefore we set 'view engine' to 'jade'.
We also set 'views' to the current directory or the path supplied on the commend line.
Since we are using jade, we need to use the render() function and supply the name of the file (index), to it.
It is understood that the file to serve is 'index.jade'.
*/

var EXPRESS = require('express');
var app = EXPRESS();
var PATH = require('path'); //Not needed because we do not need to join any paths, etc.

var port = process.argv[2];
var myPath = process.argv[3];

app.set('views',myPath||__dirname);  //views = Where the files are located. No need to use PATH.join(__dirname, somePathString) because myPath already holds the path variable
app.set('view engine', 'jade');  //view engine = the language of the front-end files. View engine can be jade or ejs or sass, etc

app.get('/home', listener);  //accept GET to the '/home' directory.
app.listen(port);

function listener(request, response){
    console.log(__dirname);
    response.render('index', {date: new Date().toDateString()} );  //Note: the date object is rendered in the index.jade file.
}
