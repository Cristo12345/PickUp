'use strict';
// var User = require("./user");

module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
        // createdBy: DataTypes.INTEGER,
        // maxOccupancy: DataTypes.INTEGER,
        // location: DataTypes.STRING,
        date: DataTypes.STRING,
        time: DataTypes.STRING,
        notes: DataTypes.STRING
    }, {});
    Event.associate = function(models) {
        // associations can be defined here
        Event.belongsTo(models.User);
    };
    return Event;
};