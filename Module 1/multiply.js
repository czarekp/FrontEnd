/*
Instructions:
Write a function called "multiply".

Given 2 numbers, "multiply" returns their product.

Notes:
* It should not use the multiply operator (*).\

var output = multiply(4, 7);
console.log(output); // --> 28

Starter Code :
function multiply(num1, num2) {
  // your code here
}
*/

function multiply(num1, num2) {
	let product = num1;
	
	if(num1 === 0 || num2 === 0){
		return 0;
	} else {
		for(let i = 1; i < Math.abs(num2); i++){
			product += num1;
		}
	}
	
	if(num2 < 0){
		product = -product;
	}
	
	return product;
}