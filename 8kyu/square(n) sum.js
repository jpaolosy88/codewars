// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    let sumOfSquaredNumbers = 0;
    numbers.forEach (element => {
      sumOfSquaredNumbers += Math.pow(element, 2);
    });
    return sumOfSquaredNumbers;
  }

  function squareSum(numbers){
    return numbers.reduce((s, c) => s + Math.pow(c,2),0);
  }