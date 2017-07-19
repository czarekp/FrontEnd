/*
Instructions:
Write a function called "getStringLength".

Given a string, "getStringLength" returns the length of the given string.

Notes:
* Do NOT use any native 'length' methods.
* You might consider using 'substring' or 'slice' as alternatives.

var output = getStringLength('hello');
console.log(output); // --> 5

Starter Code :
function getStringLength(string) {
  // your code here
}
*/

function getStringLength(string) {
	for(var i = 0; string[i] !== undefined; i++){
		string.slice(0, 1);
	}
	
	return i;
}