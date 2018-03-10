/*
Instructions:
Write a function called "findShortestElement".

Given an array, "findShortestElement" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear.
* If the given array is empty, it should return an empty string.

var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'

Starter Code :
function findShortestElement(arr) {
  // your code here
}
*/

function findShortestElement(arr) {
	let shortestElement = '';
	
	for(let i = 0; i < arr.length; i++){
		if(i === 0){
			shortestElement = arr[i];
		} else {
			if(arr[i].length < shortestElement.length){
				shortestElement = arr[i];
			}
		}
	}
	
	return shortestElement;
}