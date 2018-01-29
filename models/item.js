'use strict';
module.exports = (sequelize, DataTypes) => {
  var item = sequelize.define('item', {
    BrandId: DataTypes.INTEGER,
    SizeId: DataTypes.INTEGER,
    itemName: DataTypes.STRING,
    itemPrice: DataTypes.INTEGER,
    itemStock: DataTypes.INTEGER,
    itemCode: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return item;
};