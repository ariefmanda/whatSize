'use strict';
const models = require('./index');
module.exports = (sequelize, DataTypes) => {
  var Brand = sequelize.define('Brand', {
    brandName: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:"Name not null"
        }
      }
    }
  });

  Brand.associate = (models) => {
    Brand.hasMany(models.Item);
  };
  return Brand;
};
