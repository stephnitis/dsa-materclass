'use strict';

// Write a function called same which accepts two arrays, the function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same

// naive solution

function same(arr1, arr2) {
  // if the two arrays have different lengths we are done
  if(arr1.length !== arr2.length) {
    return false;
  }
  // looping over array
  for(let i = 0; i < arr1.length; i++){
    // pass in the square of each value using indexOf
    // indexOf is looping making this a nested loop
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if(correctIndex === -1) {
      return false;
    }
    console.log('array two as we splice ---->', arr2)
    // splice removes index from the array so we don't re-use values
    arr2.splice(correctIndex, 1)
  }
  return true
}

const array1 = [2, 3, 3, 5]
const array2 = [4, 9, 9, 25]
console.log('result for same function ---->', same(array1, array2));

// refactored

function sameRefactor(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  // each object holds the counts of frequency of values in the array
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // loop over each array, adding 1 to the key when it occurs
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  // loop over the objects and see if the occurrences match
  for (let key in frequencyCounter1) {
    if(!(key ** 2 in frequencyCounter2)){
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false;
    }
  }
  console.log('frequency counter one ----->', frequencyCounter1);
  console.log('frequency counter two ----->', frequencyCounter2);
  return true;
}

const array3 = [2, 3, 3, 1]
const array4 = [4, 9, 9, 1]
console.log('result same refactor function ---->', sameRefactor(array3, array4));