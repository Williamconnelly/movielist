$(document).ready(function(){
	$('.tooltipped').tooltip({
		exitDelay: 0, 
		enterDelay: 300, 
		margin: -8
	});
	$('.materialboxed').materialbox();
	$('.dropdown-trigger').dropdown();
    $('.rating-select').formSelect();
});