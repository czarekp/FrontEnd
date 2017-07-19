/*
Instructions:
Write a function called "getAllLetters".

Given a word, "getAllLetters" returns an array containing every character in the word. 

Notes:
* If given an empty string, it should return an empty array.

var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']

Starter Code :
function getAllLetters(str) {
  // your code here
}
*/

function getAllLetters(str) {
	let allLetters = [];
	for(var i = 0; i < str.length; i++) {
		allLetters[i] = str[i];
	}
	return allLetters;
}