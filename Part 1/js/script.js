$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
	  items: 2,
	  nav: true,
	  navElement: 'img src="_assets/icons/arrow-left-circle.svg"',
	  responsive : {
	      // breakpoint from 0 up
	      0 : {
	          items: 1,
	          dots: true
	      },
	      // breakpoint from 768 up
	      768 : {
	          items: 2,
	          dots: false
	      }
	  }
	});
	const innerWidth = window.innerWidth;
	console.log(innerWidth);
	const prevButton = document.querySelector(".owl-prev");
	const nextButton = document.querySelector(".owl-next");
	const navWrapper = document.querySelector(".owl-nav");
	nextButton.setAttribute("src", "_assets/icons/arrow-right-circle.svg");
	prevButton.classList.remove("disabled");
	nextButton.classList.remove("disabled");
	navWrapper.classList.remove("disabled");
});