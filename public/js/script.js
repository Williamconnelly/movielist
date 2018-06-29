$(document).ready(function(){
	$('.tooltipped').tooltip({
		exitDelay: 0, 
		enterDelay: 100, 
		margin: -8
	});
	$('.materialboxed').materialbox();
	$('.sidenav').sidenav();
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
});