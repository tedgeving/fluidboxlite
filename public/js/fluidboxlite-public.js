(function( $ ) {
	'use strict';
	//http://terrymun.github.io/Fluidbox/demo/index.html
	$(document).ready( function() {
	// Add rel attribute to image links
	$("a[href$='.jpg'], a[href$='.jpeg'], a[href$='.gif'], a[href$='.png']").has("img").attr("rel", "fluidbox");
	// Enhancement for WP Galleries
	$('.gallery-item').addClass('gallery-item-fluidbox');
	});


$(function () {
	// Get options from Wordpress and prepare



	// Init fluidbox
	$('a[rel="fluidbox"]').fluidbox();

});


})( jQuery );
