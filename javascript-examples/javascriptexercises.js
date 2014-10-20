//Create the needed variables: array, s for sum, p for product and i for counter in for loop
var array = [1, 2, 3, 4, 5, 6];
var s = 0;
var p = 1;
var i;

// Create a for loop that will traverse through the data and either add and multiply the numbers
//together. Make sure each is assigned to the correct variable name specified above.
for (var i=0; i < array.length; i++) {
	s += array[i];
	p *= array[i];
	
}

//Print the results to the console.

console.log(p)
console.log(s)


