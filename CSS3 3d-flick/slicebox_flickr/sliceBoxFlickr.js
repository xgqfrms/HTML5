/*
	sliceBoxFlickr written by Sean Clark, Square Bracket LLC
	http://square-bracket.com @optikalefx
	
	SliceBox written by Pedro Botelho
	http://tympanus.net/ @o_telho

*/
(function() {
	$.fn.sliceBoxFlickr = function(options) {
		this.each(function() {
			
			// our options
			// api for slicebox options is
			// http://tympanus.net/codrops/2011/09/05/slicebox-3d-image-slider/
			var opts = $.extend({
				show				: 20,
				usingFirst			: true,
				rss					: "",
				slicesCount			: 7,
				disperseFactor		: 50,
				sequentialRotation	: true,
				sequentialFactor	: 20,
				orientation			: 'v',
				colorHiddenSides    : '#222',
				speed               : 600,
				fallbackEasing      : 'easeOutExpo',
				slideshow           : false,
				slideshowTime       : 2000,
				speed3d 			: 800
			},options);
			
			// reference our selector
			var selector = $(this);
			
			// flick api
			var url = encodeURIComponent(opts.rss);
			var api="http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+url+"&num="+opts.show+"&output=json_xml";
			
			// get data
			$.getJSON(api,function(data) {
				var entries = data.responseData.feed.entries;
				$.each(entries,function(i,photo) {
					// get large img src
					var src = photo.content.replace("_m","_z").match(/src=\"([^\"]*)/);
					var src = src[1];
					// get title
					var title = photo.content.match(/alt=\"([^\"]*)/);
					var title = title[1];
					
					// create and place images
					var $img = $("<img src='"+src+"' title='"+title+"'/>").addClass("loaded");
					$(selector).append($img);
				});
				
				// if we had a pre load image, kill it
				if(opts.usingFirst) $(selector).find("img:first").remove();
				
				// slice box it
				$(selector).slicebox({
					slicesCount			: opts.slicesCount,
					disperseFactor		: opts.disperseFactor,
					sequentialRotation	: opts.sequentialRotation,
					sequentialFactor	: opts.sequentialFactor,
					speed3d 			: opts.speed3d,
					orientation			: opts.orientation,
					colorHiddenSides    : opts.colorHiddenSides,
					speed               : opts.speed,
					fallbackEasing      : opts.fallbackEasing,
					slideshow           : opts.slideshow,
					slideshowTime       : opts.slideshowTime
				});
				
				// for non 3d browsers
				if( !Modernizr.csstransforms3d ) $('#sb-note').show();
			});
		});
	}
}(jQuery))