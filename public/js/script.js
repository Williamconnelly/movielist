$(document).ready(function(){
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
	$(".updateScore").on("submit", function(e) {
		e.preventDefault();
		var newData = $(this).serialize();
		console.log(newData);
		var url = $(this).attr("action");
		$.ajax({
			method: "PUT",
			url: url,
			data: newData
		}).done(function(data) {
			console.log(data);
			window.location = "/user_movies";
		});
	});
});