// https://www.codewars.com/kata/52774a314c2333f0a7000688

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens) {
    if (parens.includes('()')) {
      parens = parens.replace('()', '')
      return validParentheses(parens)
    } else {
      return parens.length == 0 ? true : false
    } 
  }