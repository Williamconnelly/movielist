'use strict';
module.exports = (sequelize, DataTypes) => {
  var usersMovies = sequelize.define('usersMovies', {
    userId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER
  }, {});
  usersMovies.associate = function(models) {
    // associations can be defined here
  };
  return usersMovies;
};