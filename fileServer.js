var port = process.argv[2];
var fileName = process.argv[3];

var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books', callback);
 app.listen(port);
 
function callback(req, res)
 {
     var obj;
     console.log('this is the file name', fileName);
     
     fs.readFile(fileName, function (err, data){
                                if (err)
                                {
                                    console.log('There is a HUGE error here. \n')
                                    throw err;
                                }
                                
                                //else
                                
                                obj = JSON.parse(data);
                                res.json(obj);
                                
                            }); 
     
}