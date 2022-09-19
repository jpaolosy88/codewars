// https://www.codewars.com/kata/52685f7382004e774f0001f7/

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    let hour = Math.floor(seconds/3600)
    let minute = Math.floor(seconds/60) - hour*60
    let second = seconds - hour*3600 - minute*60
  
    hour = hour.toString().padStart(2, '0')
    minute = minute.toString().padStart(2, '0')
    second = second.toString().padStart(2, '0')
    
    return (`${hour}:${minute}:${second}`)
  }