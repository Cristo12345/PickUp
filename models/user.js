'use strict';
// var Event = require("./event");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        userID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    User.associate = function(models) {
        // associations can be defined here
        User.hasMany(models.Event, {
            as: 'eventsCreated',
            foreignKey: 'userID'
        })

        // User.hasMany(models.Event, {
        //     as: 'attendingEvents',
        //     foreignKey: 'myEventsID'
        // });
    };
    return User;
};