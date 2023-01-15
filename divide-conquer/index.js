'use strict';

// this pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data

// can tremendously decrease time complexity

// given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

// naive solution
// linear search
// time complexity O(N)

function search(arr, value) {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === val){
      return i;
    }
  }
  return -1;
}

// refactor
// time complexity Log(N)
// Binary Search

function searchRefactor(array, value) {
  let min = 0;
  let max = array.length - 1;

  while( min <= max ){
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if(array[middle] < value){
      min = middle + 1;
    }
    else if (array[middle] > value){
      max = middle - 1;
    }
    else {
      return middle;
    }
  }
  return -1;
}