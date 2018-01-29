'use strict';
module.exports = (sequelize, DataTypes) => {
  var Size = sequelize.define('Size', {
    sizeNumber: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Size;
};