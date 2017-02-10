#Web Developer Prototype Assessment

I wanted to do a quick synopsis of my approach to the challenge laid out in this assessment.

###Part 1

####Tech Used
HTML5
CSS3
Bootstrap 4 for Grid Framework
Javascript
Owl Carousel Plugin

####Synopsis
I focused on attention to detail and responsiveness for this task.  I tried not to overcomplicate things and just create a clean, identical product.  Challenges here included implementing a carousel with the styling customization detailed in the specs.  I chose to use owl carousel as it seemed like a stable option.  I ended up having to implement a lot of overrides to place the navigation buttons in their proper spots and create the different format for the mobile version.

```
.owl-prev {
  position: absolute;
  top: 18%;
  left: -45px;
}
.owl-next {
  position: absolute;
  top: 18%;
  right: -45px;
}
/* need to manually write css for the dots as there is a bug with owl carousel */
.owl-dot {
    display: inline-block;
}
.owl-dot span {
    width: 8px;
    height: 8px;
    background-color: #111;
    border-radius: 100px;
    display: inline-block;
    margin: 20px 5px 0px 0px;
    opacity: 0.3;
}
.owl-dot.active span {
    opacity: 0.5;
}

/* media query for when the screen breaks to stacked grids */
@media only screen and (max-width: 754px) {
    .right-content-wrapper {
      border: 1px #e5e5e5 solid;
      padding: 15px 15px 5px 15px;
      width: 100%;
      margin-bottom: 20px;
    }
    .owl-carousel {
      margin: 0 auto;
      text-align: center;
      width: 100%;
    }
    .owl-item {
        max-width: 100%;
    }
    .owl-item:first-child {
        margin-right: auto;
    }
    .owl-prev {
        position: absolute;
        top: 48%;
        left: 0px;
    }
    .owl-next {
        position: absolute;
        top: 48%;
        right: 0px;
    }
}
```css
This makes up most of the CSS where I had to directly override the native owl carousel classes in order to get the look I was going for.  It turns out the dots indicator on the mobile version was completely broken for owl carousel and I had to create the css for it.

```
$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
	  items: 2,
	  nav: true,
	  navElement: 'img src="_assets/icons/arrow-left-circle.svg"',
	  responsive : {
	      // breakpoint from 0 up
	      0 : {
	          items: 1,
	          pagination: true
	      },
	      // breakpoint from 768 up
	      768 : {
	          items: 2,
	          pagination: false
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
```javascript
As you can see I had to override and remove some of the automatic class designations to make visible the nav buttons using javascript.

###Part 2

####Tech Used
HTML
CSS
Bootstrap 4
Angular 1.6.1
Javascript

####Synopsis
For part 2 I also wanted clean look that was naturally responsive. I gave a simple navigation bar at the top which I made fixed so that you always had your total visible as you shopped.  I set three breakpoints using the grid structure in bootstrap so it looks natural as the page resizes.  I used to angular to handle most of the functionality of the page.  I employeed filters to display the currency properly.  I made the population of the products dynamic so that the JSON object is the only thing that needs to change if you want to add or delete items or use in a different category. I used some string manipulation to populate the location of each image rather than manipulate the JSON object itself so that consistancy would be maintained.
```
	$scope.concatPath = function (param) {
		const newPath = "_assets/" + param;
		return newPath;
	}
```javascript
I also created a function that handled all of the functionality of the add to cart button under each item.  I removed the DOM element upon click as specified in the directions and added the price to the total for the shopping cart. I had to employee correct targeting of the dynamically created elements so I identified the proper child by index found in the object. I hard-set the new total each time to 2 decimal places as there were rounding errors when it initially added the total.
```
	$scope.updateCart = function (item) {
		cartTotalVar += Number(item.price);
		priceVariable.innerHTML = `Total: $${cartTotalVar.toFixed(2)}`;
    // remove the item from the dom after the total has been added to the cart
    parent.children[this.$index].remove();
	}
```javascript


####Further features to add
Could use an idicator if you want to buy multiples of each item.  Also could use a modal that populates all current selections in the cart and the total of each.  This could be employeed in the right in the navbar. 