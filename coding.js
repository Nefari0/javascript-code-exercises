
// ----------------------------------------------------------- //
// Given an integral number, determine if it's a square number:

// var isSquare = function(n) {
//     if (Number.isInteger(Math.sqrt(n))===true){
//       return true
//     } else {
//       return false
//     }
//   }
  
//   isSquare(2)
// ----------------------------------------------------------- //

// ----------------------------------------------------------- //
// -- Summing a numbers digits -- //
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// code //
// function sumDigits(number) {
//     var numStr = number.toString()
//     var numArr = numStr.split('')
//     var numSum = 0
//     for (let i = 0; i < numArr.length; i++) {
//       if (isNaN(numArr[i]) === false){numSum += parseInt(numArr[i])}
//     }
//     return(numSum)
//   }
  
//   sumDigits(-32)
// ----------------------------------------------------------- //