let express = require("express");
let bodyParser = require("body-parser");

let bcrypt = require("bcrypt-nodejs");

let crypto = require('crypto');
let salt = 'jg#¤gdml5begf%Wgwerbewegewbmwvie4WEGobw';
let tijPg = require("./pgserver");

let tijRouter = require("./tijRouter");
let tijRouterManager = require("./tijRouterManager");

let app = express();

app.use(bodyParser.json());

let loggedUsers = [];

app.post("/login", function(req,res){

    let email = req.body.uname; // !!!!!!!!!!!!!!!!! Syötteen puhdistus puuttuu
    let password = req.body.passphrase; // !!!!!!!!!!!!!!!!! Syötteen puhdistus puuttuu

    let token = "";
    let token2 = crypto.createHash('sha256');
    let letters = "abcdefghijklmnopqrstu1234567890";

    //tijPg.query("SELECT COUNT(*) FROM tij_users WHERE email='"+email+"' AND password='"+password+"'")
    // Testauksessa katsotaan vain, että onko sposti olemassa, kun dummydata sisältää randomi salasanoja
    tijPg.query("SELECT role, (SELECT COUNT(*) FROM tij_users WHERE email='"+email+"') AS found FROM tij_users WHERE email='"+email+"'")
    .then(pgres => {
        if (pgres.rows[0].found === 0) {
            return res.status(409).json({"message":"conflict!!"});
        }

        for (let i=0; i< 128; i++)
        {
            let temp = Math.floor(Math.random() * letters.length);
            token = token + letters[temp];
        }

        loggedUsers.push(token);

        token2.update(token + pgres.rows[0].role + salt);

        console.log("User logged.");
        return res.status(200).json({"token":token,"token2":token2.digest('hex')});

    }).catch(e => {
        return res.status(409).json({"message":"conflict!"});
        console.error(e.stack)
    });
});

app.post("/logout", function(req,res) {
	let token = req.headers.token;
	if (token) {
		for(let i=0; i<loggedUsers.length;i++) {
			if(token === loggedUsers[i]) {
                loggedUsers.splice(i,1);
                console.log("User logged out.")
				return res.status(200).json({"message":"Logged out"});
			}

		}

	}

	return res.status(404).json({"message":"Not found"});
});


function isUserLogged(req,res,next) {
    let token = req.headers.token;
    console.log("token"+token);
    for (let i=0; i<loggedUsers.length;i++)
    {
        if (token === loggedUsers[i]) {
            console.log("OK");
            return next();
        }
    }
    return res.status(403).json({"message":"forbidden"});
}

/* tsekkaus väliaikaisesti pois
app.use("/api",isUserLogged, tijRouter);
app.use("/apim",isUserLogged, tijRouterManager);
*/
app.use("/api", tijRouter);

app.use("/apim", tijRouterManager);


app.listen(3001);
console.log("Running on port 3001");
