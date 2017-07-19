/*
Instructions:
Write a function called "getLongestElement".

Given an array, "getLongestElement" returns the longest string in the given array.

Notes:
* If there are ties, it returns the first element to appear.
* If the array is empty, it should return an empty string.

var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'

Starter Code :
function getLongestElement(arr) {
  // your code here
}
*/

function getLongestElement(arr) {
	let longestElement = '';
	
	for(let i = 0; i < arr.length; i++) {
		if(arr[i].length > longestElement.length){
			longestElement = arr[i];
		}
	}
	
	return longestElement;
}