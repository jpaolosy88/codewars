// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    let resultString = x.replace(/[0-4]/g, 0);
    resultString = resultString.replace(/[5-9]/g, 1);
    return resultString;
  }