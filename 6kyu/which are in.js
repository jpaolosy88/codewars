// https://www.codewars.com/kata/550554fd08b86f84fe000a58

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: r must be without duplicates.

function inArray(array1,array2){
    let includesArray = [];
    array1.forEach(arr1 => {
      array2.forEach(arr2 => {
        if (arr2.includes(arr1)) {
          includesArray.includes(arr1) ? null : includesArray.push(arr1);
        }
      })
    })
    return includesArray.sort();
  }