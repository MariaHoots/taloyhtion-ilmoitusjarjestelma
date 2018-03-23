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
                email:pgres.rows[i].email,
                first_name:pgres.rows[i].first_name
            };
            users.push(user);
        }
        return res.status(200).json(users);

    }).catch(e => console.error(e.stack));
});

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
                title:pgres.rows[i].title,
                message:pgres.rows[i].message
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
