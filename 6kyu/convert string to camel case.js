// https://www.codewars.com/kata/517abf86da9663f1d2000003

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    let answer = '';
    if (str.length == 0) {
      return answer;
    }
    let upperCamelCaseCheck = str[0] == str[0].toUpperCase() ? true : false;
    str = str.split(/[-_]/g);
    str.forEach(word => {
      word = word[0].toUpperCase() + word.slice(1,word.length);
      answer += word;
    });
    if (upperCamelCaseCheck) {
      return answer;
    } else {
      return answer[0].toLowerCase() + answer.slice(1,answer.length);
    }
  }
  
  
  