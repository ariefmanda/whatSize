'use strict';
const models = require('./index');
module.exports = (sequelize, DataTypes) => {
  var Size = sequelize.define('Size', {
    sizeNumber: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty:{
          msg:"Number not null"
        }
      }
    }

  });
  Size.associate = (models) => {
    Size.hasMany(models.Item);
  };
  return Size;
};
