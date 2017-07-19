/*
Instructions:
Write a function called "squareElements".

Given a array of numbers, "squareElements" should return a new array where each element is the square of the element of the given array.

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]

Starter Code :
function squareElements(arr) {
  // your code here
}
*/

function squareElements(arr) {
	let newArr = [];
	
	for(let i = 0; i < arr.length; i++){
		newArr.push(arr[i] * arr[i]);
	}
	
	return newArr;
}