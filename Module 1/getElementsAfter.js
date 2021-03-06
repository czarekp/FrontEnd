/*
Instructions:
Write a function called "getElementsAfter".

Given an array and an index, "getElementsAfter" returns a new array with all the elements after (but not including) the given index.

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']

Starter Code :
function getElementsAfter(array, n) {
  // your code here
}
*/

function getElementsAfter(array, n) {
	return array.slice(n+1, array.length);
}