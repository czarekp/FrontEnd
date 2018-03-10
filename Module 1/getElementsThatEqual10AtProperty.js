/*
Instructions:
Write a function called "getElementsThatEqual10AtProperty".

Given an object and a key, "getElementsThatEqual10AtProperty" returns an array containing all the elements of the array located at the given key that are equal to ten.

Notes:
* If the array is empty, it should return an empty array.
* If the array contains no elements equal to 10, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]

Starter Code :
function getElementsThatEqual10AtProperty(obj, key) {
  // your code here
}
*/

function getElementsThatEqual10AtProperty(obj, key) {
	const prop = obj[key];
	let newArr = [];
	const isArrayEmpty = (prop === undefined || prop.length === 0);
	const isNotAnArray = !Array.isArray(prop);
	const noPropertyAtTheKey = !obj.hasOwnProperty(key);
	
	if(!(isArrayEmpty || isNotAnArray || noPropertyAtTheKey)){
		for(let i = 0; i < prop.length; i++){
			if(prop[i] === 10){
				newArr.push(prop[i]);
			}
		}
	}
	
	return newArr;
}