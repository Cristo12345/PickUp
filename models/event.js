'use strict';
// var User = require("./user");

module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
        // createdBy: DataTypes.INTEGER,
        // maxOccupancy: DataTypes.INTEGER,
        // location: DataTypes.STRING,
        eventID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false
        },
        notes: DataTypes.STRING,
        attendees: DataTypes.TEXT
    }, {});

    Event.associate = function(models) {
        // associations can be defined here
        Event.belongsTo(models.User, {
            as: 'createdBy',
            foreignKey: 'userID'
        });

        // Event.hasMany(models.User, {
        //     as: 'attendee',
        //     foreignKey: 'userID'
        // });


        // Event.hasOne(models.Location);
    };


    return Event;
};