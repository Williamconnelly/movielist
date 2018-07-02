require("dotenv").config();
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require("express-session");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var passport = require("./config/passportConfig");
var isLoggedIn = require("./middleware/isLoggedIn");
var flash = require("connect-flash");
var db = require("./models");

var app = express();

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public'));

// 1. This needs to come before you app.use passport
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true
}));

// 2. Setup flash messages
app.use(flash());

// 3. This must come after the session setup
app.use(passport.initialize());
app.use(passport.session());

// 4. Attach the current user to the response for all routes
// Also attach the flash messages
app.use(function(req, res, next) {
	res.locals.alerts = req.flash();
	res.locals.currentUser = req.user;
	next();
});

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/profile', isLoggedIn, function(req, res) {
	var sum = 0;
	var movies;
	// Finds the total sum of scores in a user's movie list
	db.movie.findAll({where: {
		'rating': {[Op.gt]: 0}},
  		include: [
     		{ model: db.user, where: { id: req.user.id }}
  		],
  		order: [
  			['rating', 'DESC']
  		]
	}).then(function(result) {
		movies = result;
		result.forEach(function(movie, i) {
			sum+= movie.rating;
		})
	}).then(function() {
		// Finds the total number of movies with a rating (1+) in a user's list
		db.movie.findAndCount({where: {
		'rating': {[Op.gt]: 0}},
  		include: [
     		{ model: db.user, where: { id: req.user.id }}
  		]
		}).then(function(result) {
			var numMovies = result.count;
			var averageScore = (sum/numMovies).toFixed(2);
			if (averageScore === "NaN") {
				averageScore = 0;
			}
			res.render('profile', {userAverage: averageScore, movies: movies});
		})
	})
});

app.use('/auth', require('./controllers/auth'));
app.use('/movies', require('./controllers/movies'));
app.use('/user_movies', require('./controllers/user_movies'));

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
