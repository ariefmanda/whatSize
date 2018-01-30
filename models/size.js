'use strict';
module.exports = (sequelize, DataTypes) => {
  var Size = sequelize.define('Size', {
    sizeNumber: DataTypes.INTEGER
  });
  Size.associate = (models) => {
    Size.hasMany(models.Item);
  };
  return Size;
};