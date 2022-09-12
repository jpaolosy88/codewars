// https://www.codewars.com/kata/580a4734d6df748060000045/

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
    let sortAscending = array.map(x => x);
    let sortDescending = array.map(x => x);
    sortAscending.sort((a,b) => a - b);
    sortDescending.sort((a,b) => b - a);
    if (array.toString() == sortAscending.toString()) {
      return 'yes, ascending';
    } else if (array.toString() == sortDescending.toString()) {
      return 'yes, descending'; 
    } else {
      return 'no';
    }
  }