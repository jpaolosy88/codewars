// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
    let wordArray = word.split('');
    let capitalsArray = [];
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i].match(/[A-Z]/)) {
        capitalsArray.push(i);
      }
    }
    return capitalsArray;
  }