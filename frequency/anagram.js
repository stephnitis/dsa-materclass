'use strict';

// given two strings write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema formed from iceman

function validAnagram (str1, str2) {
  if (str1.length !== str2.length){
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let char of str1){
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
  }
  for (let char of str2){
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
  }
  for (let key in frequencyCounter1){
    if(!(key in frequencyCounter2)){
      return false
    }
    if(frequencyCounter2[key] !== frequencyCounter1[key]){
      return false
    }
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  return true;
}

const string1 = 'team';
const string2 = 'meat';

console.log('validAnagram function results ---->', validAnagram(string1, string2))