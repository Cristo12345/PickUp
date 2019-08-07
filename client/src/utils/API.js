// requiring our models
var db = require("../../../models");


// create the route for getting the new user info to the database
module.exports = function(app) {
    app.get("/api/user", function(req, res) {
        // find all users
        db.User.findAll({}).then(function(dbUser) {
            res.json(dbUser);
        });
    });


    // POST route for saving new users
    app.post("/api/user", function(req, res) {
        db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

};