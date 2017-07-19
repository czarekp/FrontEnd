/*
Instructions:
Write a function called "getLargestNumberAmongMixedElements". 

Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

Notes:
* The array might contain values of a type other than numbers.
* If the array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5

Starter Code :
function getLargestNumberAmongMixedElements(arr) {
  // your code here
}
*/

function getLargestNumberAmongMixedElements(arr) { 
	let largestNumber = 0;
	const isArrayEmpty = (arr === undefined || arr.length === 0);
	
	for(let i = 0; i < arr.length; i++) {
		if(typeof arr[i] === typeof 12){
			if(largestNumber === 0 || arr[i] > largestNumber){
				largestNumber = arr[i];
			}      
		}
	}
	
	return largestNumber;
}
