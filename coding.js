
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

// ----------------------------------------------------------- //

//  -- Break camelCase -- //

// Complete the solution so that the function will break up camel casing, using a space between words.

// -- Solution -- //
// const solution = (string) => {
//   const strArr = string.split('')
//   let = newStr = '' // this is where elements will be pushed
//   for (let i = 0; i < strArr.length; i++){
//     // newArr.push(strArr[i])
//     if ( strArr[i] === strArr[i].toUpperCase()) {
//       newStr += ' ' + strArr[i]
//       // console.log(strArr[i])
//     } else {newStr += strArr[i]}
//   }
//   return newStr
// }

// ----------------------------------------------------------- //

// ----------------------------------------------------------- //
// -- Valid Braces -- //

// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// -- solution --//
// let validBraces = (input) => {

//   let brackets = "[]{}()"
//   let stack = []

//   for(let bracket of input) {
//     let bracketsIndex = brackets.indexOf(bracket)

//     if(bracketsIndex % 2 === 0) {
//       stack.push(bracketsIndex + 1)
//     } else {
//       if(stack.pop() !== bracketsIndex) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0
// }

// ----------------------------------------------------------- //

// ----------------------------------------------------------- //
// -- Is a number prime? -- //
// Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

// although this code works well, it is too slow

// -- Solution -- //
// function isPrime(num){
//   for (let i = 2; i < num; i++){
//     if(num % i === 0) return(false)
//   } return(num > 1)
// }

// ----------------------------------------------------------- //

// ----------------------------------------------------------- //
// -- List Filtering -- //

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// -- Solution -- //
// function filter_list(list) {
//   const newList = []
//   for (let i = 0; i < list.length; i++){
//     if (typeof(list[i]) === 'number'){
//       newList.push(list[i])
//     }
//   }
//   return(newList)
// }

// ----------------------------------------------------------- //

// ----------------------------------------------------------- //
// -- Bit Counting -- //

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// -- Solution -- //
// const countBits = (n) => {
  // return(Number(n).toString(2).split('').filter(element => element == 1).length)
// }

// ----------------------------------------------------------- //

// ----------------------------------------------------------- //
// -- Disemvowel Trolls -- // 
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// -- Solution -- // -- although this code works well, it did not pass all the tests on codewars.com

// const disemvowel = (string) => {
//   const vowels = 'aeiouAEIOU'
//   let strArr = string.split('')

//   vowels.split('').forEach(element => {
//     for(let i = 0; i < strArr.length; i++){
//       if(element === strArr[i]){
//         strArr.splice(strArr.indexOf(element),1)
//       }
//     }
//     })
//     return(strArr.join(''))
//   }

// -- Solution 2 -- //
// function disemvowel(str) { return str.replace(/[aeiou]/gi, '') }

// ----------------------------------------------------------- //

// ----------------------------------------------------------- //
// -- Creat Phone Number -- //
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// -- Solution -- //
// const createPhoneNumber = (inputArray) => {
//   var first = inputArray.splice(0,3).join('')
//   var third = inputArray.splice(3,7).join('')
//   var outputStr = `(${first}) ${inputArray.join('')}-${third}`
//   return(outputStr)
// }

// ----------------------------------------------------------- //