let express = require("express");

let tijPg = require("./pgserver");
let tijUser = require('./models/user');
let tijNotification = require('./models/notification');
let tijHousingcompany = require('./models/housingcompany');


let tijRouter = express.Router();


// companies - get some by name
tijRouter.get("/companyseek/:search", function(req,res) {
    let housingCompanies = [];
    let housingCompany = tijHousingcompany;
    var getSearch = req.params.search;

    tijPg.query("SELECT * FROM tij_housing_comp WHERE name ~* '^"+getSearch+".*'")
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

// companies - get some by address
tijRouter.get("/companyseekaddress/:search", function(req,res) {
    let housingCompanies = [];
    let housingCompany = tijHousingcompany;
    var getSearch = req.params.search;

    tijPg.query("SELECT * FROM tij_housing_comp WHERE address ~* '^"+getSearch+".*'")
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



// users - get some by name
tijRouter.get("/usersseek/:search", function(req,res) {
    let users = [];
    let user = tijUser;
    var getSearch = req.params.search;

    tijPg.query("SELECT *, CONCAT (last_name, ' ', first_name) AS fullname FROM tij_users WHERE CONCAT (last_name, ' ', first_name) ~* '^"+getSearch+".*'")
    .then(pgres => {
        queryContents = pgres.rows;
        for (let i=0;i<pgres.rows.length;i++)
        {
            user = {
                id:pgres.rows[i].id,
                id_flat:pgres.rows[i].id_flat,
                email:pgres.rows[i].email,
                password:pgres.rows[i].password,
                first_name:pgres.rows[i].first_name,
                last_name:pgres.rows[i].last_name,
                phone:pgres.rows[i].phone,
                role:pgres.rows[i].role,
                last_login:pgres.rows[i].last_login,
                billing_address:pgres.rows[i].billing_address,
                zip:pgres.rows[i].zip,
                city:pgres.rows[i].city,
                fullname:pgres.rows[i].fullname                
            };
            users.push(user);
        }
        return res.status(200).json(users);

    }).catch(e => console.error(e.stack));
});

// users - get some by address
tijRouter.get("/usersseekaddress/:search", function(req,res) {
    let users = [];
    let user = tijUser;
    var getSearch = req.params.search;

    tijPg.query("SELECT *, CONCAT (last_name, ' ', first_name) AS fullname FROM tij_users WHERE billing_address ~* '^"+getSearch+".*'")
    .then(pgres => {
        queryContents = pgres.rows;
        for (let i=0;i<pgres.rows.length;i++)
        {
            user = {
                id:pgres.rows[i].id,
                id_flat:pgres.rows[i].id_flat,
                email:pgres.rows[i].email,
                password:pgres.rows[i].password,
                first_name:pgres.rows[i].first_name,
                last_name:pgres.rows[i].last_name,
                phone:pgres.rows[i].phone,
                role:pgres.rows[i].role,
                last_login:pgres.rows[i].last_login,
                billing_address:pgres.rows[i].billing_address,
                zip:pgres.rows[i].zip,
                city:pgres.rows[i].city,
                fullname:pgres.rows[i].fullname
            };
            users.push(user);
        }
        return res.status(200).json(users);

    }).catch(e => console.error(e.stack));
});

// users - get all
tijRouter.get("/users", function(req,res) {
    let users = [];
    let user = tijUser;

    tijPg.query(" SELECT tij_users.*, CONCAT (last_name, ' ', first_name) AS fullname, tij_flats.flat_number, tij_flats.stairway, tij_houses.address AS h_address, tij_houses.zip AS h_zip, tij_housing_comp.city AS h_city FROM tij_users INNER JOIN tij_flats ON (tij_users.id_flat = tij_flats.id) INNER JOIN tij_houses ON (tij_flats.id_houses = tij_houses.id) INNER JOIN tij_housing_comp ON (tij_houses.id_housing_comp= tij_housing_comp.id)")
    .then(pgres => {
        queryContents = pgres.rows;
        for (let i=0;i<pgres.rows.length;i++)
        {
            user = {
                id:pgres.rows[i].id,
                id_flat:pgres.rows[i].id_flat,
                email:pgres.rows[i].email,
                password:pgres.rows[i].password,
                first_name:pgres.rows[i].first_name,
                last_name:pgres.rows[i].last_name,
                phone:pgres.rows[i].phone,
                role:pgres.rows[i].role,
                last_login:pgres.rows[i].last_login,
                billing_address:pgres.rows[i].billing_address,
                zip:pgres.rows[i].zip,
                city:pgres.rows[i].city,
                fullname:pgres.rows[i].fullname,

                flat_number:pgres.rows[i].flat_number,
				stairway:pgres.rows[i].stairway,
				
				h_address:pgres.rows[i].h_address,
                h_zip:pgres.rows[i].h_zip,
                h_city:pgres.rows[i].h_city
            };
            users.push(user);
        }
        return res.status(200).json(users);

    }).catch(e => console.error(e.stack));
});

// users - get users by housingcompany
tijRouter.get("/usersbycompany/:hid", function(req,res) {
    let users = [];
    let user = tijUser;
    var housingId = [ parseInt(req.params.hid) ];

    tijPg.query("SELECT *, CONCAT (last_name, ' ', first_name) AS fullname FROM tij_users WHERE id_flat="+housingId)
    .then(pgres => {
        queryContents = pgres.rows;
        for (let i=0;i<pgres.rows.length;i++)
        {
            user = {
                id:pgres.rows[i].id,
                id_flat:pgres.rows[i].id_flat,
                email:pgres.rows[i].email,
                password:pgres.rows[i].password,
                first_name:pgres.rows[i].first_name,
                last_name:pgres.rows[i].last_name,
                phone:pgres.rows[i].phone,
                role:pgres.rows[i].role,
                last_login:pgres.rows[i].last_login,
                billing_address:pgres.rows[i].billing_address,
                zip:pgres.rows[i].zip,
                city:pgres.rows[i].city,
                fullname:pgres.rows[i].fullname
            };
            users.push(user);
        }
        return res.status(200).json(users);

    }).catch(e => console.error(e.stack));
});

// users - get one by id
tijRouter.get("/users/:id", function(req,res) {
    let user = tijUser;
    var getId = [ parseInt(req.params.id) ];

    tijPg.query('SELECT * FROM tij_users WHERE id = $1', getId)
    .then(pgres => {
        queryContents = pgres.rows;
        user = pgres.rows[0];
        return res.status(200).json(user);

    }).catch(e => console.error(e.stack));
});

// users - add (insert) one
tijRouter.put("/users", function(req,res){
    let addUser = tijUser;
    addUser = {
        id_flat:req.body.id_flat,
        email:req.body.email,
        password:req.body.password,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phone:req.body.phone,
        role:parseInt(req.body.role),
        last_login:req.body.last_login,
        billing_address:req.body.billing_address,
        zip:req.body.zip,
        city:req.body.city
    };
    tijPg.query('INSERT INTO tij_users (id_flat, email, password, first_name, last_name,' +
                'phone, role, last_login, billing_address, zip, city)' +
                'VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
                    [addUser.id_flat, addUser.email, addUser.password, addUser.first_name, addUser.last_name, addUser.phone,
                    addUser.role, addUser.last_login, addUser.billing_address, addUser.zip, addUser.city]
                )
    .then(pgres => {
        return res.status(200)
        .json({
            status: 'OK', message: 'user inserted'
        });
    }).catch(e => console.error(e.stack));
});


// users - update one from admin
tijRouter.post("/users2/:id", function(req,res){
    let putId = parseInt(req.params.id);
    let putUser = tijUser;
    console.log(JSON.stringify(req.body)+"\n\n")
/* Näihin oma update logiikka
    h_address:this.state.h_address,
    stairway:this.state.stairway,
    flat_number:this.state.flat_number,
    h_zip:this.state.h_zip,
    h_city:this.state.h_city
*/
    putUser = {
        email:req.body.email,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phone:req.body.phone,
        billing_address:req.body.billing_address,
        zip:req.body.zip,
        city:req.body.city

    };
    tijPg.query('UPDATE tij_users SET email=($1), first_name=($2), last_name=($3),' +
                'phone=($4), billing_address=($5), zip=($6), city=($7) WHERE id=($8)',
                    [putUser.email, putUser.first_name, putUser.last_name, putUser.phone,
                     putUser.billing_address, putUser.zip, putUser.city, putId]
                )
    .then(pgres => {
        return res.status(200)
        .json({
            status: 'OK', message: 'user updated'
        });
    }).catch(e => console.error(e.stack));
});

// users - update one from omat tiedot
tijRouter.post("/users/:id", function(req,res){
    let putId = parseInt(req.params.id);
    let putUser = tijUser;
    putUser = {
        id_flat:req.body.id_flat,
        email:req.body.email,
        password:req.body.password,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phone:req.body.phone,
        role:parseInt(req.body.role),
        last_login:req.body.last_login,
        billing_address:req.body.billing_address,
        zip:req.body.zip,
        city:req.body.city
    };
    tijPg.query('UPDATE tij_users SET id_flat=($1), email=($2), password=($3), first_name=($4), last_name=($5),' +
                'phone=($6), role=($7), last_login=($8), billing_address=($9), zip=($10), city=($11) WHERE id=($12)',
                    [putUser.id_flat, putUser.email, putUser.password, putUser.first_name, putUser.last_name, putUser.phone,
                    putUser.role, putUser.last_login, putUser.billing_address, putUser.zip, putUser.city, putId]
                )
    .then(pgres => {
        return res.status(200)
        .json({
            status: 'OK', message: 'user updated'
        });
    }).catch(e => console.error(e.stack));
});
/*
// notifications - get all
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
*/
// notifications - get all notifications AND data from user-flats-houses-housing_comp
tijRouter.get("/notifications", function(req,res) {
    let notifications = [];
    let notification = tijNotification;

    tijPg.query("SELECT tij_notifications.*, CONCAT (tij_users.last_name, ' ', tij_users.first_name) AS fullname," +
					"tij_users.email,tij_users.first_name,tij_users.last_name,tij_users.phone,tij_users.role," +
					"tij_users.last_login,tij_users.billing_address,tij_users.zip AS ub_zip,tij_users.city AS ub_city," +
					"tij_housing_comp.name,tij_housing_comp.address,tij_housing_comp.zip AS hc_zip," +
					"tij_housing_comp.city AS hc_city,tij_housing_comp.business_id," +
					"tij_flats.flat_number,tij_flats.stairway, tij_houses.address AS h_address, tij_houses.zip AS h_zip " +
				"FROM tij_notifications INNER JOIN tij_users ON (tij_notifications.id_user = tij_users.id) " +
					"INNER JOIN tij_housing_comp ON (tij_notifications.id_housing_c = tij_housing_comp.id) " +
					"INNER JOIN tij_flats ON (tij_users.id_flat = tij_flats.id) " +
					"INNER JOIN tij_houses ON (tij_flats.id_houses = tij_houses.id) " +
				"ORDER BY sent_date ASC")
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
                status:pgres.rows[i].status,
               
                id_flat:pgres.rows[i].id_flat,
                email:pgres.rows[i].email,
                first_name:pgres.rows[i].first_name,
                last_name:pgres.rows[i].last_name,
                phone:pgres.rows[i].phone,
                role:pgres.rows[i].role,
                last_login:pgres.rows[i].last_login,
                billing_address:pgres.rows[i].billing_address,
                ub_zip:pgres.rows[i].ub_zip,
                ub_city:pgres.rows[i].ub_city,
                fullname:pgres.rows[i].fullname,
				
				flat_number:pgres.rows[i].flat_number,
				stairway:pgres.rows[i].stairway,
				
				h_address:pgres.rows[i].h_address,
				h_zip:pgres.rows[i].h_zip,

                hc_name:pgres.rows[i].hc_name,
                hc_address:pgres.rows[i].hc_address,
                hc_zip:pgres.rows[i].hc_zip,
                hc_city:pgres.rows[i].hc_city,
                business_id:pgres.rows[i].business_id
                
            };
            notifications.push(notification);
        }
        return res.status(200).json(notifications);

    }).catch(e => console.error(e.stack));
});

