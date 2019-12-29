// Setup/helper functions

// Synchronous wait to simulate a long action
function wait(ms) {
	var start = Date.now(), now = start;
	while (now - start < ms) {
		now = Date.now();
	}
}

function make_soup(ingredient) {
	console.log("Cooking...");
	wait(1000);
	var soup = "Cooked " + ingredient;
	return soup;
}

function set_table(diner) {
	console.log("Setting the table...");
	wait(1000);
	var place_set = "Table set for " + diner;
	return place_set;
}

function serve_food(setting_info, food) {
	console.log("Serving the table...");
	wait(1000);
	var serving = setting_info + ". " + food + " is served!";
	return serving;
}



// SYNCHRONOUS

function provide_meal_sync(ingredient, diner) {
	var cooked_food, setting_info, served_food, start;
	start = Date.now();
	console.log("Time: " + (Date.now() - start) + " ms");
	cooked_food = make_soup(ingredient);
	setting_info = set_table(diner);
	served_food = serve_food(setting_info, cooked_food);
	console.log("Time: " + (Date.now() - start) + " ms");
	return served_food;
}

console.log("Synchronous style result:");
console.log(
	provide_meal_sync('potatoes', 'Manish'));