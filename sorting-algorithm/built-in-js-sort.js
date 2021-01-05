// Telling javascript how to sort?

/**
   # The built-in sort method accepts an optional comparator function
   # You can use this comparator function to tell JavaScript how you want it to sort
   # The comparator looks at pairs of elements (a and b), determines their sort order # based on the return value
     * If it returns a negative number, a should come before b
     * If it returns a positive number, a should come after b,
     * If it returns 0, a and b are the same as far as the sort is concerned
 */

// Example:
function numberCompare(num1, num2) {
  return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare);
// [ 4, 6, 10, 15 ]

function ReverseNumberCompare(num1, num2) {
  return num2 - num1;
}
// [15, 10, 6, 4];

function compareByLength(str1, str2) {
  return str1.length - str2.length;
}

["Tanvir", "chowdhury", "js", "css"].sort(compareByLength);
