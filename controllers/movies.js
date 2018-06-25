var express = require('express');
var db = require("../models");
var passport = require("../config/passportConfig");
var request = require("request")
var router = express.Router();
require('dotenv').config();

router.get("/", function(req, res) {
	res.render("movies/index");
});

router.post("/", function(req, res) {
	console.log(req.body.movie_search);
	request({
		url: "http://www.omdbapi.com/?apikey=" + process.env.OMDB + "&t=" + req.body.movie_search
	}, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			var dataObj = JSON.parse(body);
			console.log(dataObj);
		} else {
			console.log(error, response);
		};
	});
	res.redirect("/movies");
});

module.exports = router;
