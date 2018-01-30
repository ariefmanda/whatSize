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
  // Class Method
  Item.associate = (models) => {
    Item.belongsTo(models.Brand);
    Item.belongsTo(models.Size);
  }
  

  // Instance Method
  // Model.prototype.someMethod = function () {..}
  return Item;
};