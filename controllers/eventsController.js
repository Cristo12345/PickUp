// requiring our models
var db = require("../models");


// create the route for getting the new Event info to the database
module.exports = {
    findAll: function(req, res, query) {
        db.Event
            .findAll()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Event
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {

        db.Event
            .create(req.body, [{ include: db.Location }])
            .then(event => {
                console.log(event);
                res.json(event);

            })
            .catch(err => res.status(422).json(err));

    },
    update: function(req, res) {
        db.Event
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Event
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // updatersvp: function(req, res) {
    //     db.Event
    //         // console.log("this is working");
    // }
};