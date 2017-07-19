/*
Instructions:
Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in th given  string. 

Notes:
* If given an empty string, it should return an empty object.

var output = countWords('ask a bunch get a bunch'); 
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}

Starter Code : 
function countWords(str) {
  // your code here
}
*/

function countWords(str) {
	if(str === ''){
		return {};
	}
	
	let words = [''];
	let obj = {};
	let j = 0;

	for (let i = 0; i < str.length; i++){
		if(str[i] !== ' ') {
			words[j] += str[i];
		} else {
			j++;
			words[j] = '';
		}
	}
	
	for(let i = 0; i < words.length; i++) {
		obj[words[i]] = (obj[words[i]] || 0) + 1;
	}
	
	return obj;
}