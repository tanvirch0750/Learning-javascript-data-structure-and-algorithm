// O(log n) -> worst or average case, O(1) -> Best case;

/**
  # Binary search is a much faster from linear search;
  # Rather than eliminating one element at a time you can eliminate half of the       remaining at a time;
  # Binary search only works on sorted arrays
*/

// Binary search pseudocode
/**
  # This function accepts a sorted array and a value;
  # Create a left pointer at the start of the array and a right pointer at the end of the array;
  # While left pointer comes before right pointers:
      * Create a pointer in the middle;
      * If you find the value you want , return the index;
      * If the value is too small, move the left pointer up;
      * If the value is too large, move the right pointer down;
  # If you never find the value, return -1;
*/

function binarySearch(array, element) {
  var start = 0;
  var end = array.length - 1;
  var middle = Math.floor((start + end) / 2);

  while (array[middle] !== elem && start <= end) {
    if (element < array[middle]) {
      end = middle + 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (array[middle] === element) {
    return middle;
  }
  return -1;
}
