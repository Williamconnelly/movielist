$(document).ready(function(){
	// Materialize Inits
	$('.tooltipped').tooltip({
		exitDelay: 0, 
		enterDelay: 100, 
		margin: -8
	});
	$('.materialboxed').materialbox();
	$('.sidenav').sidenav();
	$('.modal').modal();
    $('.rating-select').formSelect();
    // Delete route to handle removing a user's association with a movie
    $(".delete").on("click", function(e) {
		e.preventDefault();
		var url = $(this).attr("href");
		$.ajax({
			method: "DELETE",
			url: url
		}).done(function(data) {
			window.location = "/user_movies";
		});
	});
	// Put route to handle updating a user's score with an associated movie
	$(".updateScore").on("submit", function(e) {
		e.preventDefault();
		var newData = $(this).serialize();
		var url = $(this).attr("action");
		$.ajax({
			method: "PUT",
			url: url,
			data: newData
		}).done(function(data) {
			window.location = "/user_movies";
		});
	});
	// Landing Page Button Links
	$(".login-button").on("click", function() {
		window.location.href="/auth/login";
	});
	$(".signup-button").on("click", function() {
		window.location.href="/auth/signup";
	});
	$(".profile-button").on("click", function() {
		window.location.href="/profile";
	});
	$(".list-button").on("click", function() {
		window.location.href="/user_movies";
	});
	$(".logout-button").on("click", function() {
		window.location.href="/auth/logout";
	});
});