





$(document).ready(function() {
	const coverSlideshow = {
		
		init: function() {
			coverSlideshow.changeColor();
			coverSlideshow.startSlideshow();
			

		},
		numberOfImages: 12,
		imageCount: 1,
		startSlideshow: function() {
			$('header').fadeOut(2000);
			setTimeout(function() {
				$('header').css('background-image', 'url(\'img/image' + coverSlideshow.imageCount + '.jpg\')'); 
			}, 2000);
			$('header').fadeIn(2000);
			
			coverSlideshow.imageCount = coverSlideshow.imageCount - 1;
			if (coverSlideshow.imageCount === 0) {
				coverSlideshow.imageCount = coverSlideshow.numberOfImages;
			}

			setTimeout(coverSlideshow.startSlideshow, 20000);


			console.log('One image should appear');
			console.log('777777');

		},
		changeColor: function() {
			$('.header-name').on('click', function () {
				$(this).css('color', 'yellow');
			});
		}
	};

	coverSlideshow.init();

	const moveArticleUpwards = {
		init: function() {
			moveArticleUpwards.moveUpwards();
		},
		moveUpwards: function () {
			$('.title-container')
		},
		autoScrollTo: function(el) {
			let currentY = window.pageYOffset;
			let targetY = document.getElementById(el).offsetTop;
			let bodyHeight = document.body.offsetHeight;
			let yPos = currentY + window.innerHeight;

		}
	};
});





