/*
Instructions:
Write a function called "computeFactorialOfN".

Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial.

var output = computeFactorialOfN(3);
console.log(output); // --> 6

var output = computeFactorialOfN(4);
console.log(output); // --> 24

Starter Code :
function computeFactorialOfN(n) {
  // your code here
}
*/

function computeFactorialOfN(n) {
	for(let i = n; i > 0; i--){
		if(i === 1){
			return 1;
		} else {
			return i * computeFactorialOfN(i-1);
		}
	}
}