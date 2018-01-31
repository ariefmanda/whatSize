'use strict';
module.exports = (sequelize, DataTypes) => {
  var TransaksiItem = sequelize.define('TransaksiItem', {
    TransaksiId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    jumlahItem: DataTypes.INTEGER
  });
  TransaksiItem.associate = function(models) {
    TransaksiItem.belongsTo(models.Transaksi)
    TransaksiItem.belongsTo(models.Item)
  }
  return TransaksiItem;
};
