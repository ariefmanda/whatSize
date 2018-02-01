'use strict';
module.exports = (sequelize, DataTypes) => {
  var TransaksiItem = sequelize.define('TransaksiItem', {
    TransaksiId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    jumlahItem: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty:{
          msg:"Jumlah not null"
        }
      }
    }
  });
  TransaksiItem.associate = function(models) {
    TransaksiItem.belongsTo(models.Transaksi)
    TransaksiItem.belongsTo(models.Item)
  }
  return TransaksiItem;
};
