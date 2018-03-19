
/*
Express and postgres support
npm init
npm install express
npm install pg
npm install body-parser

*/

//
// MODULES
//

const express = require('express');
const pg = require('pg');
const bodyparser = require('body-parser');

let settings = require('./config');


//
// END MODULE SET
//

//
// CONNECT TO DBSERVER
//
console.log("TEST server start");
var conString = "postgres://"+settings.username+":"+settings.pw+"@localhost:5432/TIJ_DB";
var client = new pg.Client(conString);
client.connect();

console.log("TEST server end");

//
// END DBSERVER CONNECT
//


//
// SERVER START
//

// This line starts a server that uses
// Express framework with Node.JS
var app = express();
// Register bodyparser with json support
app.use(bodyparser.json());

//
// SERVER START END
//

//
// DB ROUTING
//

app.get('/', function (req, res) {
  res.send('hello world')
})


//
// DB ROUTING END
//

//
// NODEJS SERVER START
//
console.log("NodeJS Server START");

// Start nodeJS server
var server = app.listen(1234, function()
{
	var hostport = server.address().port;
	console.log("Express server is listening");
	console.log("Port is: %s", hostport);
});

console.log("NodeJS Server END");

//
// NODEJS SERVER START END
//

//client.end();
