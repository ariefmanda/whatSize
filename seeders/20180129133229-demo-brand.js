'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Brands', [{
      brandName: 'Adidas',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
      brandName: 'Nike',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
      brandName: 'Puma',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
      brandName: 'Asics',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
      brandName: 'Reebok',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
      brandName: 'Balenciaga',
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
