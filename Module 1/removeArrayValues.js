/*
Instructions:
Write a function called "removeArrayValues".

Given an object, "removeArrayValues" removes any properties whose values are arrays.

var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }

Starter Code :
function removeArrayValues(obj) {
  // your code here
}
*/

function removeArrayValues(obj) {
	Object.keys(obj).forEach(function(key){
		if(Array.isArray(obj[key])){
			delete obj[key];
		}
	});
}