// notifications - get 5 notifications with status 0 
tijRouter.get("/notificationsnew", function(req,res) {
    let notifications = [];
    let notification = tijNotification;

    tijPg.query("SELECT tij_notifications.*, CONCAT (tij_users.last_name, ' ', tij_users.first_name) AS fullname," +
					"tij_users.email,tij_users.first_name,tij_users.last_name,tij_users.phone,tij_users.role," +
					"tij_users.last_login,tij_users.billing_address,tij_users.zip AS ub_zip,tij_users.city AS ub_city," +
					"tij_housing_comp.name,tij_housing_comp.address,tij_housing_comp.zip AS hc_zip," +
					"tij_housing_comp.city AS hc_city,tij_housing_comp.business_id " +
				"FROM tij_notifications INNER JOIN tij_users ON (tij_notifications.id_user = tij_users.id) " +
					"INNER JOIN tij_housing_comp ON (tij_notifications.id_housing_c = tij_housing_comp.id) " + 
				"WHERE status=0 ORDER BY sent_date ASC LIMIT 5")
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
                status:pgres.rows[i].status,

               
                id_flat:pgres.rows[i].id_flat,
                email:pgres.rows[i].email,
                first_name:pgres.rows[i].first_name,
                last_name:pgres.rows[i].last_name,
                phone:pgres.rows[i].phone,
                role:pgres.rows[i].role,
                last_login:pgres.rows[i].last_login,
                billing_address:pgres.rows[i].billing_address,
                ub_zip:pgres.rows[i].ub_zip,
                ub_city:pgres.rows[i].ub_city,
                fullname:pgres.rows[i].fullname,

                name:pgres.rows[i].name,
                address:pgres.rows[i].address,
                hc_zip:pgres.rows[i].hc_zip,
                hc_city:pgres.rows[i].hc_city,
                business_id:pgres.rows[i].business_id
                
            };
            notifications.push(notification);
        }
        return res.status(200).json(notifications);

    }).catch(e => console.error(e.stack));
});

