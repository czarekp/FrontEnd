/*
Instructions:
Write a function called "findSmallestElement".

Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.

var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1

Starter Code :
function findSmallestElement(arr) {
  // your code here
}
*/

function findSmallestElement(arr) {
	let smallestElement = 0;
	
	for(let i = 0; i < arr.length; i++){
		if(i === 0){
			smallestElement = arr[i];
		} else {
			if(arr[i] < smallestElement){
				smallestElement = arr[i]; 
			}
		}
	}
	
	return smallestElement;
}