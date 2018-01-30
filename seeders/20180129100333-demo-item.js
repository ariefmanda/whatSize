'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [{
      BrandId: 1,
      SizeId: 4,
      itemName: 'Adidas NMD PK OG',
      itemPrice: 3999999,
      itemStock: 20,
      itemCode: '8352190398250',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
      BrandId: 2,
      SizeId: 3,
      itemName: 'Adidas YEEZY 350 V2',
      itemPrice: 6999999,
      itemStock: 15,
      itemCode: '0281942917767',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
      BrandId: 3,
      SizeId: 2,
      itemName: 'Adidas Ultraboost 1.0',
      itemPrice: 4999999,
      itemStock: 40,
      itemCode: '2113082957160',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
      BrandId: 4,
      SizeId: 1,
      itemName: 'Balenciaga Speed Trainer',
      itemPrice: 11999999,
      itemStock: 10,
      itemCode: '39100990237848',
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
