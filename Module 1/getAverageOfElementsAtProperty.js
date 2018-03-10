/*
Instructions:
Write a function called "getAverageOfElementsAtProperty".

Given an object and a key, "getAverageOfElementsAtProperty" returns the average of all the elements in the array located at the given key. 

Notes:
* If the array at the given key is empty, it should return 0.
* If the property at the given key is not an array, it should return 0.
* If there is no property at the given key, it should return 0.


var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2

Starter Code :
function getAverageOfElementsAtProperty(obj, key) {
  // your code here
}
*/

function getAverageOfElementsAtProperty(obj, key) {
  const isArrayEmpty = (obj[key] === undefined || obj[key].length === 0);
  const isNotAnArray = !Array.isArray(obj[key]);
  const noPropertyAtTheKey = !obj.hasOwnProperty(key);
  
  if(isArrayEmpty || isNotAnArray || noPropertyAtTheKey) {
    return 0;
  } else {
    let sum = 0;
    
    for(let i = 0; i < obj[key].length; i++){
      sum += obj[key][i];
    }
    
    return sum / obj[key].length;
  }
}