// notifications - get one by id
tijRouter.get("/notifications/:id", function(req,res) {
    let notification = tijNotification;
    var getId = [ parseInt(req.params.id) ];

    tijPg.query('SELECT * FROM tij_notifications WHERE id = $1', getId)
    .then(pgres => {
        queryContents = pgres.rows;
        notification = pgres.rows[0];
        return res.status(200).json(notification);

    }).catch(e => console.error(e.stack));
});

// notifications - add (insert) one
tijRouter.put("/notifications", function(req,res){
    let addNtf = tijNotification;
    addNtf = {
        id_user:req.body.id_user,
        id_housing_comp:req.body.id_housing_comp,
        id_checkout:req.body.id_checkout,
        read_id:req.body.read_id,
        sent_date:req.body.sent_date,
        read_date:req.body.read_date,
        title:req.body.title,
        message:req.body.message,
        notif_type:req.body.notif_type,
        checkout:req.body.checkout,
        checkout_message:req.body.checkout_message,
        status:req.body.status
    };
    tijPg.query('INSERT INTO tij_notifications(id_user, id_housing_comp, id_checkout, read_id,' +
                'sent_date, read_date, title, notif_type, checkout, checkout_message, status)' +
                'VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)'
                [addNtf.id_user, addNtf.id_housing_comp, addNtf.id_checkout, addNtf.read_id,
                addNtf.sent_date, addNtf.read_date, addNtf.title, addNtf.notif_type,
                addNtf.checkout, addNtf.checkout_message, addNtf.status]
                )
    .then(pgres => {
        return res.status(200)
        .json({
            status: 'OK', message: 'notification inserted'
        });
    }).catch(e => console.error(e.stack));
});

