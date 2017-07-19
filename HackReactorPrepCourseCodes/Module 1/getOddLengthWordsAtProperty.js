/*
Instructions:
Write a function called "getOddLengthWordsAtProperty".

Given an object and a key, "getOddLengthWordsAtProperty" returns an array containing all the odd length word elements of the array located at the given key. 

Notes:
* If the array is empty, it should return an empty array.
* If it contains no odd length elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the given key, it should return an empty array.

var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']

Starter Code :
function getOddLengthWordsAtProperty(obj, key) {
  // your code here
}
*/

function getOddLengthWordsAtProperty(obj, key) {
	const isArrayEmpty = (obj[key] === undefined || obj[key].length === 0);
	const isNotAnArray = !Array.isArray(obj[key]);
	const noPropertyAtTheKey = !obj.hasOwnProperty(key);
	let newArr = [];
	
	if(isArrayEmpty || isNotAnArray || noPropertyAtTheKey){
		return newArr;
	} else {
		for(let i = 0; i < obj[key].length; i++){
			if(obj[key][i].length % 2 !== 0) {
				newArr.push(obj[key][i]);
			}
		}
	}

	return newArr;
}

