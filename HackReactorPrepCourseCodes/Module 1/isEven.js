/*
Instructions:
Write a function called "isEven".

Given a number, "isEven" returns whether it is even.

var output = isEven(11);
console.log(output); // --> false

Starter Code :
function isEven(num) {
  // your code here
}
*/

function isEven(num) {
	return (num % 2 === 0) ? true : false;
}
