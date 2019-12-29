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



// PROMISE

function make_soup_promise(ingredient) {
	var promise = new Promise((resolve, reject) => {
		resolve(make_soup(ingredient));
	});
	return promise;
}

function set_table_promise(diner) {
	var promise = new Promise((resolve, reject) => {
		resolve(set_table(diner));
	});
	return promise;
}

function provide_meal_promises() {
    start = Date.now();
    console.log("Time: " + (Date.now() - start) + " ms");

    var cooked_food, setting_info;
    cooked_food = make_soup_promise('potatoes');
    setting_info = set_table_promise('Manish');

    Promise.all([cooked_food, setting_info]).then(values => {
    	console.log("Serving the table...");
    	var served_food = values[1] + ". " + values[0] + " is served!";
    	console.log(served_food);
    	console.log("Time: " + (Date.now() - start) + " ms");
    });
}

console.log("Promise style result:");
provide_meal_promises();