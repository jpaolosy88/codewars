// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelArray = str.match(/[aeiou]/g);
    if (vowelArray?.length > 0) {
      return vowelArray.length;
    } else {
      return 0;
    }
  }

  function getCount(str) {
    return (str.match(/[aeiou]/g)||[]).length;
  }