/*
 *
 *		CUSTOM.JS
 *
 */

(function($){
	
	// SHOW/HIDE SCROLL UP //
	function show_hide_scroll_top() {
		
		if ($(window).scrollTop() > $(window).height()/2) {
			$("#scroll-up").fadeIn(300);
		} else {
			$("#scroll-up").fadeOut(300);
		}
		
	}
	
	// SCROLL UP //
	function scroll_up() {				
		
		$("#scroll-up").on("click", function() {
			$("html, body").animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		
	}

	
	// DOCUMENT READY //
	$(document).ready(function() {

		// SHOW/HIDE SCROLL UP
		show_hide_scroll_top();
		
		// SCROLL UP //
		scroll_up();
		
	});

	
	// WINDOW SCROLL //
	$(window).scroll(function() {
		show_hide_scroll_top();
		
	});
	
})(window.jQuery);