// notifications - update one
tijRouter.post("/notifications/:id", function(req,res){
    let putId = parseInt(req.params.id);
    let putNtf = tijNotification;
    putNtf = {
        id_user:req.body.id_user,
        id_housing_comp:req.body.id_housing_comp,
        id_checkout:req.body.id_checkout,
        read_id:req.body.read_id,
        sent_date:req.body.sent_date,
        read_date:req.body.read_date,
        title:req.body.title,
        message:req.body.message,
        notif_type:req.body.notif_type,
        checkout:req.body.checkout,
        checkout_message:req.body.checkout_message,
        status:req.body.status
    };
    tijPg.query('UPDATE tij_notifications SET id_user=($1), id_housing_comp=($2), id_checkout=($3),' +
                'read_id=($4), sent_date=($5), read_date=($6), title=($7), notif_type=($8),' +
                'checkout=($9), checkout_message=($10), status=($11) WHERE id=($12)',
                [putNtf.id_user, putNtf.id_housing_comp, putNtf.id_checkout, putNtf.read_id,
                putNtf.sent_date, putNtf.read_date, putNtf.title, putNtf.notif_type,
                putNtf.checkout, putNtf.checkout_message, putNtf.status, putId]
                )
    .then(pgres => {
        return res.status(200)
        .json({
            status: 'OK', message: 'notification updated'
        });
    }).catch(e => console.error(e.stack));
});

