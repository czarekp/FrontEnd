/*
Instructions:
Write a function called "getOddElementsAtProperty".

Given an object and a key, "getOddElementsAtProperty" returns an array containing all the odd elements of the array located at the given key. 

Notes:
* If the array is empty, it should return an empty array.
* If it contains no odd elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [1, 2, 3, 4, 5]
};
var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]

Starter Code :
function getOddElementsAtProperty(obj, key) {
  // your code here
}
*/

function getOddElementsAtProperty(obj, key) {
	let newArr = [];
	const prop = obj[key];
	const isArrayEmpty = (prop === undefined || prop.length === 0);
	const isNotAnArray = !Array.isArray(prop);
	const noPropertyAtTheKey = !obj.hasOwnProperty(key);
	
	if(!(isArrayEmpty || isNotAnArray || noPropertyAtTheKey)) {
		for(let i = 0; i < prop.length; i++) {
			if(prop[i] % 2 !== 0) {
				newArr.push(prop[i]);
			}
		}
	}
	
	return newArr;
}