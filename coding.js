
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


// ----------------------------------------------------------- //
//  -- Human Readable Time -- //
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// function humanReadable(seconds) {

//   secs = seconds % 60
//   mins = Math.floor(seconds / 60 )
//   hours = Math.floor(mins / 60 )
  
//   return(`${("0" + hours).slice(-2)}:${("0" + mins % 60).slice(-2)}:${("0" + secs).slice(-2)}`)

// }

// humanReadable(56456)
// ----------------------------------------------------------- //


// ----------------------------------------------------------- //
//  -- multiples of 3 or 5 -- //

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)


// const solution = (number) => {
//   var threes = 0  
//   var fives = 0

//   for (let i = 0; i < number; i++){
//     if(i % 3 === 0){threes += i}
//     if(i % 5 === 0){fives += i}
//     if(i % 5 === 0 && i % 3 === 0){fives -= i}

//   }
//   return(threes + fives)
// }
// ----------------------------------------------------------- //

// ----------------------------------------------------------- //
// -- Convert string to camel case -- //

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// solution

// def to_camel_case(text):
//     textArr = list(text)
//     isAlpha = True
//     indeces = []
//     newStr = ''
    
//     for i in range(len(textArr)):
        
//         if textArr[i] == '_' or textArr[i] == '-':
// #         if textArr[i] == '_':
//             isAlpha = False
            
//         else : 
//             isAlpha = True
            
//         if isAlpha == True:
//             newStr += textArr[i]
            
//         if isAlpha == False:
//             textArr[i+1] = textArr[i+1].upper()
            
            
                
            
//     return(newStr)
    
// to_camel_case('this_is_a_test-variable')

