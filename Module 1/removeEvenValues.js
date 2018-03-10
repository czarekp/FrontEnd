/*
Instructions:
Write a function called "removeEvenValues".

Given any object, "removeEvenValues" removes any properties whose values are even numbers.

Do this in place and return the original object, do not construct a cloned object that omits the properties.

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }

Note: Remember, we are talking about any object, not just the one shown in the sample.

Starter Code :
function removeEvenValues(obj) {
  // your code here
}
*/

function removeEvenValues(obj) {
	Object.keys(obj).forEach(function(key){
		if(obj[key] % 2 === 0){
			delete obj[key];
		}
	});
}