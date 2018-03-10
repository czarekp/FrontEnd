/*
Instructions:
Write a function called "computeAreaOfACircle".

Given the radius of a circle, "computeAreaOfACircle" returns its area.

var output = computeAreaOfACircle(4);
console.log(output); // --> 50.26548245743669

Reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI

Starter Code :
function computeAreaOfACircle(radius) {
  // your code here
}
*/

function computeAreaOfACircle(radius) {
	return Math.PI * radius * radius;
}