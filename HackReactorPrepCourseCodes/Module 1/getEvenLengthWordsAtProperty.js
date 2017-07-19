/*
Instructions:
Write a function called "getEvenLengthWordsAtProperty".

Given an object and a key, "getEvenLengthWordsAtProperty" returns an array containing all the even length word elements of the array located at the given key.

Notes:
* If the array is empty, it should return an empty array.
* If it contains no even length elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: ['a', 'long', 'game']
};
var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']

Starter Code :
function getEvenLengthWordsAtProperty(obj, key) {
  // your code here
}
*/

function getEvenLengthWordsAtProperty(obj, key) {
  let newArr = [];
  const prop = obj[key];
  const isArrayEmpty = (prop === undefined || prop.length === 0);
  const isNotAnArray = !Array.isArray(prop);
  const noPropertyAtTheKey = !obj.hasOwnProperty(key);
  
  if(!(isArrayEmpty || isNotAnArray || noPropertyAtTheKey)) {
    for(let i = 0; i < prop.length; i++){
      if(prop[i].length % 2 === 0) {
        newArr.push(prop[i]);
      }
    }
  }
  
  return newArr;
}