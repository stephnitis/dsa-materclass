'use strict';

// this pattern involves creating a window which can either be an array or number from one position to another

// depending on a certain condition, the window either increases or closes (and a new window is created)

// very useful for keeping track of a subset of data in an array/string etc

// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array

// naive solution
// time complexity: O(N^2)

function maxSubarraySum(arr, num){
  if (num > arr.length){
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++){
    temp = 0;
    for (let j =0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max){
      max = temp;
    }
  }
  return max;
}