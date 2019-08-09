'use strict';

module.exports = (sequelize, DataTypes) => {
    const Location = sequelize.define('Location', {
        name: DataTypes.STRING,
        // address: DataTypes.STRING,
        occupancy: DataTypes.INTEGER,
        fieldType: DataTypes.STRING
    }, {});
    Location.associate = function(models) {
        // associations can be defined here
        Location.hasMany(models.Event, {as: "events"});
    };
    return Location;
};