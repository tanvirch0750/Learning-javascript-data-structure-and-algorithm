// BubbleSort Pseudocode
/**
   # Start looping from with a variable called i the end of the array towards the beginning
   # Start an inner loop with a variable called j from the beginning until i - 1
   # If arr[j] is greater than arr[j+1], swap those two values!
   # Return the sorted array
 */

// ES5 version
// function bubbleSort(arr) {
//   for (var i = arr.length; i > 0; i--) {
//     for (var j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         var tmp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = tmp;
//       }
//     }
//   }
//   console.log(arr);
//   return arr;
// }
// bubbleSort([12, 3, 45, 14, 23, 5]);

// No swap optimization
function bubbleSort(arr) {
  var noSwap;
  for (var i = arr.length; i > 0; i--) {
    noSwap = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  console.log(arr);
  return arr;
}
bubbleSort([12, 3, 45, 14, 23, 5]);

// ES6
const bubbleSort6 = (arr) => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  console.log(arr);
  return arr;
};
bubbleSort6([12, 3, 45, 14, 23, 5]);
