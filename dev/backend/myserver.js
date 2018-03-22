let express = require("express");
let bodyParser = require("body-parser");

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
    let letters = "abcdefghijklmnopqrstu1234567890";

    //tijPg.query("SELECT COUNT(*) FROM tij_users WHERE email='"+email+"' AND password='"+password+"'")
    // Testauksessa katsotaan vain, että onko sposti olemassa, kun dummydata sisältää randomi salasanoja 
    tijPg.query("SELECT role, (SELECT COUNT(*) FROM tij_users WHERE email='"+email+"') AS found FROM tij_users WHERE email='"+email+"'")
    .then(pgres => {
      
        
        console.log(pgres.rows[0].role);


        return res.status(200).json({"token":token,"userGroup":pgres.rows.role});

    }).catch(e => {
        return res.status(409).json({"message":"conflict"});
        console.error(e.stack)
    });






    /*userModel.findOne({'uname':req.body.uname}, function(err,item) {
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
    })*/
});

app.post("/logout", function(req,res) {
	/*let token = req.headers.token;
	if (token) {
		for(let i=0; i<loggedUsers.length;i++) {
			if(token === loggedUsers[i]) {
				loggedUsers.splice(i,1);
				return res.status(200).json({"message":"Logged out"});
			}
			
		}
		
	}
	
	return res.status(404).json({"message":"Not found"});
	*/
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






app.use("/api", isUserLogged, tijRouter);

app.use("/apim", tijRouterManager);


app.listen(3001);
console.log("Running on port 3001");