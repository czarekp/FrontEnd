/*
Instructions:
Write a function called "getElementOfArrayProperty".

Given an object, a key, and a numerical index, "getElementOfArrayProperty" returns the value of the element at the given index of the array located within the given object at the given key.

Notes:
* If the array is empty, it should return undefined.
* If the given index is out of range of the array located at the given key, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined. 

var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'

Starter Code :
function getElementOfArrayProperty(obj, key, index) {
  // your code here
}
*/

function getElementOfArrayProperty(obj, key, index) {
	const isArrayEmpty = (obj[key] === undefined || obj[key].length === 0);
	const isNotAnArray = !Array.isArray(obj[key]);
	const noPropertyAtTheKey = !obj.hasOwnProperty(key);
	
	if(!(isArrayEmpty || isNotAnArray || noPropertyAtTheKey)){
		if(index < obj[key].length){
			for(let i = 0; i < obj[key].length; i++){
				if(i === index){
					return obj[key][i];
				}
			}
		}
	} else {
		return undefined;
	}
}