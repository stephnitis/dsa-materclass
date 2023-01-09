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

// solution two
function validAnagramExample(first, second){
  if(first.length !== second.length){
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++){
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log('lookup object after first loop', lookup)
  for (let i = 0; i < second.length; i++){
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  console.log('lookup object after second loop---->', lookup)
  return true;
}

console.log('Example Solution ----->', validAnagramExample('potato', 'patoto'))