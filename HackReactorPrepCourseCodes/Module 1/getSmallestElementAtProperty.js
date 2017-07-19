/*
Instructions:
Write a function called "getSmallestElementAtProperty".

Given an object and a key, "getSmallestElementAtProperty" returns the smallest element in the array located at the given key. 

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined. 
* If there is no property at the key, it should return undefined.

var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1

Starter Code :
function getSmallestElementAtProperty(obj, key) {
  // your code here
}
*/

function getSmallestElementAtProperty(obj, key) {
	const prop = obj[key];
	const isArrayEmpty = (prop === undefined || prop.length === 0);
	const isNotAnArray = !Array.isArray(prop);
	const noPropertyAtTheKey = !obj.hasOwnProperty(key);
	let temp;
	
	if(!(isArrayEmpty || isNotAnArray || noPropertyAtTheKey)) {
		for(let i = 0; i < prop.length; i++){
			if(i === 0) {
				temp = prop[i];
			} else {
				if(prop[i] < temp){
					temp = prop[i];
				}
			}
		}
	}
	
	return temp;
}