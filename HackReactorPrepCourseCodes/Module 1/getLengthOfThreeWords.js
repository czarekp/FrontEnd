/*
Instructions:
Write a function called "getLengthOfThreeWords".

Given 3 words, "getLengthOfThreeWords" returns the sum of their lengths.

var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14

Starter Code :
function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
}
*/

function getLengthOfThreeWords(word1, word2, word3) {
	return word1.length + word2.length + word3.length;
}