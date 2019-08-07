'use strict';
module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
        category: DataTypes.STRING,
        // createdBy: DataTypes.INTEGER,
        numberOfPeopleNeeded: DataTypes.INTEGER,
        location: DataTypes.STRING,
        notes: DataTypes.STRING,
        // date: DataTypes.DATEONLY,
        // time: DataTypes.STRING
    }, {});
    Event.associate = function(models) {
        // associations can be defined here
        // Task.belongsTo(User);
    };
    return Event;
};