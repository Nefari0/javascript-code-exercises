
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

// ----------------------------------------------------------- //
// -- First non-repeating character -- //
// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

// -- Solution -- //
// const firstNonRepeatingLetter = (string) => {
//   const strArr = string.split('')
//   for (let i = 0; i < strArr.length; i++){
//     if(strArr.filter(el => el === strArr[i]).length < 2){
//       return(strArr[i])
//     }
//   }
//   return('')
// }
// ----------------------------------------------------------- //

// ----------------------------------------------------------- //
// -- Encase Characters -- //
// Write a script that encases all characters in a paranthesis unless it's a whitespace

// -- Solution -- //
// const encase = (string) => {
//   var strArr = string.split('')
//   newStr = ''
//   strArr.forEach(element => {
//     if (element === ' ') {
//       newStr += ' '
//     } else {
//       newStr += '(' + element + ')'
//     }
//   })
  
//   return(newStr)
// }
// ----------------------------------------------------------- //

// ----------------------------------------------------------- //
// -- Range Extraction -- //

// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// -- Solution -- //
// const solution = (list) => {
//   var isInRange = false
//   results = []
//   for (let i = 0; i < list.length; i++){
//     if (isInRange === false){
//         results.push(list[i].toString())
//         if (list[i+1] === list[i]+1) {
//         isInRange = true
//       } 
//     } else if (isInRange === true) {
//       if (list[i+1] != list[i]+1) {
//         results[results.length-1] += '-' + list[i].toString()
//         isInRange = false
//       }
//     }
//   }
//   return(results.join(','))
// }

// ----------------------------------------------------------- //

// ----------------------------------------------------------- //
// -- Is a number prime? -- //

// Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow.

// -- Solution -- //
// const isPrime = (num) => {
//   if (num <= 3) {
//     return(num > 1)
//   }

//   if ((num % 2 === 0) || (num % 3 === 0)) {return(false)}

//   let iter = 5

//   while (Math.pow(iter,2) <= num) {
//     if(num % iter === 0 || num % (iter + 2) === 0) {return(false)}
//     iter += 6
//   }
//   return(true)
// }
// ----------------------------------------------------------- //

// ----------------------------------------------------------- //
// -- Sum of Pairs -- //

// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum

//  -- Solution -- //
// const sumPairs = (ints,sum) => {
//   let result = []
//   for (let i = 0; i < ints.length; i++) {
//     const found = ints.find(element => element + ints[i] === sum);
//     if (ints[i] + found === sum){
//       return([ints[i],found])
//     }

//   }
  
// }
// ----------------------------------------------------------- //

// ----------------------------------------------------------- //
// -- Where my anagrams at? -- //
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.

// -- solution -- //
// const anagrams = (word,words) => {
//   var newWords = []
//   words.forEach(element => {
//   if (element.replace(/[^\w]/g,'').toLowerCase().split('').sort().join() === word.replace(/[^\w]/g,'').toLowerCase().split('').sort().join()) {
//     newWords.push(element)
//   }

//   })
//   return(newWords)
// }
// ----------------------------------------------------------- //

// ----------------------------------------------------------- //
// --Tic-Tac-Toe Checker --//

// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O":

// We want our function to return:

//     -1 if the board is not yet finished AND no one has won yet (there are empty spots),
//     1 if "X" won,
//     2 if "O" won,
//     0 if it's a cat's game (i.e. a draw).

// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

// -- Solution -- //
// const isSolved = (board) => {
//   var horizontalWinner = null
//   var diagonalWinner = null
//   var verticalWinner = null
//   // check horrizontal
//   for (let i = 0; i < board.length; i++){
//     for (let j = 0; j < board.length; j++){
//       var isSame = board[i].filter(element => element === j)
//     if (isSame.length === 3){
//       // return(isSame[i])
//       if (isSame[0] > 0){return(isSame[0])} else {return(-1)}
//     } else {horizontalWinner = false}
//     }
//   }
//   // check diagonal
//     if(board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
//       if(board[0][0] > 0) {return(board[0][0])} else {return(-1)}
//   }
//     if(board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
//       if(board[2][0] > 0) {return(board[0][2])} else {return(-1)}
//   } else {diagonalWinner = false}
  
//   // check vertical
//   for (let i = 0; i < board.length; i++){
//     if (board[0][i] === board[1][i] && board[1][i] === board[2][i]){
//       return(board[0][i])
//       } else {verticalWinner = false}
//   }
//   // check board for completion
//   for (let i = 0; i < board.length; i++){
//     if(board[i].includes(0) != false) {return (-1)}
//   }
//   // verify draw
//   if (horizontalWinner === false && verticalWinner === false && diagonalWinner === false){
//     return(0)
//   }
// }
// ----------------------------------------------------------- //

