let express = require("express");
let tijPg = require("./pgserver");
let tijUser = require('./models/user');
let tijNotification = require('./models/notification');
let tijHousingcompany = require('./models/housingcompany');
let tijMaintenancecompany = require('./models/maintenancecompany');

let tijRouterManager = express.Router();

tijRouterManager.get("/users", function(req,res) {
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
                email:pgres.rows[i].email,
                password:pgres.rows[i].password,
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

tijRouterManager.put("/users/:id", function(req,res){
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

// Ei saa poistaa - merkitään poistetuksi eli piilotetaan
// email/pwd tyhjäksi, role 0, last_login = poistopvm, nimeen merkintä
// yhteystietoja voi päivittää(?), eli billing_address = new_address
tijRouterManager.delete("/users/:id", function(req,res){
    let delId = parseInt(req.params.id);
    let hidUser = tijUser;
    hidUser = {
        id_flat:req.body.id_flat,
        email:"",
        password:"",
        first_name:req.body.first_name,
        last_name:req.body.last_name + ' *** poistettu ***',
        phone:req.body.phone,
        role:0,
        last_login:Date.now,
        billing_address:req.body.billing_address,
        zip:req.body.zip,
        city:req.body.city
    };
    tijPg.query('UPDATE tij_users SET email=($1), password=($2), phone=($3), role=($4), last_name=($5),' +
                'last_login=($6), billing_address=($7), zip=($8), city=($9) WHERE id=($10)',
                    [hidUser.email, hidUser.password, hidUser.phone, hidUser.role, hidUser.last_name,
                    hidUser.last_login, hidUser.billing_address, hidUser.zip, hidUser.city, delId]
                )
    .then(pgres => {
        return res.status(200)
        .json({
            status: 'OK', message: 'user hidden'
        });

    }).catch(e => console.error(e.stack));
});
// pohja jos tarvitaan oikeaa poistoa (ei user eikä notification)
/*
tijRouterManager.realDel("/users/:id", function(req,res){
    let delId = parseInt(req.params.id);
    tijPg.query('DELETE FROM tij_users WHERE id = $1, delId')
    .then(pgres => {
        return res.status(200)
        .json({
            status: 'OK', message: 'user deleted'
        });

    }).catch(e => console.error(e.stack));
});
*/
tijRouterManager.get("/notifications", function(req,res) {
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

tijRouterManager.get("/housingcomp", function(req,res) {
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

tijRouterManager.get("/maintenancecomp", function(req,res) {
    let maintenanceCompanies = [];
    let maintenanceCompany = tijMaintenancecompany;

    tijPg.query('SELECT * FROM tij_maintenance_comp')
    .then(pgres => {
        queryContents = pgres.rows;
        for (let i=0;i<pgres.rows.length;i++)
        {
            maintenanceCompany = {
                id:pgres.rows[i].id,
                name:pgres.rows[i].name,
                address:pgres.rows[i].address,
                zip:pgres.rows[i].zip,
                city:pgres.rows[i].city,
                business_id:pgres.rows[i].business_id
            };
            maintenanceCompanies.push(maintenanceCompany);
        }
        return res.status(200).json(maintenanceCompanies);

    }).catch(e => console.error(e.stack));
});


tijRouterManager.post("/cars", function(req,res) {

});

tijRouterManager.put("/cars/:id", function(req,res){

});

tijRouterManager.delete("/cars/:id", function(req,res) {

});

module.exports = tijRouterManager;
