// https://www.codewars.com/kata/52597aa56021e91c93000cb0

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let counter = 0;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === 0) {
        counter += 1;
        arr[i] = '!'
      }
    }
    arr = arr.filter(element => element != '!');
    for(let i = 0; i < counter; i++) {
      arr.push(0);
      }
    return arr;
  }

// refactored - using chained array filter and concat method

function moveZeros(arr) {
    return arr.filter(x => x !== 0).concat(arr.filter(x => x ===0))
  }