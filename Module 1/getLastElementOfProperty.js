/*
Instructions:
Write a function called "getLastElementOfProperty".

Given an object and a key, "getLastElementOfProperty" returns the last element of an array located at the given key.

Notes:
* If the array is empty, it should return undefined.
* if the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5

Starter Code :
function getLastElementOfProperty(obj, key) {
  // your code here
}
*/

function getLastElementOfProperty(obj, key) {
	const isNotAnArray = !Array.isArray(obj[key]);
	const isArrayEmpty = (obj[key] === []);
	const noPropertyAtTheKey = !obj.hasOwnProperty(key);
	
	if(isArrayEmpty || isNotAnArray || noPropertyAtTheKey){
		return undefined;
	} else {
		return obj[key][obj[key].length-1];
	}
}