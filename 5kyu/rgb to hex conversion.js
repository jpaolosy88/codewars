// https://www.codewars.com/kata/513e08acc600c94f01000001

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b){
    let cleanedArr = cleanValues (r,g,b)
    let [R,G,B] = cleanedArr.map(element => element.toString(16).toUpperCase().padStart(2, '0'))
    return (`${R}${G}${B}`)
  }
  
  function cleanValues (r, g, b) {
    let min = 0
    let max = 255
    let arr = [r, g, b]
    let cleanedArr = []
  
    arr.forEach(element => {
      if (element < min) {
        cleanedArr.push(0)
      } else if (element > max) {
        cleanedArr.push(255)
      } else {
        cleanedArr.push(element)
      }
    })
    return cleanedArr
  }