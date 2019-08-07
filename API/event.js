// requiring our models
var db = require("../models");

// create the route for getting the new event info to the database
module.exports = function(app) {
    app.get("/api/event", function(req, res) {
        // find all events
        db.Event.findAll({}).then(function(dbEvent) {
            res.json(dbEvent);
        });
    });


    // POST route for saving new events
    app.post("/api/event", function(req, res) {
        db.Event.create({
            category: req.body.category,
            // name: req.body.name,
            numberOfPeopleNeeded: req.body.numberOfPeopleNeeded,
            location: req.body.location,
            notes: req.body.notes
        }).then(function(dbEvent) {
            res.json(dbEvent);
        });
    });

};