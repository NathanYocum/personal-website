'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    email:{
      type: DataTypes.STRING,
      unique: true
    },
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};