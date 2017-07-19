/*
Instructions:
Write a function called "removeProperty".

Given an object and a key, "removeProperty" removes the given key from the given object.

var obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined

Starter Code :
function removeProperty(obj, key) {
  // your code here
}
*/

function removeProperty(obj, key) {
	obj[key] = undefined;
}
