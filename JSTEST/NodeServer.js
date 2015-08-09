/**
 * Created by Xuchen on 8/9/15.
 */
//simple Node Server to handler file
//used for URL test
//http://localhost:8000 or http://127.0.0.1:8000 to connect to server

    //P 314

var http = require('http');
var fs = require('fs');

var server = new http.Server();
server.listen(8000);

server.on("request", function (request, response) {
    var url = require('url').parse(request.url);

    if(url.pathname === 'test/delay'){

    }
})



