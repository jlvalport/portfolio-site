$(document).ready(function() {

	// This sets the images of slideshow in the landing page
	const coverSlideshow = {
		numberOfImages: 12,
		imageCount: 1,
		secondsBetweenImages: 25,
		imageNumberShown: [0],

		init: function() {
			coverSlideshow.changeColor();
			coverSlideshow.startSlideshow();
		},

		// Validates if the image number was alredy shown
		imageHistory: function(testNumber) {
			// Compares the random number with the record of
			// image numbers already shown
			for (let ImageShown of coverSlideshow.imageNumberShown) {
				if (testNumber === ImageShown) {
					return true;
				};
			};
			// If not yet shown, it adds it to the record
			coverSlideshow.imageNumberShown.push(testNumber);
			return false;
		},

		// Creates a random number and validates if already shown
		randomImageSelector: function(maxNumberOfImages) {
			// Generates a random number from 1 to the numberOfImages
			let randomIndex = Math.floor(Math.random() * (maxNumberOfImages + 1));
			let checkImageHistory = coverSlideshow.imageHistory(randomIndex);
			// Resets the record of images shown to start
			// the slideshow all over again
			if (coverSlideshow.numberOfImages === (coverSlideshow.imageNumberShown.length - 1)) {
				coverSlideshow.imageNumberShown = [0];
			};
			// If the number is already shown it goes and creates
			// a new one
			while (checkImageHistory === true) {
				randomIndex = Math.floor(Math.random() * maxNumberOfImages + 1);
				checkImageHistory = coverSlideshow.imageHistory(randomIndex);
			};
			// Only when checkImageHistory is false it will
			// return that random number to the sequence
			return randomIndex;
		},

		// Creates a loop that changes the image number to be shown
		startSlideshow: function() {
			// Sets the waiting time between images
			setTimeout(function() {
				// Sets the number of the image to be displayed
				coverSlideshow.imageCount = coverSlideshow.randomImageSelector(coverSlideshow.numberOfImages);
				$('header').fadeOut(2000);
				setTimeout(function() {
					// Changes the background image number
					$('header').css('background-image', 'url(\'img/cover-images/image'+coverSlideshow.imageCount+'.jpg\')');
				}, 2000);
				$('header').fadeIn(2000);
			}, (coverSlideshow.secondsBetweenImages+'000'));
			setTimeout(function() {
				coverSlideshow.startSlideshow();
			}, (coverSlideshow.secondsBetweenImages+'000'));
		},

		// Changes the color of the header name to yellow when clicked
		changeColor: function() {
			$('.header-name').on('click', function () {
				$(this).css('color', 'yellow');
			});
		}
	};

	coverSlideshow.init();

	function prefix() {
		let styles = window.getComputedStyle(document.documentElement, ''),
		pre = (Array.prototype.slice
			.call(styles)
			.join('')
			.match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o']))[1],
			dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
			return {
				dom: dom,
				lowercase: pre,
				css: '-' + pre + '-',
				js: pre[0].toUpperCase() + pre.substr(1)
			};
		};

		const pre = prefix();

		// This object makes the section title move when scrolling
		const moveArticleTitle = {
			jsPrefix: pre.lowercase,
			scrollPercent: 0,
			scrollHeight: 0,
			containerHeight: 4000,

			init: function() {
				if (moveArticleTitle.jsPrefix == 'moz') {
					moveArticleTitle.jsPrefix = 'Moz'
				};
				moveArticleTitle.resize();
				moveArticleTitle.loop();
			},

			// Sets the scrolling area
			resize: function() {
				let height = window.innerHeight;
				moveArticleTitle.scrollHeight = moveArticleTitle.containerHeight-height;
			},

			// Makes the section title move
			move: function () {
				$('#section-title').css('transform', 'translate3d(0px, -'+(moveArticleTitle.scrollPercent*600)+'px, 0px)');
			},

			// Creates an event listener for scrolling
			loop: function() {
				let scrollOffset = window.pageYOffset || window.scrollTop;
				moveArticleTitle.scrollPercent = scrollOffset/moveArticleTitle.scrollHeight;
				moveArticleTitle.move();
				window.requestAnimationFrame(moveArticleTitle.loop);
			}
		};

		moveArticleTitle.init();
});
