import axios from "axios";

export default {
    getUsers: function() {
        // Gets all users
        return axios.get("/api/users");
    },
    // Gets the user with the given id 
    getUser: function(id) {
        return axios.get("/api/users/" + id);
    },
    // Deletes the user with the given id
    deleteUser: function(id) {
        return axios.delete("/api/users/" + id);
    },
    // Saves a user to the database
    saveUser: function(userData) {
        return axios.post("/api/users", userData)
    }
};



// // create the route for getting the new user info to the database
// module.exports = function(app) {
//     app.get("/api/user", function(req, res) {
//         // find all users
//         db.User.findAll({}).then(function(dbUser) {
//             res.json(dbUser);
//         });
//     });


//     // POST route for saving new users
//     app.post("/api/user", function(req, res) {
//         db.User.create({
//             name: req.body.name,
//             email: req.body.email,
//             password: req.body.password
//         }).then(function(dbUser) {
//             res.json(dbUser);
//         });
//     });

// };