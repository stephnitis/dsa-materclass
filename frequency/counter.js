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
    console.log(arr2)
    // splice removes index from the array so we don't re-use values
    arr2.splice(correctIndex, 1)
  }
  return true
}

const array1 = [2, 3, 3, 5]
const array2 = [4, 9, 9, 25]
same(array1, array2)