let express = require("express");
let bcrypt = require("bcrypt-nodejs");

let tijPg = require("./pgserver");
let tijUser = require('./models/user');
let tijNotification = require('./models/notification');
let tijHousingcompany = require('./models/housingcompany');


let tijRouter = express.Router();

generateHash = function(passphrase) {
    return bcrypt.hashSync(passphrase, bcrypt.genSaltSync(8),null);
}

isPassphraseValid = function (passphrase) {
    return bcrypt.compareSync(passphrase, this.passphrase);
}


tijRouter.get("/housingcomp", function(req,res) {
    let housingCompanies = [];
    let housingCompany = tijHousingcompany;
    
    tijPg.query('SELECT * FROM tij_housing_comp') 
    .then(pgres => {
        queryContents = pgres.rows;
        for (let i=0;i<pgres.rows.length;i++) 
        {
            housingCompany = {
                id:pgres.rows[i].id,
                name:pgres.rows[i].name,
                address:pgres.rows[i].address,
                zip:pgres.rows[i].zip,
                city:pgres.rows[i].city,
                business_id:pgres.rows[i].business_id
            };
            housingCompanies.push(housingCompany);         
        }
        return res.status(200).json(housingCompanies);

    }).catch(e => console.error(e.stack));
});

tijRouter.get("/users", function(req,res) {
    let users = [];
    let user = tijUser;
    
    tijPg.query('SELECT * FROM tij_users') 
    .then(pgres => {
        queryContents = pgres.rows;
        for (let i=0;i<pgres.rows.length;i++) 
        {
            user = {
                id:pgres.rows[i].id,
                id_flat:pgres.rows[i].id_flat,
                emailpassword:pgres.rows[i].emailpassword,
                first_name:pgres.rows[i].first_name,
                last_name:pgres.rows[i].last_name,
                phone:pgres.rows[i].phone,
                role:pgres.rows[i].role,
                last_login:pgres.rows[i].last_login,
                billing_address:pgres.rows[i].billing_address,
                zip:pgres.rows[i].zip,
                city:pgres.rows[i].city
            };
            users.push(user);         
        }
        return res.status(200).json(users);

    }).catch(e => console.error(e.stack));
});

tijRouter.get("/notifications", function(req,res) {
    let notifications = [];
    let notification = tijNotification;
    
    tijPg.query('SELECT * FROM tij_notifications') 
    .then(pgres => {
        queryContents = pgres.rows;
        for (let i=0;i<pgres.rows.length;i++) 
        {
            notification = {
                id:pgres.rows[i].id,
                id_user:pgres.rows[i].id_user,
                id_housing_comp:pgres.rows[i].id_housing_comp,
                id_checkout:pgres.rows[i].id_checkout,
                read_id:pgres.rows[i].read_id,
                sent_date:pgres.rows[i].sent_date,
                read_date:pgres.rows[i].read_date,
                title:pgres.rows[i].title,
                message:pgres.rows[i].message,
                notif_type:pgres.rows[i].notif_type,
                checkout:pgres.rows[i].checkout,
                checkout_message:pgres.rows[i].checkout_message,
                status:pgres.rows[i].status

            };
            notifications.push(notification);         
        }
        return res.status(200).json(notifications);

    }).catch(e => console.error(e.stack));
});

tijRouter.post("/login", function(req,res){

    let email = req.body.uname; // !!!!!!!!!!!!!!!!! Syötteen puhdistus puuttuu
    let password = req.body.passphrase; // !!!!!!!!!!!!!!!!! Syötteen puhdistus puuttuu

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

tijRouter.post("/logout", function(req,res) {
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

module.exports = tijRouter;