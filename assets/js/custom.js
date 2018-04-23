/*
 *
 *		CUSTOM.JS
 *
 */

(function($){
	
	"use strict";
	
	// DETECT TOUCH DEVICE //
	function is_touch_device() {
		return !!('ontouchstart' in window) || ( !! ('onmsgesturechange' in window) && !! window.navigator.maxTouchPoints);
	}
	
	
	// SHOW/HIDE MOBILE MENU //
	function show_hide_mobile_menu() {
		
		$("#mobile-menu-button").on("click", function(e) {
            
			e.preventDefault();
			
			$("#mobile-menu").slideToggle(300);
			
        });	
		
	}
	
	
	// MOBILE MENU //
	function mobile_menu() {
		
		if ($(window).width() < 992) {
			
			if ($("#menu").length > 0) {
			
				if ($("#mobile-menu").length < 1) {
					
					$("#menu").clone().attr({
						id: "mobile-menu",
						class: ""
					}).insertAfter("#header");
					
					$("#mobile-menu .megamenu > a").on("click", function(e) {
                        
						e.preventDefault();
						
						$(this).toggleClass("open").next("div").slideToggle(300);
						
                    });
					
					$("#mobile-menu .dropdown > a").on("click", function(e) {
                        
						e.preventDefault();
						
						$(this).toggleClass("open").next("ul").slideToggle(300);
						
                    });
				
				}
				
			}
				
		} else {
			
			$("#mobile-menu").hide();
			
		}
		
	}
	
	
	// MENU SLIDE //
	function menu_slide() {
		
		$(".menu-button").on("click", function(e) {
			
			e.preventDefault();
			e.stopPropagation();
			$(".menu-slide-container").toggleClass("menu-open");
			
		});
		
		$(".menu-slide-container ul li.dropdown a, .menu-slide-container ul li.megamenu a").on("click", function(e) {
        
			e.stopPropagation();
			
		});
		
		$("body").on("click", function() {
			if ($(".menu-slide-container").hasClass("menu-open")) {
				$(".menu-slide-container").removeClass("menu-open");
			}
		});
		
		$(".menu-slide li.dropdown > a").on("click", function(e) {
		
			e.preventDefault();
			$(this).toggleClass("open").next("ul").slideToggle(300);
		
		});
		
		$(".menu-slide li.megamenu > a").on("click", function(e) {
		
			e.preventDefault();
			$(this).toggleClass("open").next("div").slideToggle(300);
		
		});
		
	}
	
	
	// STICKY //
	function sticky() {
		
		var sticky_point = $("#header").innerHeight() + 70;
		
		$("#header").clone().attr({
			id: "header-sticky",
			class: ""
		}).insertAfter("header");
		
		$(window).scroll(function() {
			
			if ($(window).scrollTop() > sticky_point) {  
				$("#header-sticky").slideDown(300).addClass("header-sticky");
				$("#header .menu ul, #header .menu .megamenu-container").css({"visibility": "hidden"});
			} else {
				$("#header-sticky").slideUp(100).removeClass("header-sticky");
				$("#header .menu ul, #header .menu .megamenu-container").css({"visibility": "visible"});
			}
			
		});
		
		if ($("body").hasClass("header-style-4")) {
			
			var sticky_point = $("#header-container").innerHeight();
			
		}
		
	}
	
 
	// PROGRESS BARS // 
	function progress_bars() {
		
		$(".progress .progress-bar:in-viewport").each(function() {
			
			if (!$(this).hasClass("animated")) {
				$(this).addClass("animated");
				$(this).animate({
					width: $(this).attr("data-width") + "%"
				}, 2000);
			}
			
		});
		
	}


	// CHARTS //
	function pie_chart() {
		
		if (typeof $.fn.easyPieChart !== 'undefined') {
		
			$(".pie-chart:in-viewport").each(function() {
				
				$(this).easyPieChart({
					animate: 1500,
					lineCap: "square",
					lineWidth: $(this).attr("data-line-width"),
					size: $(this).attr("data-size"),
					barColor: $(this).attr("data-bar-color"),
					trackColor: $(this).attr("data-track-color"),
					scaleColor: "transparent",
					onStep: function(from, to, percent) {
						$(this.el).find(".pie-chart-percent .value").text(Math.round(percent));
					}
				});
				
			});
			
		}
		
	}
	
	// COUNTER //
	function counter() {
		
		if (typeof $.fn.jQuerySimpleCounter !== 'undefined') {
		
			$(".counter .counter-value:in-viewport").each(function() {
				
				if (!$(this).hasClass("animated")) {
					$(this).addClass("animated");
					$(this).jQuerySimpleCounter({
						start: 0,
						end: $(this).attr("data-value"),
						duration: 2000
					});	
				}
			
			});
			
		}
	}
	
	
	// ODOMETER //
	function odometer() {
		
		if (typeof Odometer !== 'undefined') {
			
			$(".odometer:in-viewport").each(function(index) {											
				
				var new_id = 'odometer-' + index;
				
				this.id = new_id;
				
				var value = $(this).attr("data-value");
				
				if (!$(this).hasClass("animated")) {
					
					$(this).addClass("animated");
					
					setTimeout(function() {
						document.getElementById(new_id).innerHTML = value;
					});
					
				}
				
			});
		
		}
		
	}
	
	
	// STATISTICS //
	function statistics() {
		
		if (typeof Chart !== 'undefined') {
		
			$(".statistics-container .animate-chart:in-viewport").each(function() {
				
				if(!$(this).hasClass("animated")) {
					
					$(this).addClass("animated");
					
					// LINE CHART //
					var data1 = {
						labels : ["0", "10", "20", "30", "40", "50", "60"],
						datasets : [
							{
								fill: "true",
								label: "Profit",
								backgroundColor: "transparent",
								borderWidth: 1,
								borderColor: "#72d3d5",
								pointBorderColor: "#72d3d5",
								pointBackgroundColor: "#fff",
								pointHoverBackgroundColor: "#fff",
								pointHoverBorderColor: "#72d3d5",
								pointBorderWidth: 1,
								pointHoverBorderWidth: 1,
								tension: 0,
								stacked: false,
								data : ["30", "20", "35", "30", "65", "60", "70"]
							},
							{
								fill: "true",
								label: "Revenue",
								backgroundColor: "transparent",
								borderWidth: 1,
								borderColor: "#c9dc6e",
								pointBorderColor: "#c9dc6e",
								pointBackgroundColor: "#fff",
								pointHoverBackgroundColor: "#fff",
								pointHoverBorderColor: "#c9dc6e",
								pointBorderWidth: 1,
								pointHoverBorderWidth: 1,
								tension: 0,
								stacked: false,
								data : ["20", "30", "23", "50", "45", "25", "60"]
							}
						]
					}
					
					if ($("#line-chart").length > 0) {
						
						var line_chart = new Chart(document.getElementById("line-chart").getContext("2d"), {
							type: 'line',
							data: data1,
							options: {
								responsive: true,
								legend: {
									display: true,
									labels: {
										boxWidth: 12,
										fontColor: "#838383",
										fontFamily: "Roboto",
										fontSize: 12,
										padding: 20
									}
								},
								tooltips: {
									enabled: false
								},
								scales: {
									xAxes: [{
										display: true,
									}],
									yAxes: [{
										display: true,
										ticks: {
											suggestedMin: 0,
											suggestedMax: 100,
										}
									}]
								}
							}
						});

					}
					
					// DOUGHNUT CHART //
					var data2 = {
						labels: [
							"Credibility",
							"Sustenability",
							"Economy"
						],
						datasets: [
						{
							data: [20, 10, 70],
							borderWidth: 0,
							backgroundColor: [
								"#f40b4c",
								"#c9dc6e",
								"#72d3d5"
							],
							hoverBackgroundColor: [
								"#f40b4c",
								"#c9dc6e",
								"#72d3d5"
							]
						}]
					};
					
					if ($("#doughnut-chart").length > 0) {
						
						var doughnut_chart = new Chart(document.getElementById("doughnut-chart").getContext("2d"), {
							type: 'doughnut',
							data: data2,
							options: {
								cutoutPercentage: 80,
								responsive: true,
								legend: {
									display: true,
									position: "bottom",
									labels: {
										boxWidth: 12,
										fontColor: "#838383",
										fontFamily: "Roboto",
										fontSize: 12,
										padding: 20
									}
								},
								tooltips: {
									enabled: false
								},
								scales: {
									xAxes: [{
										display: false
									}],
									yAxes: [{
										display: false,
									}]
								}
							}
						});

					}
					
					
					// PIE CHART //
					var data3 = {
						labels: [
							"Credibility",
							"Sustenability",
							"Economy"
						],
						datasets: [
						{
							data: [60, 25, 15],
							borderWidth: 0,
							backgroundColor: [
								"#c9dc6e",
								"#72d3d5",
								"#f40b4c"
							],
							hoverBackgroundColor: [
								"#c9dc6e",
								"#72d3d5",
								"#f40b4c"
							]
						}]
					};
					
					if ($("#pie-chart").length > 0) {
						
						var pie_chart = new Chart(document.getElementById("pie-chart").getContext("2d"), {
							type: 'pie',
							data: data3,
							options: {
								responsive: true,
								legend: {
									display: true,
									position: "bottom",
									labels: {
										boxWidth: 12,
										fontColor: "#838383",
										fontFamily: "Roboto",
										fontSize: 12,
										padding: 20
									}
								},
								tooltips: {
									enabled: false
								},
								scales: {
									xAxes: [{
										display: false
									}],
									yAxes: [{
										display: false,
									}]
								}
							}
						});

					}
					
					
					// BAR CHART //
					var data4 = {
						labels : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
						datasets : [
							{
								label: "Profit",
								backgroundColor: "#c9dc6e",
								borderColor: "#fff",
								borderWidth: 3,
								hoverBorderWidth: 3,
								hoverBackgroundColor: "#c9dc6e",
								hoverBorderColor: "#fff",
								data : [80, 70, 60, 50, 80, 60, 55, 45, 35, 45, 50, 40]
							},
							{
								label: "Revenue",
								backgroundColor: "#72d3d5",
								borderColor: "#fff",
								borderWidth: 3,
								hoverBorderWidth: 3,
								hoverBackgroundColor: "#72d3d5",
								hoverBorderColor: "#fff",
								data : [70, 60, 55, 40, 100, 85, 75, 60, 50, 65, 70, 60]
							}
						]
					}
					
					if ($("#bar-chart").length > 0) {
						
						var bar_chart = new Chart(document.getElementById("bar-chart").getContext("2d"), {
							type: 'bar',
							data: data4,
							options: {
								responsive: true,
								legend: {
									display: true,
									labels: {
										boxWidth: 12,
										fontColor: "#838383",
										fontFamily: "Roboto",
										fontSize: 12,
										padding: 20
									}
								},
								tooltips: {
									enabled: true,
									xPadding: 15
								},
								scales: {
									xAxes: [{
										display: false
									}],
									yAxes: [{
										display: false,
										ticks: {
											suggestedMin: 0,
											suggestedMax: 100,
										}
									}]
								}
							}
						});

					}
					
					
					// AREA CHART //
					var data5 = {
						labels : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
						datasets : [
							{
								fill: "true",
								label: "Profit",
								backgroundColor: "rgba(161, 139, 120, 0.2)",
								borderWidth: 1,
								borderColor: "#c9dc6e",
								pointBorderColor: "#c9dc6e",
								pointBackgroundColor: "#fff",
								pointHoverBackgroundColor: "#fff",
								pointHoverBorderColor: "#c9dc6e",
								pointBorderWidth: 1,
								pointHoverBorderWidth: 1,
								tension: 0.4,
								stacked: false,
								data : [55, 85, 65, 70, 40, 65, 75, 55, 70, 40, 65, 45]
							},
							{
								fill: "true",
								label: "Revenue",
								backgroundColor: "transparent",
								borderWidth: 1,
								borderColor: "#72d3d5",
								pointBorderColor: "#72d3d5",
								pointBackgroundColor: "#fff",
								pointHoverBackgroundColor: "#fff",
								pointHoverBorderColor: "#72d3d5",
								pointBorderWidth: 1,
								pointHoverBorderWidth: 1,
								tension: 0.4,
								stacked: false,
								data : [65, 75, 55, 65, 50, 75, 90, 80, 60, 50, 55, 70]
							}
						]
					}
					
					if ($("#area-chart").length > 0) {
						
						var area_chart = new Chart(document.getElementById("area-chart").getContext("2d"), {
							type: 'line',
							data: data5,
							options: {
								responsive: true,
								legend: {
									display: true,
									labels: {
										boxWidth: 12,
										fontColor: "#838383",
										fontFamily: "Roboto",
										fontSize: 12,
										padding: 20
									}
								},
								tooltips: {
									enabled: false
								},
								scales: {
									xAxes: [{
										display: true
									}],
									yAxes: [{
										display: true,
										ticks: {
											suggestedMin: 0,
											suggestedMax: 100,
										}
									}]
								}
							}
						});

					}
					
				}
				
			});
			
		}
		
	}
	
	
	// LOAD MORE PROJECTS //
	function load_more_projects() {
	
		var number_clicks = 0;
		
		$(".load-more").on("click", function(e) {
			
			e.preventDefault();
			
			if (number_clicks == 0) {
				$.ajax({
					type: "POST",
					url: $(".load-more").attr("href"),
					dataType: "html",
					cache: false,
					msg : '',
					success: function(msg) {
						$(".isotope").append(msg);	
						$(".isotope").imagesLoaded(function() {
							$(".isotope").isotope("reloadItems").isotope();
							$(".fancybox").fancybox({
								prevEffect: 'none',
								nextEffect: 'none',
								padding: 0
							});
							$('.portfolio-item').directionalHover({
								overlay: "portfolio-item-hover",
								easing: "swing",
								speed: 150
							});
						});
						number_clicks++;
						$(".load-more").html("Nothing to load");
					}
				});
			}
			
		});
		
	}
	
	
	// MULTILAYER PARALLAX //
	function multilayer_parallax() {
		
		$(".multilayer-parallax .parallax-layer").each(function(){
			
			var x = parseInt($(this).attr("data-x"), 10),
				y = parseInt($(this).attr("data-y"), 10);
			
			$(this).css({
				"left": x + "%", 
				"top": y + "%"
			});
			
			if ($(this).attr("data-x") === "center") {
				$(this).addClass("x-center");
			}
			
		});

	}
	
	
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
	
	
	// INSTAGRAM FEED //
	function instagram_feed() {

		if ((typeof Instafeed !== 'undefined') & ($("#instafeed").length > 0)) {

			var nr = $("#instafeed").data('number');
			var userid = $("#instafeed").data('user');
			var accesstoken = $("#instafeed").data('accesstoken');
			
			var feed = new Instafeed({
				target: 'instafeed',
				get: 'user',
				userId: userid,
				accessToken: accesstoken,
				limit: nr,
				resolution: 'thumbnail',
				sortBy: 'most-recent'
			});
			
			feed.run();
		
		}
		
	}
	
	
	// ANIMATIONS //
	function animations() {
		
		if (typeof WOW !== 'undefined') {
		
			animations = new WOW({
				boxClass: 'wow',
				animateClass: 'animated',
				offset: 120,
				mobile: false,
				live: true
			});
			
			animations.init();
		
		}
		
	}
	
	
	// EQUAL HEIGHT //
	function equal_height() {

		$(".text-boxes-list").each(function() {
			
			var x = 0;
			
			$(this).find("li").each(function() {
				
				if ($(this).height() > x) {
					x = $(this).height();
				}
				
			});
			
			$(this).find(".text-box").css("height", x + "px");

		});

	}
	
	
	// IMAGE BOX //
	function image_box() {
		
		if ($(window).width() > 767 ) {
		
			$(".image-box").each(function() {
				
				var x = $(this).innerHeight();
				
				$(this).find(".image-box-thumbnail").css("height", x + "px");
				
			});
			
		} else {
			$(".image-box-thumbnail").css("height", 550);
		}

	}
	
	
	// FULL SCREEN //
	function full_screen() {

		if ($(window).width() > 767) {
			$(".full-screen").css("height", $(window).height() + "px");
		} else {
			$(".full-screen").css("height", "auto");
		}

	}
	
	
	// DOCUMENT READY //
	$(document).ready(function() {
		
		// STICKY //
		if ($("body").hasClass("sticky-header")) {
			sticky();
		}
		
		
		// MENU //
		if (typeof $.fn.superfish !== 'undefined') {
			
			$(".menu").superfish({
				delay: 500,
				animation: {
					opacity: 'show',
					height: 'show'
				},
				speed: 'fast',
				autoArrows: true
			});
			
		}
		
		
		// SHOW/HIDE MOBILE MENU //
		show_hide_mobile_menu();
		
		
		// MOBILE MENU //
		mobile_menu();
		
		
		// MENU SLIDE //
		menu_slide();
		
		
		// FANCYBOX //
		if (typeof $.fn.fancybox !== 'undefined') {
		
			$(".fancybox").fancybox({
				prevEffect: 'none',
				nextEffect: 'none',
				padding: 0
			});
			
			$(".login .btn").fancybox({
				maxWidth: 450,
				maxHeight: 450,
				fitToView: false,
				width: '90%',
				height: '90%',
				padding: 0,
				autoSize: false,
				closeClick: false,
				openMethod: 'dropIn',
				openSpeed: 150,
				closeMethod: 'dropOut',
				closeSpeed: 150,
				beforeShow: function () {
					$("#main-container").addClass("bluring");
				},
				afterClose: function () {
					$("#main-container").removeClass("bluring");
				}
			});
			
			$(".search a").fancybox({
				maxWidth: 1140,
				maxHeight: 100,
				fitToView: false,
				width: '90%',
				height: '100%',
				padding: 0,
				autoSize: false,
				closeClick: false,
				openMethod: 'dropIn',
				openSpeed: 150,
				closeMethod: 'dropOut',
				closeSpeed: 150,
				beforeShow: function () {
					$("#main-container").addClass("bluring");
				},
				afterClose: function () {
					$("#main-container").removeClass("bluring");
				}
			});
		
		}
		
		// REVOLUTION SLIDER //
		if (typeof $.fn.revolution !== 'undefined') {
			
			$(".rev_slider").revolution({
				sliderType: "standard",
				sliderLayout: "auto",
				delay: 5000,
				navigation: {
					arrows:{
						style: "zeus",
						enable: true,
						hide_onmobile: true,
						hide_onleave: false,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						hide_under: 0,
						hide_over: 9999,
						tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div>',
						left: {
							h_align: "left",
							v_align: "center",
							h_offset: 20,
							v_offset: 0
						 },
						 right: {
							h_align: "right",
							v_align: "center",
							h_offset: 20,
							v_offset: 0
						 }
					},
					bullets:{
						style: "custom",
						enable: true,
						hide_onmobile: false,
						hide_onleave: false,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						hide_under: 0,
						hide_over: 9999,
						tmp: '', 
						direction: "horizontal",
						space: 10,       
						h_align: "center",
						v_align: "bottom",
						h_offset: 0,
						v_offset: 40
					},
					touch:{
						touchenabled: "on",
						swipe_treshold: 75,
						swipe_min_touches: 1,
						drag_block_vertical: false,
						swipe_direction: "horizontal"
					}
				},
				parallax:{
					type: "mouse",
					levels: [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
					origo: "enterpoint",
					speed: 400,
					bgparallax: "false",
					disable_onmobile: "off"
				},
				gridwidth: 1170,
				gridheight: 940
			});
			
		}
	
	
		// OWL Carousel //
		if (typeof $.fn.owlCarousel !== 'undefined') {
			
			// IMAGES SLIDER HORIZONTAL //
			$(".owl-carousel.images-slider-horizontal").owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				smartSpeed: 1200,
				loop: true,
				nav: false,
				navText: false,
				dots: true,
				mouseDrag: true,
				touchDrag: true,
				animateIn: 'fadeIn',
				animateOut: 'fadeOut'
			});
			
			
			// IMAGES SLIDER VERTICAL //
			$(".owl-carousel.images-slider-vertical").owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				smartSpeed: 1200,
				loop: true,
				nav: false,
				navText: false,
				dots: true,
				mouseDrag: true,
				touchDrag: true,
				animateIn: 'slideInDown',
				animateOut: 'slideOutDown'
			});
			
			
			// TESTIMONIALS SLIDER //
			$(".owl-carousel.testimonials-slider").owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 4000,
				autoplayHoverPause: true,
				smartSpeed: 300,
				loop: true,
				nav: false,
				navText: false,
				dots: true,
				mouseDrag: true,
				touchDrag: true,
				animateIn: 'slideInDown',
				animateOut: 'slideOutDown'
			});
			
			
			// IMAGES CAROUSEL //
			$(".owl-carousel.images-carousel").owlCarousel({
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				smartSpeed: 700,
				loop: true,
				nav: false,
				navText: false,
				dots: true,
				mouseDrag: true,
				touchDrag: true,
				margin: 30,
				responsive: {
					0:{
						items: 1
					},
					768:{
						items: 3
					},
					992:{
						items: 5
					}
				}
			});
			
			
			// LOGOS SLIDER //
			$(".owl-carousel.logos-slider").owlCarousel({
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				smartSpeed: 1200,
				loop: true,
				nav: true,
				navText: false,
				dots: false,
				mouseDrag: true,
				touchDrag: true,
				responsive: {
					0:{
						items: 1
					},
					480:{
						items: 2
					},
					768:{
						items: 3
					},
					992:{
						items: 4
					},
					1200:{
						items: 5
					}
				}
			});
		
		}
		
		
		// WATERWHEELCAROUSEL //
		if (typeof $.fn.waterwheelCarousel !== 'undefined') {
			
			var x;
			
			switch(true) {
				case ($(window).width() > 1199):
					x = 250;
					break;
				case (($(window).width() > 767) && ($(window).width() < 992)):
					x = 150;
					break;
				case (($(window).width() > 479) && ($(window).width() <= 767)):
					x = 85;
					break;
				case ($(window).width() < 767):
					x = 65;
					break;
				default:
					x = 200;
					break;
			}
			
			$(".carousel").waterwheelCarousel({
				startingItem: 1,
				opacityMultiplier: 1,
				separation: x,
				flankingItems: 2,
				autoPlay: 5000,
				speed: 500
			});
			
		}
		
		
		// GOOGLE MAPS //
		if (typeof $.fn.gmap3 !== 'undefined') {
		
			$(".map").each(function() {
				
				var data_zoom = 15,
					data_height,
					data_popup = false;
				
				if ($(this).attr("data-zoom") !== undefined) {
					data_zoom = parseInt($(this).attr("data-zoom"),10);
				}	
				
				if ($(this).attr("data-height") !== undefined) {
					data_height = parseInt($(this).attr("data-height"),10);
				}
				
				if ($(this).attr("data-address-details") !== undefined) {
					
					data_popup = true;
					
					var infowindow = new google.maps.InfoWindow({
						content: $(this).attr("data-address-details")
					});
					
				}
				
				
				$(this)
				.gmap3({
					address: $(this).attr("data-address"),
					zoom: data_zoom,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					scrollwheel: false
				})
				.marker([
					{address: $(this).attr("data-address")}
				])
				.on({
					click: function(marker, event){
						if (data_popup) {
							infowindow.open(marker.get('map'), marker);
						}
					}
				});
				  
				$(this).css("height", data_height + "px");
				
			});
			
		}
		
		
		// ISOTOPE //
		if ((typeof $.fn.imagesLoaded !== 'undefined') && (typeof $.fn.isotope !== 'undefined')) {
		
			$(".isotope").imagesLoaded( function() {
				
				var container = $(".isotope"),
					container_masonry = $(".isotope.masonry"),
					x = 0;
					
				if (($(window).width() > 1200) && ($(window).width() < 1300)) {
					x = 3;
				} else {
					x = 0;
				}
				
				container.isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.4s'
				});
				
				container_masonry.isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					masonry: {
						columnWidth: 1,
						gutter: x
					},
					transitionDuration: '0.4s'
				});
				
				$(".filter li a").on("click", function() {
					$(".filter li a").removeClass("active");
					$(this).addClass("active");
		
					var selector = $(this).attr("data-filter");
					
					container.isotope({
						filter: selector
					});
					
					container_masonry.isotope({
						filter: selector
					});
		
					return false;
				});
		
				$(window).resize(function() {
					
					container.isotope();
					container_masonry.isotope();
					
				});
				
			});
			
		}
		
		
		// LOAD MORE PORTFOLIO ITEMS //
		load_more_projects();
		
		
		// PLACEHOLDER //
		if (typeof $.fn.placeholder !== 'undefined') {
			
			$("input, textarea").placeholder();
			
		}
		
		
		// CONTACT FORM VALIDATE & SUBMIT //
		// VALIDATE //
		if (typeof $.fn.validate !== 'undefined') {
		
			$("#contact-form").validate({
				rules: {
					name: {
						required: true
					},
					email: {
						required: true,
						email: true
					},
					subject: {
						required: true
					},
					message: {
						required: true,
						minlength: 3
					}
				},
				messages: {
					name: {
						required: "Please enter your name!"
					},
					email: {
						required: "Please enter your email!",
						email: "Please enter a valid email address"
					},
					subject: {
						required: "Please enter the subject!"
					},
					message: {
						required: "Please enter your message!"
					}
				},
					
				// SUBMIT //
				submitHandler: function(form) {
					var result;
					$(form).ajaxSubmit({
						type: "POST",
						data: $(form).serialize(),
						url: "assets/php/send.php",
						success: function(msg) {
							
							if (msg == 'OK') {
								result = '<div class="alert alert-success">Your message was successfully sent!</div>';
								$("#contact-form").clearForm();
							} else {
								result = msg;
							}
							
							$("#alert-area").html(result);
		
						},
						error: function() {
		
							result = '<div class="alert alert-danger">There was an error sending the message!</div>';
							$("#alert-area").html(result);
		
						}
					});
				}
			});
			
		}
		
		
		// PARALLAX //
		if (typeof $.fn.stellar !== 'undefined') {
		
			
			// MULTILAYER PARALLAX //
			multilayer_parallax();
		
		
			if (!is_touch_device()) {
				
				$(window).stellar({
					horizontalScrolling: false,
					verticalScrolling: true,
					responsive: true
				});
				
			} else {
				
				$(".parallax").addClass("parallax-disable");
				
			}
			
			if ($(window).width() < 1300) {
				$("#footer-middle").addClass("footer-parallax-disable");
			} else {
				$("#footer-middle").removeClass("footer-parallax-disable");
			}
		
		}
		
		
		// SHOW/HIDE SCROLL UP
		show_hide_scroll_top();
		
		
		// SCROLL UP //
		scroll_up();
		
		
		// PROGRESS BARS //
		progress_bars();
		
		
		// PIE CHARTS //
		pie_chart();
		
		
		// COUNTER //
		counter();
		
		
		// ODOMETER //
		odometer();
		
		
		// STATISTICS //
		statistics();
		
		
		// YOUTUBE PLAYER //
		if (typeof $.fn.mb_YTPlayer !== 'undefined') {
			
			$(".youtube-player").mb_YTPlayer();
		
		}
		
		
		// INSTAGRAM FEED //
		instagram_feed();
		
		
		// TWITTER //
		if (typeof twitterFetcher !== 'undefined' && ($('.widget-twitter').length > 0)) {
			
			$('.widget-twitter').each(function(index){
			
				var account_id = $('.tweets-list', this).attr('data-account-id'),
					items = $('.tweets-list', this).attr('data-items'),
					newID = 'tweets-list-' + index;
				
				$('.tweets-list', this).attr('id', newID);
				
				var config = {
				  "id": account_id,
				  "domId": newID,
				  "maxTweets": items,
				  "showRetweet": false,
				  "showTime": false,
				  "showUser": false,
				  "showInteraction": false
				};
				
				twitterFetcher.fetch(config);
			});
			
		}
		
		
		// COUNTDOWN //
		if (typeof $.fn.countdown !== 'undefined') {
			
			$(".countdown").countdown('2017/12/31 00:00', function(event) {
				$(this).html(event.strftime(
					'<div><div class="count">%-D</div> <span>Days</span></div>' +
					'<div><div class="count">%-H</div> <span>Hours</span></div>' +
					'<div><div class="count">%-M</div> <span>Minutes</span></div>' +
					'<div><div class="count">%S</div> <span>Seconds</span></div>'
				));
			});
		
		}
		
		
		// ANIMATIONS //
		animations();
		
		
		// EQUAL HEIGHT //
		equal_height();
		
		
		// IMAGE BOX //
		image_box();
		
		
		// PORTFOLIO HOVER //
		if (typeof $.fn.directionalHover !== 'undefined') {
			
			$('.portfolio-item').directionalHover({
				overlay: "portfolio-item-hover",
				easing: "swing",
				speed: 150
			});
		 
		}
		
		
		// FULL SCREEN //
		full_screen();
		
	});

	
	// WINDOW SCROLL //
	$(window).scroll(function() {
		
		progress_bars();
		pie_chart();
		counter();
		odometer();
		statistics();
		show_hide_scroll_top();
		
	});
	
	
	// WINDOW RESIZE //
	$(window).resize(function() {

		mobile_menu();
		equal_height();
		image_box();
		full_screen();
		
		if ($(window).width() < 1300) {
			$("#footer-middle").addClass("footer-parallax-disable");
		} else {
			$("#footer-middle").removeClass("footer-parallax-disable");
		}
		
	});
	
})(window.jQuery);

(function ($, F) {
    
    // Opening animation - fly from the top
    F.transitions.dropIn = function() {
        var endPos = F._getPosition(true);

        endPos.top = (parseInt(endPos.top, 10) - 200) + 'px';
        endPos.opacity = 0;
        
        F.wrap.css(endPos).show().animate({
            top: '+=200px',
            opacity: 1
        }, {
            duration: F.current.openSpeed,
            complete: F._afterZoomIn
        });
    };

    // Closing animation - fly to the top
    F.transitions.dropOut = function() {
        F.wrap.removeClass('fancybox-opened').animate({
            top: '-=200px',
            opacity: 0
        }, {
            duration: F.current.closeSpeed,
            complete: F._afterZoomOut
        });
    };

}(jQuery, jQuery.fancybox));