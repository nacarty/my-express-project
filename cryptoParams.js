var express = require('express');

var app = express();

var port = process.argv[2];
var path = '/message/:id'; //the path supplied in the request

app.put(path, myCallback);  //invokes the callback when a PUT request is received on the given path.
app.listen(port);

function myCallback(req, res){
    
    var id = req.params.id;
    var crypto = require("crypto").createHash('sha1').update(new Date().toDateString()+id).digest('hex');
    
            /*Or do this alternatively:
            var crypto = require('crypto')
                  .createHash('sha1')
                  .update(new Date().toDateString()+ id)
                  .digest('hex'); 
            */
            
    res.send(crypto);
    
}

