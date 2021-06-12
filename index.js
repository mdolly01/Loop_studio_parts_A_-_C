input = require('readline-sync');
//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetable = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessert = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];
let pantry = [protein, grains, vegetable, beverage, dessert]
let astronautNum = input.question("Enter meal count: ")

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.

for(let i = 0; i < 6; i++) {
  let meal = [protein[i], grains[i], vegetable[i], beverage[i], dessert[i]];
}


//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.
while(astronautNum > 6 || astronautNum < 0) {
  astronautNum = input.question("Enter meal count: ")
  console.log(astronautNum)
}

//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”
let i = 0;
while (i < astronautNum) {
  let output = `Meal: ${pantry[0][i]}, ${pantry[1][i]}, ${pantry[2][i]}, ${pantry[3][i]}, ${pantry[4][i]}`
  console.log(output)
  if (output.includes("kale")) {
    console.log("Don’t worry, you can have double chocolate tomorrow.")
  }
  console.log("\n")
  i++;
}