'use strict';
// var User = require("./user");

module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
        // createdBy: DataTypes.INTEGER,
        numberOfPeopleNeeded: DataTypes.INTEGER,
        location: DataTypes.STRING,
        notes: DataTypes.STRING,
        date: DataTypes.DATEONLY,
        time: DataTypes.STRING
    }, {});
    Event.associate = function(models) {
        // associations can be defined here
        Event.belongsTo(models.User);
    };
    return Event;
};