// notifications - update notification status
tijRouter.post("/notificationstatus/:id/:status", function(req,res){
    let putId = parseInt(req.params.id);
    let putStatus = parseInt(req.params.status);

    tijPg.query('UPDATE tij_notifications SET status='+putStatus+' WHERE id='+putId)
    .then(pgres => {
        return res.status(200)
        .json({
            status: 'OK', message: 'notification updated'
        });
    }).catch(e => console.error(e.stack));
});

tijRouter.get("/housingcomp", function(req,res) {
    let housingCompanies = [];
    let housingCompany = tijHousingcompany;

    tijPg.query('SELECT (SELECT COUNT(*) FROM tij_notifications ' + 
				'WHERE (tij_notifications.id_housing_c = tij_housing_comp.id) AND status=0) ' +
				'AS newnotifs,tij_housing_comp.* FROM tij_housing_comp')
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
                business_id:pgres.rows[i].business_id,
                newnotifs:pgres.rows[i].newnotifs
            };
            housingCompanies.push(housingCompany);
        }
        return res.status(200).json(housingCompanies);

    }).catch(e => console.error(e.stack));
});

/*
("SELECT tij_notifications.*, CONCAT (tij_users.last_name, ' ', tij_users.first_name) AS fullname," +
					"tij_users.email,tij_users.first_name,tij_users.last_name,tij_users.phone,tij_users.role," +
					"tij_users.last_login,tij_users.billing_address,tij_users.zip AS ub_zip,tij_users.city AS ub_city," +
					"tij_housing_comp.name,tij_housing_comp.address,tij_housing_comp.zip AS hc_zip," +
					"tij_housing_comp.city AS hc_city,tij_housing_comp.business_id " +
				"FROM tij_notifications INNER JOIN tij_users ON (tij_notifications.id_user = tij_users.id) " +
					"INNER JOIN tij_housing_comp ON (tij_notifications.id_housing_c = tij_housing_comp.id) " +
				"ORDER BY sent_date ASC")
*/

module.exports = tijRouter;
