/* 

Write a function called SAME, which accepts two arrays, The function should return true if every value in the array has it's corresponding value square in the second array. The frequency of values must be same.

EXAMPLE:

same([1, 2, 3], [4, 1, 9]) answer: TRUE
same([1, 2, 3], [1, 9])    answer: FALSE
same([1, 2, 3], [1, 4,4])  answer: FALSE(must be same frequency)

*/

// SOLUTION ONE
function same(arr1, arr2){
  if(arr1.length !== arr2.length){
      return false;
  }
  for(let i = 0; i < arr1.length; i++){
      let correctIndex = arr2.indexOf(arr1[i] ** 2)
      if(correctIndex === -1) {
          return false;
      }
      arr2.splice(correctIndex,1)
  }
  return true;
}

// SOLUTION TWO
function same2(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  };
  for(let key in frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)){
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false
    }
  }
  return true;
}



