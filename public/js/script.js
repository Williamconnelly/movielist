$(document).ready(function(){
	$('.tooltipped').tooltip({
		exitDelay: 0, 
		enterDelay: 100, 
		margin: -8
	});
	$('.materialboxed').materialbox();
    $('.rating-select').formSelect();
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