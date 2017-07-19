/*
Instructions:
Write a function called "getSquaredElementsAtProperty".

Given an object and a key, "getSquaredElementsAtProperty" returns an array containing all the squared elements of the array located at the given key. 

Notes:
* If the array is empty, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [2, 1, 5]
};
var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]

Starter Code :
function getSquaredElementsAtProperty(obj, key) {
  // your code here
}
*/

function getSquaredElementsAtProperty(obj, key) {
	let newArr = [];
	const prop = obj[key];
	const isArrayEmpty = (prop === undefined || prop.length === 0);
	const isNotAnArray = !Array.isArray(prop);
	const noPropertyAtTheKey = !obj.hasOwnProperty(key);
	
	if(!(isArrayEmpty || isNotAnArray || noPropertyAtTheKey)){
		for(let i = 0; i < prop.length; i++){
			newArr.push(prop[i] * prop[i]);
		}
	}
	
	return newArr;
}