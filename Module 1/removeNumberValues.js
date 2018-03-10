/*
Instructions:
Write a function called "removeNumberValues".

Given an object, "removeNumberValues" removes any properties whose valuse are numbers.

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }

Starter Code :
function removeNumberValues(obj) {
  // your code here
}
*/

function removeNumberValues(obj) {
	Object.keys(obj).forEach(function(key){
		if(typeof obj[key] === typeof 1){
			delete obj[key];
		}
	});
}