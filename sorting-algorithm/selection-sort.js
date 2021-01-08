// Selection Sort Pseudocode
/**
  # Store the first element as the smallest value you've seen so far.
  # Compare this item to the next item in the array until you find a smaller number.
  # If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
  # If the "minimum" is not the value (index) you initially began with, swap the two values.
  # Repeat this with the next element until the array is sorted.
 */

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  console.log(arr);

  return arr;
}

selectionSort([0, 2, 4, 12, 45, 9, 3, 5]);

// ES2015 VERSION
function selectionSort6(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort6([0, 2, 34, 22, 10, 19, 17]);
