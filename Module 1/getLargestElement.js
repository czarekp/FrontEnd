/*
Instructions:
Write a function called "getLargestElement".

Given an array, "getLargestElement" returns the largest number in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;

Starter Code :
function getLargestElement(arr) {
  // your code here
}
*/

function getLargestElement(arr) {
	let largest = 0;
	
	for(let i = 0; i < arr.length; i++){
		if(i === 0){
			largest = arr[i]
		} else {
			if(arr[i] > largest){
				largest = arr[i];
			}
		}
	}
	
	return largest;
}
