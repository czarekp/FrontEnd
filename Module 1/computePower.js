/*
Instructions:
Write a function called "computePower".

Given a number and an exponent, "computePower" returns the given number, raised to the given exponent. 

var output = computePower(2, 3);
console.log(output); // --> 8

Starter Code :
function computePower(num, exponent) {
  // your code here
}
*/

function computePower(num, exponent) {
	let poweredNum = 1;
	for(let i = 0; i < exponent; i++) {
		poweredNum *= num;
	}
	return poweredNum;
}