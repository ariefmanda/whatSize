'use strict';
const encrypt = require('../helpers/encrypt');
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: {
     type: DataTypes.STRING,
     validate: {
       notEmpty: {
         args: true,
         msg: 'Name must be filled !!'
       },
     }
   },
    role: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email must be filled !!'
        },
        isUnique: function(value, next) {
          User.findAll({
            where:{
              email: value,
              id: { [sequelize.Op.ne]: this.id, }
            }
          })
          .then(function(user) {
            if (user.length == 0) {
              next()
            } else {
              next({message:'Email already used !!'})
            }
          })
          .catch(function(err) {
            next(err)
          })
        }
      }
    },
    password: DataTypes.STRING
  });

  User.associate = function(models) {
    User.hasMany(models.Transaksi)
  }
  return User;
};
