/*
Instructions:
Write a function called "repeatString".

Given a string and a number, "repeatString" returns the given string repeated the given number of times.

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'

Starter Code :
function repeatString(string, num) {
  // your code here
}
*/

function repeatString(string, num) {
	let str = '';
	
	for(let i = 0; i < num; i++){
		str += string;
	}
	
	return str;
}