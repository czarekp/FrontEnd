/*
Instructions:
Write a function called "computeProductOfAllElements".

Given an array of numbers, "computeProductOfAllElements" returns the products of all the elements in the given array.

Notes:
* If given array is empty, it should return 0.

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60

Starter Code :
function computeProductOfAllElements(arr) {
  // your code here
}
*/

function computeProductOfAllElements(arr) {
	let product;
	
	if(arr === undefined || arr.length === 0){
		product = 0;
	} else {
		product = 1;
		for(let i = 0; i < arr.length; i++){
			product *= arr[i];
		}
	}
	
	return product;
}