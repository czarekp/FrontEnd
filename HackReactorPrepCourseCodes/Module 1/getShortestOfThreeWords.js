/*
Instructions:
Write a function called "findShortestOfThreeWords".

Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.

Notes:
* If there are ties, it should return the first word in the parameters list.

var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'

Starter Code :
function findShortestOfThreeWords(word1, word2, word3) {
  // your code here
}
*/

function findShortestOfThreeWords(word1, word2, word3) {
	if(word1.length <= word2.length){
		return (word1.length <= word3.length) ? word1 : word3;
	} else if(word2.length <= word3.length){
		return word2;
	} else {
		return word3;
	}
}