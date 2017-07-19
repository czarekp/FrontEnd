/*
Instructions:
Write a function called "isOdd".

Given a number, "isOdd" returns whether the given number is odd.

var output = isOdd(9);
console.log(output); // --> true

Starter Code :
function isOdd(num) {
  // your code here
}
*/

function isOdd(num) {
	return (num % 2 !== 0) ? true : false;
}
