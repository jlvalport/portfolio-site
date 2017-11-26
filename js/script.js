$(document).ready(function() {
	const coverSlideshow = {
		numberOfImages: 12,
		imageCount: 1,
		secondsWaitingBetweenImages: 5,
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
					$('header').css('background-image', 'url(\'img/image' + coverSlideshow.imageCount + '.jpg\')'); 
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

	const moveArticleUpwards = {
		init: function() {
			// $(window).detectScroll({
			// 	testMode: true,
			// 	targetPercent: 90,
			// 	position: 'top',
			// 	objectHeight: 350,
			// 	target: '#section-title'
			// });
		},
		moveUpwards: function () {
			$('.title-container').animate({ 
        		marginBottom: "+=250px",
			 }, 1000 );
		},
		autoScrollTo: function() {
			// let currentY = window.pageYOffset;
			// let targetY = document.getElementById(el).offsetTop;
			// let bodyHeight = document.body.offsetHeight;
			// let yPos = currentY + window.innerHeight;

		// 	$(window).scroll(function(){
				
		// 		// Change this to target a different percentage
		// 		var targetPercentage = 90;
			   
		// 		//Change this to set the height of your nav bar so it hides properly. If you have a box shadow you may have to adjust this number to be height + shadow distance
		// 		var titleHeight = 66;
			   
		// 		//Change this to the ID of the content you are trying to show.
		// 		var targetID = "#section-title";
				
		// 		//Window Math
		// 		var scrollTo = $(window).scrollTop(),
		// 		docHeight = $(document).height(),
		// 		windowHeight = $(window).height();
		// 		scrollPercent = (scrollTo / (docHeight-windowHeight)) * 100;
		// 		scrollPercent = scrollPercent.toFixed(1);
					
		// 		$('.content-works').push().last().html(<)

		// 		if(scrollPercent > targetPercentage) {
		// 			$(targetID).css({ 'color': blue });
		// 		}
				
		// 		if(scrollPercent < targetPercentage) {
		// 			$(targetID).css({ 'margin-top': 0 });
		// 		}
										
		// 	}).trigger('scroll');
		}
	};

	moveArticleUpwards.init();
});





