/*
Instructions:
Write a function called "sumDigits".

Given a number, "sumDigits" returns the sum of all its digits.

var output = sumDigits(1148);
console.log(output); // --> 14

If the number is negative, the first digit should count as negative.

var output = sumDigits(-316);
console.log(output); // --> 4

Notes:
* In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
* Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

Starter Code :
function sumDigits(num) {
  // your code here
}
*/

function sumDigits(num) {
	let str = num.toString();
	let sum = 0;
	
	for(let i = 0; i < str.length; i++){
		let digit;
		
		if(i === 0){
			if(str[i] === '-'){
				digit = Number('-' + str[i+1]);  
				i++;
			} else {
				digit = Number(str[i]);
			}
		} else {
			digit = Number(str[i]);
		}
		
		sum += digit;
 	}
  
	return sum;
}