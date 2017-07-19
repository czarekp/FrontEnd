/*
Instructions:
Write a function called "removeNumbersLessThan".

Given a number and an object, "removeNumbersLessThan" removes any properties whose values are numbers less than the given number.

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }


Starter Code :
function removeNumbersLessThan(num, obj) {
  // your code here
}
*/

function removeNumbersLessThan(num, obj) {
	Object.keys(obj).forEach(function(key){
		if(obj[key] < num){
			delete obj[key];
		}
	});
}