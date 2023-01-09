'use strict';

// implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted

function countUniqueValues(arr){
  let slow = 0;
  let fast = 1;
  while(fast < arr.length){
    if (arr[slow] === arr[fast]){
      fast += 1
    } else if(arr[slow] !== arr[fast]){
      slow += 1
      arr[slow] = arr[fast]
    }
  }
  return slow += 1;
}

const array1 = [1, 1, 2, 2, 3, 5, 7, 7, 7, 8];
console.log('my solution ----->', countUniqueValues(array1))