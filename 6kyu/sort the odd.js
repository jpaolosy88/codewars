// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    let sortedArray = [];
    let oddArray = array.filter(element => element % 2 != 0).sort((a,b) => a - b);
    let oddArrayCounter = 0;
    array.forEach(element => {
      if (element %2 != 0) {
        sortedArray.push(oddArray[oddArrayCounter]);
        oddArrayCounter += 1;
      } else {
        sortedArray.push(element);
      }
    });
    return sortedArray;
  }