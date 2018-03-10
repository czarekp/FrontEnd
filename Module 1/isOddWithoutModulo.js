/*
Instructions:
Write a function called "isOddWithoutModulo".

Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

Note:
* It does so without using the modulo operator (%). 
* It should work for negative numbers and zero.

var output = isOddWithoutModulo(17);
console.log(output); // --> true

Starter Code :
function isOddWithoutModulo(num) {
  // your code here
}
*/

function isOddWithoutModulo(num) {
	if(num === 0){
		return false;
	} else if(num > 0) {
		while(num >= 2){
			num -= 2;
		}
	} else {
		while(num <= -2) {
			num += 2;
		}
	}
	
	return (num === 0) ? false : true;
}