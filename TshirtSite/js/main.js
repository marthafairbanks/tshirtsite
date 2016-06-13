var total = 0;

//arrays for the tshirt objects
var blueTshirt = {
	color: 'blue',
	price: 29.00,
	size: 'small',
	title: 'Save my Trees',
	dateadded: null
}

var pinkTshirt = {
	color: 'pink',
	price: 19.00,
	size: 'medium',
	title: 'Nature Lover',
	dateadded: null
}
var orangeTshirt = {
	color: 'orange',
	price: 39.00,
	size: 'large',
	title: 'Forest Walk',
	dateadded: null	
}

//empty array for our cart
var cart=[];

// Keeps track of our items in the cart
var isBlueInCart = false;
var isPinkInCart = false;
var isOrangeInCart = false;


// Gets the HTML elements for our subtotal and total boxes
var subtotalBox = document.getElementById('subtotal');
var totalBox = document.getElementById('total');


// Gets the HTML elements for our boxes
var blueCart = document.getElementById('blueCart');
var pinkCart = document.getElementById('pinkCart');
var orangeCart = document.getElementById('orangeCart');

// What happens after a user clicks the add to cart button
function addToCart(color){

	if(color==='blue' && isBlueInCart === false){
		cart.push(blueTshirt);
		total += blueTshirt.price;
		isBlueInCart = true;
		blueCart.className = "icon five active subbox";
		blueTshirt.dateadded = Date();
	}
	else if(color==='blue' && isBlueInCart === true){
		var arrayLocation = cart.indexOf(blueTshirt);
		cart.splice(arrayLocation,1);
		total -= blueTshirt.price;
		isBlueInCart = false;
		blueCart.className = "icon five subbox";
	}

	else if(color==='pink' && isPinkInCart === false){
		cart.push(pinkTshirt);
		total += pinkTshirt.price;
		isPinkInCart = true;
		pinkCart.className = "icon five active subbox";
		pinkTshirt.dateadded = Date();
	}
	else if(color==='pink' && isPinkInCart === true){
		var arrayLocation = cart.indexOf(pinkTshirt);
		cart.splice(arrayLocation,1);		
		total -= pinkTshirt.price;
		isPinkInCart = false;
		pinkCart.className = "icon five subbox";
	}
	else if(color==='orange' && isOrangeInCart === false){
		cart.push(orangeTshirt);
		total += orangeTshirt.price;
		isOrangeInCart = true;
		orangeCart.className = "icon five active subbox";
		orangeTshirt.dateadded = Date();
	}
	else if(color==='orange' && isOrangeInCart === true){
		var arrayLocation = cart.indexOf(orangeTshirt);
		cart.splice(arrayLocation,1);	
		total -= orangeTshirt.price;
		isOrangeInCart = false;
		orangeCart.className = "icon five subbox";
	}


	var cartHTML = "";

	cart.forEach(function(tShirt){
		var itemString = "<sup><b>X</b></sup>" + "&nbsp;&nbsp; " + tShirt.dateadded + " <br> " + "<i>" + tShirt.title +"</i>" +" | "+ tShirt.color  + " | "+ tShirt.size +" | "+ "$"+ tShirt.price;
		cartHTML+= itemString  + "<hr>";
	});


	itemDetails.innerHTML =  cartHTML;
	subtotalBox.innerHTML = total;
	var finalTotal = calculateFinalTotal();
	totalBox.innerHTML = finalTotal.toFixed(2);

}


// CalculateFinalTotal
function calculateFinalTotal() {
	return (total*.065)+total;
}

