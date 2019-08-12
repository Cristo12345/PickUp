'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('locations', [{
                name: "Flemming Park Field #1",
                occupancy: 22,
                fieldType: "turf",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Andrus Park",
                occupancy: 22,
                fieldType: "grass",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Lennon Park",
                occupancy: 10,
                fieldType: "concrete",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], { timestamps: true })
    },

    down: (queryInterface, Sequelize) => {
        queryInterface.bulkDelete('Users', [{
                    name: "Flemming Park Field #1"
                },
                {
                    name: "Andrus Park"
                },
                {
                    name: "Lennon Park"
                },
            ])
            /*
              Add reverting commands here.
              Return a promise to correctly handle asynchronicity.

              Example:
              return queryInterface.bulkDelete('People', null, {});
            */
    }
};