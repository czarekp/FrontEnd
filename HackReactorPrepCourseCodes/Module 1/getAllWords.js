/*
Instructions:
Write a function called "getAllWords".

Given a sentence, "getAllWords" returns an array containing every word in the sentence. 

Notes:
* If given an empty string, it should return an empty array.

var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']

Starter Code :
function getAllWords(str) {
  // your code here
}
*/

function getAllWords(str) {
	if(str === '') {
		return [];
	}	
	
	let allWords = [''];
	let j = 0;
	for(let i = 0; i < str.length; i++) {
		if(str[i] !== ' ') {
			allWords[j] += str[i];
		} else {
			j++;
			allWords[j] = '';
		}
	}
	return allWords;
}