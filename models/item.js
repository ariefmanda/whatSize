'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    BrandId: DataTypes.INTEGER,
    SizeId: DataTypes.INTEGER,
    itemName: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:"Name not null"
        }
      }
    },
    itemPrice: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty:{
          msg:"price not null"
        }
      }
    },
    itemStock: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty:{
          msg:"Stock not null"
        }
      }
    },
    itemCode: DataTypes.STRING
  });
  // Class Method
  Item.associate = (models) => {
    Item.belongsTo(models.Brand);
    Item.belongsTo(models.Size);
    Item.hasMany(models.TransaksiItem);
  }


  // Instance Method
  // Model.prototype.someMethod = function () {..}
  return Item;
};
