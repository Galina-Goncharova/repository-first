
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     return console.log(message.split(' ').length * pricePerWord);

//    // Change code above this line
// }
// calculateEngravingPrice("JavaScript is in my blood", 10)
// function slugify(title) {
//   // Change code below this line
//     const slug = title.toLowerCase().split(" ").join("-");
// return console.log(slug);

//   // Change code above this line
// }
// slugify("English for developer")
// function findLongestWord(string) {
//   // Change code below this line
// const stringArray = string.split(" ");
// let maxWord;
//   for (let i = 0; i < maxWord.length; i += 1) {   
//    maxWord = i;
//   }
//   return console.log(maxWord);
//   // Change code above this line
// }
// findLongestWord("May the force be with you")

// function findLongestWord(string) {
//   // Change code below this line
// let stringArray = string.split(" ");
//   let maxWord = " ";
//   for (let i = 0; i < stringArray.length; i += 1) { 
// // console.log(stringArray[i])
//       if (maxWord.length < stringArray[i].length) {
//            console.log(maxWord = stringArray[i]);
//         }
//   }
//   return maxWord;
//   // Change code above this line
// }
// findLongestWord("Google do a roll")
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for ( let i = min; i <= max; i += 1) {
// numbers.push(i);
// }
//   // Change code above this line
//   return console.log(numbers);
// }
// createArrayOfNumbers(14, 17)

// задача 23
// function filterArray(numbers, value) {
//    // Change code below this line
// const newArray = [];
  
//     for (const number of numbers) {
//         console.log(number);
//         if (number > value) {
//             newArray.push(number);
//  }
//   }

// return newArray;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 20))

// задача 24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//     return fruits.includes(fruit);
//    // Change this line
// }
// console.log(checkFruit("mandarin"))
// console.log(checkFruit("pear"))

// задача 29
// function getEvenNumbers(start, end) {
//    // Change code below this line
//   const evenNumbers = [];
// for (let i = start; i <= end; i += 1) {
 
//     if (i % 2 === 0) {
//         evenNumbers.push(i);     
// }
// }
// return evenNumbers;
//     // Change code above this line
// }
//   console.log(getEvenNumbers(3, 11)) //[4, 6, 8, 10]

//задача 32
function includes(array, value) {
    // Change code below this line
    for (const arg of array) {
        console.log(arg);
        if (arg === value) {
            return true;
        }
    }
    return false;
        // Change code above this line
    }
    console.log(includes([1, 2, 3, 4, 5], 3))
    console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"))
