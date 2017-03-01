/*

  This is free and unencumbered software released into the public domain.

  Anyone is free to copy, modify, publish, use, compile, sell, or
  distribute this software, either in source code form or as a compiled
  binary, for any purpose, commercial or non-commercial, and by any
  means.

  In jurisdictions that recognize copyright laws, the author or authors
  of this software dedicate any and all copyright interest in the
  software to the public domain. We make this dedication for the benefit
  of the public at large and to the detriment of our heirs and
  successors. We intend this dedication to be an overt act of
  relinquishment in perpetuity of all present and future rights to this
  software under copyright law.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
  IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
  OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
  ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
  OTHER DEALINGS IN THE SOFTWARE.

  For more information, please refer to <http://unlicense.org/>

  PAIR - FINDER
  Rhys Austin

  The problem is to determine if a pair exists in a collection of integers that
  when added together equal a specified sum. For this solution it is not assumed
  the collection is sorted.

  Examples:

  Desired Sum = 4
  Integers = [4, 2, 2, 6]
  2 + 2 = 4 = TRUE

  Desired Sum = 10
  Integers = [41, 22, 5, 6]
  41 + 22 != 10, 41 + 5 != 10 ..., 5 + 6 != 10 = FALSE

  The problem is solved in O(n) (linear) time by scanning the collection and keeping
  track of visited integers, then when we come across a new number, we check if a
  complement exists in our visited set. A complement is defined as the number which
  when added to our new number will equal our desired sum. If one exists, there is a pair;
  if however we get to the end of our collection and no complement is found, a pair does not exist.

  The complement set has a constant lookup time as it is implemented as a HashSet,
  where we can determine if the complement is in the set or not without any scanning.
*/

var DataStructure = require("../DataStructures.js");

// Function to find a pair in the data that when added equal our
// desired sum
function HasPairWithSum(data, sum) {
  var pairFound = false;

  // Our set which holds visited values as possible complements to
  // future values
  var complementSet = new DataStructure.HashSet();

  for(var i = 0; i < data.length; i++) {

    // If we have not added the data point into our complement set,
    // add it
    if(!complementSet.contains(data[i]))
      complementSet.add(data[i]);

    // Calculate the current complemented needed to be paired with our
    // current data value
    var complement = sum - data[i];

    // If our visited set contains a number that is a complement, a pair has been
    // found
    if(complementSet.contains(complement))
      pairFound = true;
  }

  return pairFound;
}


var numberSetOne = [];
for(var i = 0; i < 100; i++) {
  numberSetOne[i] = Math.floor((Math.random() * 1000) + 1);
}

var numberSetTwo = [23,12,44,66,66,66,45,1,2,56,2,4];

var desiredSum = 132;

console.log(HasPairWithSum(numberSetOne, desiredSum));
console.log(HasPairWithSum(numberSetTwo, desiredSum));
