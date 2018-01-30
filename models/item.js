'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    BrandId: DataTypes.INTEGER,
    SizeId: DataTypes.INTEGER,
    itemName: DataTypes.STRING,
    itemPrice: DataTypes.INTEGER,
    itemStock: DataTypes.INTEGER,
    itemCode: DataTypes.STRING
  });
  Item.associate = function(models) {
    Item.hasMany(models.TransaksiItem)
  }
  return Item;
};
