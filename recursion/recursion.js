// How recursive function work?
// Invoke the same function with a different input until you reach your base case;

// Base case = the condition when the recursion ends.

// Two essential part of recursive function: Base case & different input

// My first recursive function
function countDown(num) {
  if (num <= 0) {
    console.log("all done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
countDown(5);

// sumRange
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
sumRange(4);

// Writing factorial iteratively
// factorial = 4 = 4*3*2*1
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// Helper method recursion
// collect all of the odd values in the array;

function collectOddValues(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

// Pure Recursion
function collectionOddValues(arr) {
  let newArray = [];
  if (arr.length === 0) {
    return newArray;
  }
  if (arr[0] % 2 !== 0) {
    newArray.push(arr[0]);
  }
  newArray = newArray.concat(collectionOddValues(arr.slice(1)));
  return newArray;
}

collectionOddValues([1, 2, 3, 4, 5, 6, 7]);
