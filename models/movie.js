'use strict';
module.exports = (sequelize, DataTypes) => {
  var movie = sequelize.define('movie', {
    title: DataTypes.STRING,
    poster: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    api_id: DataTypes.STRING
  }, {});
  movie.associate = function(models) {
    // associations can be defined here
    models.movie.belongsToMany(models.user, {through: "usersMovies"});
  };
  return movie;
};