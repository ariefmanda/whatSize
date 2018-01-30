'use strict';
module.exports = (sequelize, DataTypes) => {
  var Transaksi = sequelize.define('Transaksi', {
    UserId: DataTypes.INTEGER,
  });
  Transaksi.associate = function(models) {
    Transaksi.belongsTo(models.User)
    Transaksi.hasMany(models.TransaksiItem)
  }
  return Transaksi;
};
