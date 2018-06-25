var express = require('express');
var db = require("../models");
var passport = require("../config/passportConfig");
var request = require("request")
var router = express.Router();
require('dotenv').config();

router.get("/", function(req, res) {
	db.movie.findAll().then(function(data) {
		res.render("user_movies/index", {movies: data});
	});
});

router.post("/", function(req, res) {
	var movie = req.body;
	console.log(movie);
	// db.movie.create({
	// 	title: movie.title,
	// 	poster: movie.poster,
	// 	rating: movie.rating,
	// 	type: movie.type,
	// 	api_id: movie.api_id
	// }).then(function(movie) {
	// 	res.redirect("/user_movies/index");
	// });
	res.redirect("/user_movies")
});

module.exports = router;
