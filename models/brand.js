'use strict';
module.exports = (sequelize, DataTypes) => {
  var Brand = sequelize.define('Brand', {
    brandName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Brand;
};