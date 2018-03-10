/*
Instructions:
Write a function called "removeOddValues".

Given an object, "removeOddValues" removes any properties whose valuse are odd numbers.

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }

Starter Code :
function removeOddValues(obj) {
  // your code here
}
*/

function removeOddValues(obj) {
	Object.keys(obj).forEach(function(key){
		if(obj[key] % 2 !== 0){
			delete obj[key];
		}
	});
}