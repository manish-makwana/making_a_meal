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



// ASYNC

async function make_soup_async(ingredient) {
	let soup = await make_soup(ingredient);
	return soup;
}

async function set_table_async(diner) {
	let setting_info = await set_table(diner);
	return setting_info;
}

async function provide_meal_async() {
    console.log("Async/await style result:");
    start = Date.now();
    console.log("Time: " + (Date.now() - start) + " ms");

	let [cooked_food, setting_info] = await Promise.all([
		make_soup_async('potatoes'),
		set_table_async('Manish')
    ]);

    console.log("Serving...");
    console.log(setting_info + ". " + cooked_food + " is served!");

    console.log("Time: " + (Date.now() - start) + " ms");
}

provide_meal_async();