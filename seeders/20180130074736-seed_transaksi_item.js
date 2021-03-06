'use strict';
const moment = require('moment');
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('TransaksiItems', [{
      TransaksiId: 1,
      ItemId:1,
      createdAt: moment().format(),
      updatedAt:moment().format()
    },{
      TransaksiId: 1,
      ItemId:2,
      createdAt: moment().format(),
      updatedAt:moment().format()
    },{
      TransaksiId: 2,
      ItemId:1,
      createdAt: moment().format(),
      updatedAt:moment().format()
    },{
      TransaksiId: 2,
      ItemId:2,
      createdAt: moment().format(),
      updatedAt:moment().format()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('TransaksiItems', null, {});
  }
};
