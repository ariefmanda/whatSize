'use strict';
module.exports = (sequelize, DataTypes) => {
  var Transaksi = sequelize.define('Transaksi', {
    UserId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  });
  Transaksi.associate = function(models) {
    Transaksi.belongsTo(models.User)
  }
  return Transaksi;
};