// ----------------------------------------------------------- //
// -- Human readable duration format -- //

// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

// -- Solution -- //
const formatDuration = (seconds) => {

// this section declares time units, and processes them to determine what is displayed

  const yearUnit = 31557600  // year
  const dayUnit = 86400 // day
  const hourUnit = 3600 // hour
  const minUnit = 60 // minute

  var year = Math.floor(seconds >= yearUnit ? seconds / yearUnit : '')
  var day = Math.floor(seconds >= yearUnit ? (seconds % yearUnit / dayUnit) + (year % 4 < 3 ? Math.floor(year / 4) : Math.ceil(year / 4)) : seconds / dayUnit)
  var hour = Math.floor(seconds >= dayUnit ? (seconds / hourUnit) % (dayUnit / hourUnit) : seconds / hourUnit)
  var mins = Math.floor(seconds >= hourUnit ? seconds / minUnit % minUnit : seconds / minUnit)
  var sec = seconds >= minUnit ? seconds % minUnit : seconds
  
// this section sets up the actual format of how time units will be displayed

  var yearFormat = `${year === 0 ? '' : `${year} year${year >= 2 ? 's' : ''}`}`
  var dayFormat = `${day === 0 ? '' : `${day} day${day >= 2 ? 's' : ''}`}`
  var hourFormat = `${hour === 0 ? '' : `${hour} hour${hour >= 2 ? 's' : ''}`}`
  var secFormat = `${sec === 0 ? '' : `${sec} second${sec >= 2 ? 's' : ''}`}`
  var minFormat = `${mins === 0 ? '' : `${mins} minute${mins >= 2 ? 's' : ''}`}`

// extract all display elements/store in new array
  const displayArray = []
  var displayStr = ''
  const theArray = [yearFormat,dayFormat,hourFormat,minFormat,secFormat]
  theArray.forEach(element => {
    var elArr = element.split('')
    if(parseInt(elArr[0]) >= 0){
      displayArray.push(element)
    }
  })

// process elements for displaying
  
  if(seconds <= 0) {
    return('now')
  }
  
  if (displayArray.length === 1) {
    return(displayArray[0])
  } else if (displayArray.length === 2) {
    return(displayArray[0] + ' and ' + displayArray[1])
  } else if (displayArray.length > 2) {
    var displayStr = ''
    for (let i = 0; i < displayArray.length-2; i++) {
      displayArray[i] += ', '
      displayStr += displayArray[i]
    }
    displayStr += (displayArray[displayArray.length-2] + ' and ' + displayArray[displayArray.length-1])
    return(displayStr)
  }

// ----------------------------------------------------------- //

// ----------------------------------------------------------- //
// --- Take a Ten Minute Walk --- //

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

// --- Solution --- //

const isValidWalk = (walk) => {
  distance = 10

  var n = walk.filter(e => e === 'n').length
  var s = walk.filter(e => e === 's').length
  var e = walk.filter(e => e === 'e').length
  var w = walk.filter(e => e === 'w').length

  return(n+s+e+w === distance ? (e-w === 0 && n-s === 0 ? true : false) : false)

}

// ----------------------------------------------------------------------------- //

//  --- Morse Code Translator --- //
//  this is not a codewars.com kata //
const morseTranslator = (str) => {

  const charList = {
    '._' : 'a',
    '_...' : 'b',
    '_._.' : 'c',
    '_..' : 'd',
    '.' : 'e',
    '.._.' : 'f',
    '._' : 'g',
    '....' : 'h',
    '..' : 'i',
    '.__.' : 'j',
    '_._' :'k',
    '.._.' : 'l',
    '__' : 'm',
    '_.' : 'n',
    '___' : 'o',
    '.__.' : 'p',
    '__._' : 'q',
    '._.' : 'r',
    '...' : 's',
    '__' : 't',
    '.._' : 'u',
    '..._' : 'v',
    '.__' : 'w',
    '_.._' : 'x',
    '_.__' : 'y',
    '__..' : 'z'
  }
  
  // iterate over input array. for each element: compare each element with charList element. When a match is found, apply the appropriate character
  var stringArr = str.split(' ')
  var alphaStr = ''
  stringArr.forEach(element => {
    for (let prop in charList){
    // console.log('element',element,'prop',prop)
      if(element == prop){ alphaStr += charList[prop]}
  }
  })
      console.log(alphaStr)

  // console.log(stringArr)
}

const array = '_._. .... ._. .. ...'

morseTranslator(array)

//  the block below will allow the translation of code to word and words to code
var str1 = 'c'
var str2 = '_._.'
var x = 1
var y = 0

const ternery = (val) => {
  // (x > y ? str1 : str2 )
  console.log(val === str2 ? 'c' : '_._.' )
}