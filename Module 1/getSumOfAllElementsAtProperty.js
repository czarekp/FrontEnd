/*
Instructions:
Write a function called "getSumOfAllElementsAtProperty".

Given an object and a key, "getSumOfAllElementsAtProperty" returns the sum of all the elements in the array located at the given key. 

Notes:
* If the array is empty, it should return 0.
* If the property at the given key is not an array, it should return 0.
* If there is no property at the key, it should return 0.

var obj = {
  key: [4, 1, 8]
};
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13

Starter Code :
function getSumOfAllElementsAtProperty(obj, key) {
  // your code here
}
*/

function getSumOfAllElementsAtProperty(obj, key) {
	let sum = 0;
	const isArrayEmpty = (obj[key] === undefined || obj[key].length === 0);
	const isNotAnArray = !Array.isArray(obj[key]);
	const noPropertyAtTheKey = !obj.hasOwnProperty(key);
	
	if(!(isArrayEmpty || isNotAnArray || noPropertyAtTheKey)){
		for(let i = 0; i < obj[key].length; i++){
			sum += obj[key][i];
		}
	}
	
	return sum;
}