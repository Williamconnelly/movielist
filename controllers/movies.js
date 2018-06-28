var express = require('express');
var db = require("../models");
var passport = require("../config/passportConfig");
var request = require("request")
var router = express.Router();
require('dotenv').config();

// POST / - Display all movies relevant to search terms
router.post("/", function(req, res) {
	request({
		url: "http://www.omdbapi.com/?apikey=" + process.env.OMDB + "&s=" + req.body.movie_search
	}, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			var movies = JSON.parse(body);
			res.render("movies/index", {movies: movies.Search});
		} else {
			console.log(error, response);
		};
	});
});

// GET movie/:id - Displays a specific movie using the API and IMDB id
router.get("/:id", function(req, res) {
	if (req.user) {
		db.user.findById(req.user.id).then(function(user) {
			user.getMovies({where: {api_id: req.params.id}}).then(function(user_movie) {
				console.log("hello hello hello", user_movie[0].rating);
				request({
					url: "http://www.omdbapi.com/?apikey=" + process.env.OMDB + "&i=" + req.params.id
				}, function(error, response, body) {
					if (!error && response.statusCode === 200) {
						var movie = JSON.parse(body);
						console.log(movie);
						res.render("movies/show", {movie: movie, user_movie: user_movie});
					} else {
						console.log(error, response);
					};
				});
			})
		})
	} else {
		request({
			url: "http://www.omdbapi.com/?apikey=" + process.env.OMDB + "&i=" + req.params.id
		}, function(error, response, body) {
			if (!error && response.statusCode === 200) {
				var movie = JSON.parse(body);
				console.log(movie);
				res.render("movies/show", {movie: movie});
			} else {
				console.log(error, response);
			};
		});
	}
});

module.exports = router;
