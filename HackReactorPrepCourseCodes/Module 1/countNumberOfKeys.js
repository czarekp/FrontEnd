/*
Instructions:
Write a function called "countNumberOfKeys".

Given an object, "countNumberOfKeys" returns how many properties the given object has.

var obj = {
  a: 1,
  b: 2,
  c: 3
};
var output = countNumberOfKeys(obj);
console.log(output); // --> 3

Starter Code :
function countNumberOfKeys(obj) {
  // your code here
}
*/

function countNumberOfKeys(obj) {
	let numberOfKeys = 0;
	
	Object.keys(obj).forEach(function(key){
		numberOfKeys++;
	});
	
	return numberOfKeys;
}