/*
Instructions:
Write a function called "countAllCharacters".

Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

Notes:
* If given an empty string, countAllCharacters should return an empty object.

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}

Starter Code :
function countAllCharacters(str) {
  // your code here
}
*/

function countAllCharacters(str) {
	let obj = {};
	
	for (let i = 0; i < str.length; i++) {
		obj[str[i]] = (obj[str[i]] || 0) + 1;   
	}
	
	return obj;
}