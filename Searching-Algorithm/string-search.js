// Suppose you want to count the number of times a smaller string appears in a longer string;
// A straightforward approach involves checking pair of characters individually;

// pseudocode
/**
   # Loop over the longer string;
   # loop over the shorter string;
   # if the characters don't match, break out of the inner loop;
   # if the characters do match , keep going;
   # if you complete the inner loop and find a match, increment the count of matches;
   # return the count;
 */

function stringSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

stringSearch("lorie loled", "lol");
