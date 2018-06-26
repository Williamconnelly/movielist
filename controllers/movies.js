var express = require('express');
var db = require("../models");
var passport = require("../config/passportConfig");
var request = require("request")
var router = express.Router();
require('dotenv').config();

router.post("/", function(req, res) {
	request({
		url: "http://www.omdbapi.com/?apikey=" + process.env.OMDB + "&s=" + req.body.movie_search
	}, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			var movies = JSON.parse(body);
			console.log(movies.Search);
			res.render("movies/index", {movies: movies.Search});
		} else {
			console.log(error, response);
		};
	});
});

module.exports = router;
