/**
 
Given two strings, write a function to determine if the second string is an anagram of the first string. An anagram is a word, phrase, or named formed by rearranging the letters of another, such as cinema formed from iceman.

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'magaram') // true
validAnagram('rat', 'car') // false
validAnagram('texttwisttime', 'timetexttwist') // true

 */

 function validAnagram(first, second){
   if(first.length !== second.length){
     return false;
   }
   const lookup = {};
   for(let i = 0; i < first.length; i++){
     let letter = first[i];
     // if letter exists, increment otherwise set to 1
     lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
   }
   for (let i = 0; i < second.length; i++){
      let letter = second[i];
      // can't find letter or letter is 0 then its not anagram
      if(!lookup[letter]){
        return false;
      }else{
        lookup[letter] -= 1
      }
   }
   return true;
 }