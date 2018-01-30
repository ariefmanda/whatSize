'use strict';
module.exports = (sequelize, DataTypes) => {
  var Brand = sequelize.define('Brand', {
    brandName: DataTypes.STRING
  });
  Brand.associate = (models) => {
    Brand.hasMany(models.Item);
  };
  return Brand;
};