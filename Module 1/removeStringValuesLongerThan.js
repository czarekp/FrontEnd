/*
Instructions:
Write a function called "removeStringValuesLongerThan".

Given an number and an object, "removeStringValuesLongerThan" removes any properties on the given object whose values are strings longer than the given number.

var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }

Starter Code :
function removeStringValuesLongerThan(num, obj) {
  // your code here
}
*/

function removeStringValuesLongerThan(num, obj) {
	Object.keys(obj).forEach(function(key){
		if(obj[key].length > num){
			delete obj[key];
		}
	});
}