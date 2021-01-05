// O(n)
// Linear Search: Given an array, the simplest way to search for an value is to look at every element in the array is to look at every element in the array and check if its the value we want.

// Linear search pseudocode

// * The function accepts an array and a value;
// * Loop over through an array and check if the current element is equal to the value;
// * If it is, return the index at which the element is found;
// * If the value is never found return -1;

function linearSearch(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}

linearSearch([34, 56, 1, 2], 1);
