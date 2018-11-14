
$(document).ready(function() {
	$('.zoom-anim-dialog-ajax-popup').magnificPopup({
		type: 'ajax',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeOnContentClick: false,
		closeOnBgClick: false,
		preloader: false,
		midClick: true,
		showCloseBtn: true,
		enableEscapeKey: true,
		mainClass: 'mfp-with-zoom'
	});
});
