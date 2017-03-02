/*
  Rhys Austin
  03/01/2017

  Find the most frequent integer in an array

*/
var DataStructures = require("../DataStructures.js");

function getMostFrequentInteger(data) {
  var integerSet = new DataStructures.QHashSet();

  for(var i = 0; i < data.length; i++) {
    if(integerSet.contains(data[i]))
      integerSet.increment(data[i]);
    else {
      integerSet.add(data[i]);
    }
  }

  integerSet.getMaxCount();

}

var data = [1,1,2,2,3,3,3,3,300];

console.log(getMostFrequentInteger(data));
