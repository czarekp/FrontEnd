/*
Instructions:
Write a function called "isEvenWithoutModulo".

Given a number, "isEvenWithoutModulo" returns whether it is even. 

Notes:
* It does so without using the modulo operator (%). 
* It should work for negative numbers and zero.

var output = isEvenWithoutModulo(8);
console.log(output); // --> true

Starter Code :
function isEvenWithoutModulo(num) {
  // your code here
}
*/

function isEvenWithoutModulo(num) {
	if(num === 0){
		return true;
	} else if (num > 0) {
		while(num >= 2){
			num -= 2;
		}
	} else {
		while(num <= -2){
			num += 2;
		}
	}
	
	return (num !== 0) ? false : true;
}