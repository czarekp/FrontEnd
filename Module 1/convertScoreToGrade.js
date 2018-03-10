/*
Instructions:
Write a function called "convertScoreToGrade".

Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.

Notes:
* (100 - 90) --> 'A'
* (89  - 80) --> 'B'
* (79  - 70) --> 'C'
* (69  - 60) --> 'D'
* (59  -  0) --> 'F'
* If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.

var output = convertScoreToGrade(91);
console.log(output); // --> 'A'

Starter Code :
function convertScoreToGrade(score) {
  // your code here
}
*/

function convertScoreToGrade(score) {
	if(score >= 0 && score <= 59){
		return 'F';
	} else if(score >= 60 && score <= 69){
		return 'D';
	} else if(score >= 70 && score <= 79){
		return 'C';
	} else if(score >= 80 && score <= 89){
		return 'B';
	} else if(score >= 90 && score <= 100){
		return 'A';
	} else {
		return 'INVALID SCORE';
	}
}