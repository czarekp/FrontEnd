/*
Instructions:
Given a word, "isOddLength" returns whether the length of the given word is odd.

var output = isOddLength('special');
console.log(output); // --> true

Starter Code :
function isOddLength(word) {
  // your code here
}
*/

function isOddLength(word) {
	return (word.length % 2 !== 0) ? true : false;
}
