require("dotenv").config();
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require("express-session");
var passport = require("./config/passportConfig");
var isLoggedIn = require("./middleware/isLoggedIn");
var flash = require("connect-flash");

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
  res.render('profile');
});

app.use('/auth', require('./controllers/auth'));
app.use('/movies', require('./controllers/movies'));

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
