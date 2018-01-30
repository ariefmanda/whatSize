'use strict';
module.exports = (sequelize, DataTypes) => {
  var Transaksi = sequelize.define('Transaksi', {
    UserId: DataTypes.INTEGER,
<<<<<<< HEAD
    UserId: DataTypes.INTEGER
=======
>>>>>>> transaksi 20%
  });
  Transaksi.associate = function(models) {
    Transaksi.belongsTo(models.User)
    Transaksi.hasMany(models.TransaksiItem)
  }
  return Transaksi;
};
