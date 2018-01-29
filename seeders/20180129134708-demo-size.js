'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sizes', [{
      sizeNumber: 40,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      brandName: 41,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      brandName: 42,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      brandName: 43,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      brandName: 44,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      brandName: 45,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
