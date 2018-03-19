let express = require("express");
let bodyParser = require("body-parser");

let tijRouter = require("./tijRouter");


let app = express();

app.use(bodyParser.json());



/*mongoose.Promise = global.Promise;

let app = express();

app.use(bodyParser.json());


let loggedUsers = [];



mongoose.connect("mongodb://localhost/carshopdatabase").then(
    () => console.log("Successfully connected to mongodb"),
    (error) =>{
        console.log("Error in connection to mongodb:");
        console.log(error);


    }
);

app.post("/register", function(req,res){
    let newUser = new userModel({});
    newUser.uname = req.body.uname;
    newUser.passphrase = newUser.generateHash(req.body.passphrase);
    newUser.save(function(err) {
        if (err) {
            return res.status(409).json({"message":"conflict"});
        }
        return res.status(200).json({"message":"success"});
    })
});

app.post("/login", function(req,res){
    userModel.findOne({'uname':req.body.uname}, function(err,item) {
        if (err) {
            return res.status(409).json({"message":"conflict"});
        }
        if (!item){
            return res.status(409).json({"message":"conflict"});
        }
        if (!item.isPassphraseValid(req.body.passphrase))
        {
            return res.status(409).json({"message":"conflict"});
        }

        let token = "";
        let letters = "abcdefghijklmnopqrstu1234567890";

        for (let i=0; i< 128; i++)
        {

            let temp = Math.floor(Math.random() * letters.length);
            token = token + letters[temp];
        }
        console.log(token);
        loggedUsers.push(token);

        return res.status(200).json({"token":token});
    })
});

function isUserLogged(req,res,next) {
    let token = req.headers.token;
    for (let i=0; i<loggedUsers.length;i++)
    {
        if (token === loggedUsers[i]) {
            return next();
        }
    }
    return res.status(403).json({"message":"forbidden"});
}

*/

app.use("/api", tijRouter)
//app.use("/api", isUserLogged, carRouter)

app.listen(3000);
console.log("Running on port 3000");


























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



/*
//
// END MODULE SET
//

//
// CONNECT TO DBSERVER
//
console.log("TEST server start");
var conString = "postgres://"+settings.username+":"+settings.pw+"@"+settings.address+":"+settings.port+"/"+settings.dbname;
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
*/