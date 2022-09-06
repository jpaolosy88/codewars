// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    let filteredStr = '';
    filteredStr = new Set(str.toLowerCase());
    filteredStr = [...filteredStr];
    return (filteredStr.length == str.length ? true : false);
  }

function isIsogram(str){
let filteredStr = '';
filteredStr = new Set(str.toLowerCase());
return (filteredStr.size == str.length ? true : false);
}