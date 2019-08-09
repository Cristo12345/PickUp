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
    },


    // Events
    getEvents: function() {
        // Gets all events
        return axios.get("/api/events");
    },
    // Gets the event with the given id 
    getEvent: function(id) {
        return axios.get("/api/events/" + id);
    },
    // Deletes the event with the given id
    deleteEvent: function(id) {
        return axios.delete("/api/events/" + id);
    },
    // Saves an event to the database
    saveEvent: function(eventData) {
        return axios.post("/api/events", eventData)
    },

    // Locattions
    getLocations: function() {
        // Gets all locations
        return axios.get("/api/locations");
    },
    // Gets the location with the given id 
    getLocation: function(id) {
        return axios.get("/api/locations/" + id);
    },
    // Deletes the location with the given id
    deleteLocation: function(id) {
        return axios.delete("/api/locations/" + id);
    }
};