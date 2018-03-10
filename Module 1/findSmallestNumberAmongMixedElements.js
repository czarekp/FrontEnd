/*
Instructions:
Write a function called "findSmallestNumberAmongMixedElements".

Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4

Starter Code :
function findSmallestNumberAmongMixedElements(arr) {
  // your code here
}
*/

function findSmallestNumberAmongMixedElements(arr) {
	let smallestNumber = 0;
	const isArrayEmpty = (arr === undefined || arr.length === 0);
	
	for(let i = 0; i < arr.length; i++){
		if(typeof arr[i] === typeof 12){
			if(smallestNumber === 0 || arr[i] < smallestNumber){
				smallestNumber = arr[i];
			}
		}
	}
	
	return smallestNumber;
}