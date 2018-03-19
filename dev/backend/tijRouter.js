let express = require("express");
let tijPg = require("./pgserver");
let tijUser = require('./models/user');
let tijNotification = require('./models/notification');


let tijRouter = express.Router();

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
                email:pgres.rows[i].email,
                first_name:pgres.rows[i].first_name
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
                title:pgres.rows[i].title,
                message:pgres.rows[i].message
            };
            notifications.push(notification);         
        }
        return res.status(200).json(notifications);

    }).catch(e => console.error(e.stack));
});


tijRouter.post("/cars", function(req,res) {
 
});

tijRouter.put("/cars/:id", function(req,res){


});

tijRouter.delete("/cars/:id", function(req,res) {

});

module.exports = tijRouter;