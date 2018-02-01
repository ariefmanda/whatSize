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
    return queryInterface.bulkInsert('Users', [{
      name: "Arief",
      role: "0",
      email: "arief@mail.com",
      status: 1,
      password: "d036d273a25d443ffda600fc3367f745",
      createdAt: moment().format(),
      updatedAt:moment().format()
    },{
      name: "David",
      role: "1",
      email: "david@mail.com",
      status: 0,
      password: "d036d273a25d443ffda600fc3367f745",
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
    return queryInterface.bulkDelete('Users', null, {});
  }
};
