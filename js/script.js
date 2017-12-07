$(document).ready(function() {
	const coverSlideshow = {
		numberOfImages: 12,
		imageCount: 1,
		secondsWaitingBetweenImages: 15,
		imageNumberShown: [0],
		init: function() {
			coverSlideshow.changeColor();
			coverSlideshow.startSlideshow();
		},
		imageHistory: function(testNumber) {
			for (let ImageShown of coverSlideshow.imageNumberShown) {
				if (testNumber === ImageShown) {
					console.log('passed a number and TRUE <-------'); // <----------
					return true;
				};	
			};
			coverSlideshow.imageNumberShown.push(testNumber);
			return false
		},
		randomImageSelector: function(maxNumberOfImages) {
			if (coverSlideshow.numberOfImages === (coverSlideshow.imageNumberShown.length - 1)) {
				console.log(coverSlideshow.imageNumberShown); // <-----------
				coverSlideshow.imageNumberShown = [0];
				console.log('imageNumberShown just RESETED'); // <-----------
			};
			let randomIndex = Math.floor(Math.random() * (maxNumberOfImages + 1));
			console.log('This is the first randomIndex: '+randomIndex); // <-----------
			let checkImageHistory = coverSlideshow.imageHistory(randomIndex);
			while (checkImageHistory === true) {
				randomIndex = Math.floor(Math.random() * maxNumberOfImages + 1);
				console.log('This is the new randomIndex after the while: '+randomIndex); // <-----------
				checkImageHistory = coverSlideshow.imageHistory(randomIndex)
			};
			console.log('This is the randomIndex that got through randomImageSelector: '+randomIndex); // <-----------
			return randomIndex
		},
		startSlideshow: function() {
			setTimeout(function() {
				coverSlideshow.imageCount = coverSlideshow.randomImageSelector(coverSlideshow.numberOfImages);
				console.log('This is the randomIndex before its passed in slideShow: '+coverSlideshow.imageCount); // <-----------
				$('header').fadeOut(2000);
				setTimeout(function() {
					$('header').css('background-image', 'url(\'img/cover-images/image'+coverSlideshow.imageCount+'.jpg\')'); 
					console.log('change image'); // <----------
				}, 2000);
				$('header').fadeIn(2000);
			}, (coverSlideshow.secondsWaitingBetweenImages+'000'));
			setTimeout(function() {
				console.log('Start again'); // <----------
				coverSlideshow.startSlideshow();
			}, (coverSlideshow.secondsWaitingBetweenImages+'000'));
		},
		changeColor: function() {
			$('.header-name').on('click', function () {
				$(this).css('color', 'yellow');
			});
		}
	};
	coverSlideshow.init();

	function prefix() {
		var styles = window.getComputedStyle(document.documentElement, ''),
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

	const moveArticleTitleUpwards = {
		
		jsPrefix: pre.lowercase,
		scrollPercent: 0,
		scrollHeight: 0,
		containerHeight: 4000,

		init: function() {
			if(moveArticleTitleUpwards.jsPrefix == 'moz') {moveArticleTitleUpwards.jsPrefix = 'Moz'};
			// console.log('scrollTop value from document: '+$(document).scrollTop()) // <-----------
			// console.log('scrollTop value from window: '+$(window).scrollTop()) // <-----------

			moveArticleTitleUpwards.resize();
			moveArticleTitleUpwards.loop();
		},
		resize: function() {
			height = window.innerHeight;
			moveArticleTitleUpwards.scrollHeight = moveArticleTitleUpwards.containerHeight-height;
		},
		move: function () {
			// console.log('The function move should have fired') // <----------
			// console.log('This is the scrollPercent: '+moveArticleTitleUpwards.scrollPercent) // <----------
			$('#section-title').css('transform', 'translate3d(0px, -'+(moveArticleTitleUpwards.scrollPercent*600)+'px, 0px)');
			// document.getElementById('section-title').style[moveArticleTitleUpwards.jsPrefix+'Transform'] = 'translate3d(0px, '+moveArticleTitleUpwards.scrollPercent+'px, 0px)';
		},
		loop: function() {
			scrollOffset = window.pageYOffset || window.scrollTop;
			moveArticleTitleUpwards.scrollPercent = scrollOffset/moveArticleTitleUpwards.scrollHeight || 0;
			
			
			moveArticleTitleUpwards.move();
			
			requestAnimationFrame(moveArticleTitleUpwards.loop);
		}
	};

	moveArticleTitleUpwards.init();
});





