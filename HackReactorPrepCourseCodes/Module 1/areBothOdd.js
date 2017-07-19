/*
Instructions:
Write a function called "areBothOdd".

Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd.

var output = areBothOdd(1, 3);
console.log(output); // --> true

Starter Code :
function areBothOdd(num1, num2) {
  // your code here
}
*/

function areBothOdd(num1, num2) {
	return (num1 % 2 !== 0 && num2 % 2 !== 0) ? true : false;
}
