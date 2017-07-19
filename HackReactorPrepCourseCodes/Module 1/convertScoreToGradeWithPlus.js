/*
Instructions:
Write a function called "convertScoreToGradeWithPlusAndMinus".

Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

Notes:
* (100 - 90) --> 'A'
* (89  - 80) --> 'B'
* (79  - 70) --> 'C'
* (69  - 60) --> 'D'
* (59  -  0) --> 'F'
* If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
* If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
* If the score is between the 8 and 9 (inclusive) of a given range, return the letter with a '+'
* There are is no F+ and there is no F-.

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'


Starter Code :
function convertScoreToGradeWithPlusAndMinus(score) {
  // your code here
}
*/

function convertScoreToGradeWithPlusAndMinus(score) {
	if(score >= 0 && score <= 59){
		return 'F';
	} else if(score >= 60 && score <= 69){
		if(score >= 60 && score <= 62){
			return 'D-';
		} else if(score >= 68 && score <= 69){
			return 'D+';
		} else {
			return 'D';
		}
	} else if(score >= 70 && score <= 79){
		if(score >= 70 && score <= 72){
			return 'C-';
		} else if(score >= 78 && score <= 79){
			return 'C+';
		} else {
			return 'C';
		}
	} else if(score >= 80 && score <= 89){
		if(score >= 80 && score <= 82){
			return 'B-';
		} else if(score >= 88 && score <= 89){
			return 'B+';
		} else {
			return 'B';
		}
	} else if(score >= 90 && score <= 100){
		if(score >= 90 && score <= 92){
			return 'A-';
		} else if(score >= 98 && score <= 100){
			return 'A+';
		} else {
			return 'A';
		}
	} else {
		return 'INVALID SCORE';
	}
}