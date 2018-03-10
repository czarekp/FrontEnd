/*
Instructions:
Write a function called "getLengthOfShortestElement".

Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3

Starter Code :
function getLengthOfShortestElement(arr) {
  // your code here
}
*/

function getLengthOfShortestElement(arr) {
	let temp = 0;
	
	for(let i = 0; i < arr.length; i++){
		if(i === 0) {
			temp = arr[i].length;
		} else {
			if(arr[i].length < temp){
				temp = arr[i].length;
			}
		}
	}
	
	return temp;
}