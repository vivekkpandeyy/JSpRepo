// Define the menu items for each section
const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// --- Breakfast Menu Population (using map method) ---
// Use the map() method to transform each item in the breakfastMenu array
// into an HTML paragraph string. Each item will be formatted as "Item X: [Item Name]".
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => {
    // Return an HTML paragraph tag for each menu item, including its index (starting from 1)
    return `<p>Item ${index + 1}: ${item}</p>`;
}).join(''); // Join all the generated HTML strings into one single string

// Dynamically update the 'breakfastMenuItems' div in the HTML
// with the generated HTML string, displaying the breakfast menu items.
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// Display the total number of items in the breakfast menu
document.getElementById('breakfastTotalItems').innerHTML = `Total items: ${breakfastMenu.length}`;


// --- Main Course Menu Population (using forEach method) ---
// Initialize an empty string to accumulate the HTML for main course items.
let mainCourseItem = '';
// Use the forEach() method to iterate over each item in the mainCourseMenu array.
// For each item, append its formatted HTML string to the 'mainCourseItem' variable.
mainCourseMenu.forEach((item, index) => {
    // Concatenate the HTML string for the current item.
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});

// Dynamically update the 'maincourseMenuItems' div in the HTML
// with the accumulated HTML string, displaying the main course menu items.
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// Display the total number of items in the main course menu
document.getElementById('maincourseTotalItems').innerHTML = `Total items: ${mainCourseMenu.length}`;


// --- Dessert Menu Population (using for loop) ---
// Initialize an empty string to accumulate the HTML for dessert items.
let dessertItem = '';
// Use a traditional for loop to iterate through the dessertMenu array.
// The loop runs from index 0 up to (but not including) the array's length.
for (let i = 0; i < dessertMenu.length; i++) {
    // For each iteration, append the formatted HTML string of the current
    // dessert item to the 'dessertItem' variable.
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}

// Dynamically update the 'dessertMenuItems' div in the HTML
// with the accumulated HTML string, displaying the dessert menu items.
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

// Display the total number of items in the dessert menu
document.getElementById('dessertTotalItems').innerHTML = `Total items: ${dessertMenu.length}`;
