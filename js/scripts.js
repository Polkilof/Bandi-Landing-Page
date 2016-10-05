$(document).ready(function(){


	var body_ = $('body');
	$('<a href="#" class="open-menu"><span></span><span></span><span></span>Open Menu</a>').appendTo('#menu');
	$('<span class="fader"/>').appendTo('#menu');
	$('.open-menu').click(function(){
		body_.toggleClass('menu-opened');
		return false;
	});

	$('.fader').click(function(){
		body_.removeClass('menu-opened');
	});


	$('.works-item').isotope({
		itemSelector: '.item-filter',
		layoutMode: 'fitRows'
	});
	$('.filter li').click(function(){
		$('.filter li').removeClass('active');
		$(this).addClass('active');

		var selector = $(this).attr('data-filter');
		$('.works-item').isotope({
			filter: selector
		});
		return false;
	});


	$(function() {if (GBrowserIsCompatible()) {
		var map = new GMap2(document.getElementById("map_canvas"));
			map.setCenter(new GLatLng(51.3451001,-0.549995), 15);
			map.addControl(new GSmallMapControl());
			map.addControl(new GMapTypeControl());
		var myexIcon = new GIcon();
			myexIcon.image = "images/ico_marker_map.png";
			myexIcon.iconSize = new GSize(26, 35);
			myexIcon.iconAnchor = new GPoint(2, 32);
			myexIcon.infoWindowAnchor = new GPoint(4, 4);
			markerOptions = { icon:myexIcon };
			point = new GLatLng(51.3451001,-0.549995);
			map.addOverlay (new GMarker(point, markerOptions));
			map.disableScrollWheelZoom();
	}});


	$(".slick-item").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		focusOnSelect: true,
		arrows: false,
		draggable: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 1122,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 585,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});

	$(".slick-team").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		focusOnSelect: true,
		arrows: false,
		draggable: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 1122,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 585,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 321,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});

	$(".slick-baner").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		focusOnSelect: false,
		arrows: false,
		draggable: false,
		infinite: false,
		vertical: true,
		autoplay: true,
		autoplaySpeed: 20000,
		pauseOnDotsHover: true
	});

	$('.slick-baner .slide').each(function() {
		$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')').find('> img').hide();
	});

});
