var app = angular.module("cartApp", []);
app.controller("cartController", function($scope) {
	this.itemsArray = storeItems.products;
	let cartTotalVar = 0.00;
	this.cartTotal = cartTotalVar;
	this.categoryTitle = storeItems.category;
	const priceVariable = document.querySelector('.cart-total-summary');
  // To target the parent element in our dynamically created list of elements
  const parent = document.querySelector('.parent');

  // this is a little string manipulation to properly set the path necessary for finding the image as the object does not specify the parent file. This could be hard-coded into the object property but this way you wouldn't have to manually update tons of items if you were given a huge object
	$scope.concatPath = function (param) {
		const newPath = "_assets/" + param;
		return newPath;
	}
  // this is the function run each time someone clicks an 'add to cart' button; handles all functionality for each product
	$scope.updateCart = function (item) {
		cartTotalVar += Number(item.price);
		priceVariable.innerHTML = `Total: $${cartTotalVar.toFixed(2)}`;
    // remove the item from the dom after the total has been added to the cart
    parent.children[this.$index].remove();
	}
});

const storeItems = {
  "productCount":"6",
  "category":"Clean Your Living Room",
  "products":[
    {
      "title":"Windex 26-fl oz Glass Cleaner",
      "price":"2.98",
      "image":"windex.jpg"
    },
    {
      "title":"Mr. Clean 4-Count Regular All-Purpose Cleaner",
      "price":"3.58",
      "image":"magic-eraser.jpg"
    },
    {
      "title":"method 28-fl oz Pink Grapefruit All-Purpose Cleaner",
      "price":"3.28",
      "image":"method-all-purpose.jpg"
    },
    {
      "title":"method Wood for Good Daily Clean 28-fl oz Wood Cleaner",
      "price":"5.98",
      "image":"method-wood.jpg"
    },
    {
      "title":"Old English Old English Scratch Cover Light Wood Furniture Polish",
      "price":"4.8",
      "image":"old-english.jpg"
    },
    {
      "title":"Swiffer Microfiber Telescoping Handle Dusting Wand",
      "price":"8.97",
      "image":"swiffer.jpg"
    }
  ]
};