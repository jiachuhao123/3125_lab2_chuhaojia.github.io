// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Milk",
		lactose_intolerance: true,
		nut_allergies: false,
		organic: true,
		price: 4
	},
	{
		name: "Cake",
		lactose_intolerance: true,
		nut_allergies: true,
		organic: false,
		price: 11
	},
	{
		name: "Peanuts",
		lactose_intolerance: false,
		nut_allergies: true,
		organic: true,
		price: 3
	},
	{
		name: "Almonds",
		lactose_intolerance: false,
		nut_allergies: true,
		organic: true,
		price: 2
	},
	{
		name: "Strawberries",
		lactose_intolerance: false,
		nut_allergies: false,
		organic: true,
		price: 4
	},
	{
		name: "Apples",
		lactose_intolerance: false,
		nut_allergies: false,
		organic: true,
		price: 3
	},
	{
		name: "Bread",
		lactose_intolerance: false,
		nut_allergies: true,
		organic: false,
		price: 2.35
	},
	{
		name: "Tomato",
		lactose_intolerance: false,
		nut_allergies: false,
		organic: true,
		price: 1
	},
	{
		name: "Beef",
		lactose_intolerance: false,
		nut_allergies: false,
		organic: false,
		price: 10
	},
	{
		name: "Lamb",
		lactose_intolerance: false,
		nut_allergies: false,
		organic: false,
		price: 11
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose_intolerance") && (prods[i].lactose_intolerance == false)){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if((restriction == "lactose_intolerance_and_organic") && (prods[i].lactose_intolerance == false) && (prods[i].organic==true)){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergies") && (prods[i].nut_allergies == false)){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergies_and_organic") && (prods[i].nut_allergies == false) && (prods[i].organic==true)){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "lactose_intolerance_and_nut_allergies") && ((prods[i].lactose_intolerance == false) && (prods[i].nut_allergies == false))){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "lactose_intolerance_and_nut_allergies_and_organic") && ((prods[i].lactose_intolerance == false) && (prods[i].nut_allergies == false) && (prods[i].organic==true))){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None_and_organic")&&(prods[i].organic==true)){
			product_names.push("$"+prods[i].price+" "+prods[i].name);
		}
	}
	product_names.sort();
	return product_names;
}


// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf("$"+products[i].price+" "+products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}