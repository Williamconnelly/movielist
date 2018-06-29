var express = require('express');
var db = require("../models");
var passport = require("../config/passportConfig");
var request = require("request")
var isLoggedIn = require("../middleware/isLoggedIn");
var router = express.Router();
require('dotenv').config();

// GET / - Display all movies in user's list
router.get("/", isLoggedIn ,function(req, res) {
	db.user.findById(req.user.id).then(function(user) {
		user.getMovies().then(function(movies) {
			res.render("user_movies/index", {movies: movies, user: user});
		})
	})
});

// POST / - Add selected movie to user's list in db
router.post("/", function(req, res) {
	var movie = req.body;
	console.log("Checking form input", movie);
	db.user.find({
		where: {
			id: req.user.id
		}
	}).then(function(user) {
		db.movie.findOrCreate({
			where: {api_id: movie.api_id},
			defaults: {
				title: movie.title,
				poster: movie.poster,
				rating: movie.rating,
				year: movie.year,
				type: movie.type,
				api_id: movie.api_id,
			}
		}).spread(function(movie, created) {
			user.addMovie(movie).then(function(movie) {
				 console.log(movie, "added to", user);
				 res.redirect("/user_movies");
			})
		}).catch(function(error) {
			// Catch any additional errors
			console.log(error.message);
			res.redirect("/user_movies");
		});
	})
});

router.delete("/:id", function(req, res) {
	db.usersMovies.destroy({
		where: {
			userId: req.user.id,
			movieId: req.params.id
		}
	}).then(function(data) {
		res.sendStatus(200);
	});
});

router.put("/:id", function(req, res) {
	db.movie.update({
		rating: req.body.rating
	}, {
		where: {id: req.params.id}
	}).then(function(data) {
		res.sendStatus(200);
	});
});

module.exports = router;
