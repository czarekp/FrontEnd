/*
Instructions:
Write a function called "getProductOfAllElementsAtProperty".

Given an object and a key, "getProductOfAllElementsAtProperty" returns the product of all the elements in the array located at the given key. 

Notes:
* If the array is empty, it should return 0.
* If the property at the given key is not an array, it should return 0.
* If there is no property at the given key, it should return 0.

var obj = {
  key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24

Starter Code :
function getProductOfAllElementsAtProperty(obj, key) {
  // your code here
}
*/

function getProductOfAllElementsAtProperty(obj, key) {
	let product = 0;
	const isArrayEmpty = (obj[key] === undefined || obj[key].length === 0);
	const isNotAnArray = !Array.isArray(obj[key]);
	const noPropertyAtTheKey = !obj.hasOwnProperty(key);
	
	if(!(isArrayEmpty || isNotAnArray || noPropertyAtTheKey)){
		product = 1;
		for(let i = 0; i < obj[key].length; i++){
			product *= obj[key][i];
		}
	}
	
	return product;
}