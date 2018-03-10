/*
Instructions:
Write a function called "computeAverageOfNumbers".

Given an array of numbers, "computeAverageOfNumbers" returns their average. 

Notes:
* If given an empty array, it should return 0.

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3

Starter Code :
function computeAverageOfNumbers(nums) {
  // your code here
}
*/

function computeAverageOfNumbers(nums) {
	if(nums.length === 0) {
		return 0;
	} else {
		let sum = 0;
		
		for(let i = 0; i < nums.length; i++){
			sum += nums[i];
		}
		
		return sum / nums.length;
	}
}