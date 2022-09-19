// https://www.codewars.com/kata/520b9d2ad5c005041100000f

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    let answer = [];
    let punctuation = str.match(/[\!\?]/g);
    str = str.split(' ')
    str.forEach(word => {
      if (word != punctuation) {
        answer.push(`${word.slice(1,word.length)}${word[0]}ay`)
        } else {
          answer.push(punctuation)
        }
    })
    return answer.join(' ');
  }