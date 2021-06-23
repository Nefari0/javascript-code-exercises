
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

// ----------------------------------------------------------- //
// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
// The four operators are "add", "subtract", "divide", "multiply".

// function arithmetic(a, b, operator){
  
//     switch (operator) {
//       case 'add':
//         return(a+b)
//         break;
//       case 'subtract':
//         return(a-b)
//         break;
//       case 'multiply':
//         return(a*b)
//         break;
//       case 'divide':
//         return(a/b)
//         break;
//     }
//   }

  // ----------------------------------------------------------- //

  // ----------------------------------------------------------- //
// -- String ends with? -- //
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// code //
// const solution = (firstStr,secondStr) => {
//   const firstArr = firstStr.split('')
//   const secondArr = secondStr.split('')
//   const segment = firstArr.slice(-secondArr.length)
//   // console.log(segment,secondArr)
//   if (secondStr === ''){
//     return (true)
//   } else { return(segment.toString() === secondArr.toString())}
 
// }
// ----------------------------------------------------------- //


// ----------------------------------------------------------- //
// -- toWeirdCase -- //
// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// const toWeirdCase = (string) => {

//   var strArr = string.split(' ').filter(element => element != ' ')
//   var returnedStr = ''

//   strArr.forEach(element => {
//     newStr = ''
//     for (let i = 0; i < element.length; i++){
//       if(i % 2 === 0){
//         newStr += element[i].toUpperCase()
//         } else if(i % 2 != 0){
//           newStr += element[i].toLowerCase()
//         }
//     }
//         returnedStr += newStr
//         returnedStr += ' '
//   })
//   return(returnedStr.trim())
// }

// toWeirdCase('this is a string')
// ----------------------------------------------------------- //