//  WIP that will eventually include all seven generations!
// Next steps are getting the sprites for Gen II as well as finding a better way to do the HTML/SASS other than manual input.

var $pk = $('.grid ul').isotope({
	percentPosition: true,
	layoutMode: 'packery',
	itemSelector: 'li'
});
$pk.imagesLoaded().progress(function() {
	$pk.isotope('layout');
});
setTimeout(function(){
	$("main").addClass("animated");
}, 250);
var $pkf = $('.filter ul').isotope({
	percentPosition: true,
	layoutMode: 'packery',
	itemSelector: 'li'
});
$pkf.imagesLoaded().progress(function() {
	$pkf.isotope('layout');
});
$('.filter').on('click', 'button', function() {
	var filterValue = $(this).attr('data-filter');
	setTimeout(function(){
		$pk.isotope({ filter: filterValue });
	}, 150);
});
$('.filter').each(function(e, pkFilter) {
	var $pkFilter = $(pkFilter);
	$pkFilter.on('click', 'button', function() {
		if ($(this).attr('data-filter') == '*') {
			$pkFilter.find('.active').removeClass('active');
		} else {
			$pkFilter.find('.active').removeClass('active');
			$(this).addClass('active');
		}
	});
});
