var express = require('express');
var db = require("../models");
var passport = require("../config/passportConfig");
var request = require("request")
var router = express.Router();
require('dotenv').config();

// GET / - Display all movies in user's list
router.get("/", function(req, res) {
	console.log(req.user.id);
	db.movie.findAll({
		where: {}
	}).then(function(movies) {
		res.render("user_movies/index", {movies: movies});
	});
});

// POST / - Add selected movie to user's list in db
router.post("/", function(req, res) {
	var movie = req.body;
	console.log(movie);
	db.movie.findOrCreate({
		where: {api_id: movie.api_id},
		defaults: {
			title: movie.title,
			poster: movie.poster,
			rating: movie.rating,
			year: movie.year,
			type: movie.type,
			api_id: movie.api_id,
			userId: req.user.id
		}
	}).spread(function(movie, created) {
		if (created) {
			// No record was found - logged new movie
			res.redirect("/user_movies");
		} else {
			// Movie was already in list, did not add movie
			res.redirect("/user_movies");
		};
	}).catch(function(error) {
		// Catch any additional errors
		console.log(error.message);
		res.redirect("/user_movies");
	});
});



module.exports = router;
