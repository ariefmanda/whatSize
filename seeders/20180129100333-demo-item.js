'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [{
      BrandId: 1,
      SizeId: 4,
      itemName: 'Adidas NMD PK OG',
      itemPrice: 3999999,
      itemStock: 20,
<<<<<<< HEAD
      itemCode: '8352190398250',
=======
      itemCode: 'NMDPKOG01',
>>>>>>> seed dummy ke table Item
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
      BrandId: 2,
      SizeId: 3,
      itemName: 'Adidas YEEZY 350 V2',
      itemPrice: 6999999,
      itemStock: 15,
<<<<<<< HEAD
      itemCode: '0281942917767',
=======
      itemCode: 'YZY350V201',
>>>>>>> seed dummy ke table Item
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
      BrandId: 3,
      SizeId: 2,
      itemName: 'Adidas Ultraboost 1.0',
      itemPrice: 4999999,
      itemStock: 40,
<<<<<<< HEAD
      itemCode: '2113082957160',
=======
      itemCode: 'UB1001',
>>>>>>> seed dummy ke table Item
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
      BrandId: 4,
      SizeId: 1,
      itemName: 'Balenciaga Speed Trainer',
      itemPrice: 11999999,
      itemStock: 10,
<<<<<<< HEAD
      itemCode: '39100990237848',
=======
      itemCode: 'BCGSPT01',
>>>>>>> seed dummy ke table Item
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
