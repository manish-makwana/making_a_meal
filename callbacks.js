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

// CALLBACK

var cooked_food = null, setting_info = null, served_food = null,
	soup_ready = false, table_ready = false;

function make_soup_cb(ingredient, serving_callback) {
	cooked_food = make_soup(ingredient);
	soup_ready = true;
	serving_callback();
}

function set_table_cb(diner, serving_callback) {
	setting_info = set_table(diner);
	table_ready = true;
	serving_callback();
}

function ready_to_serve() {
	if (soup_ready && table_ready) {
		served_food = serve_food(setting_info, cooked_food);
		console.log(served_food);
		console.log("Time: " + (Date.now() - start) + " ms");
	}
}

function provide_meal_callbacks() {
    start = Date.now();
    console.log("Time: " + (Date.now() - start) + " ms");

    make_soup_cb('potatoes', ready_to_serve);
    set_table_cb('Manish', ready_to_serve);
}

console.log('Callback style result:');
provide_meal_callbacks();