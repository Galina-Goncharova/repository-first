// задача 4
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//       for (const pizza of this.pizzas) {
//           if (pizza === pizzaName) {
//               return onSuccess(pizzaName);
//           }
//       }
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// // pizzaPalace.order('Smoked', makePizza, onOrderError);
// // pizzaPalace.order('Four meats', makePizza, onOrderError);
// // pizzaPalace.order('Big Mike', makePizza, onOrderError);
// // pizzaPalace.order('Vienna', makePizza, onOrderError);
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError))
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError))


// задача 5
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
// orderedItems.forEach(function (number) {
// totalPrice += number;
// });
//   // Change code above this line
//   return totalPrice;
// }


// задача 6
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
// numbers.forEach(function (number) {
//   if(number > value) {
//     filteredNumbers.push(number)
//   }
// });
//   // Change code above this line
//   return filteredNumbers;
// }


// задача 7
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line
//       firstArray.forEach(function (number) {
//           if (secondArray.includes(number)) {
//              commonElements.push(number)
//           }
// });

//   return commonElements;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]))
    //        if (secondArray.includes(number)) {
    //     commonElements.push(number)
    // }
    

    // задача 13
    // вариант1
// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value);
//     }
//    else {newArray.push(numbers[i]);}
//   }
//   return newArray;
//   // Change code above this line
// }

// вариант2
// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];

//  numbers.forEach(number => {
//           if (number % 2 === 0) {
//              newArray.push(number + value);
//    }
//    else {newArray.push(number);}
//  });
//   return newArray;
//   // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10))


// задача 20
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genres, index, array) => array.indexOf(genres) === index
// );
  

// // задача 21
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);


// задача 22
// Change code below this line
const getUsersWithEyeColor = (users, color) => {
 const UsersWithEyeColor = users.filter(user => user.eyeColor === color);
return UsersWithEyeColor;
};
// Change code above this line

// задача 23
// Change code below this line
const getUsersWithAge = (users, minAge, maxAge) => {
 const UsersWithAge = users.filter(user => user.age >= minAge && user.age <= maxAge); 
return UsersWithAge;
};
// Change code above this line


// задача24
// Change code below this line
const getUsersWithFriend = (users, friendName) => {
  const usersWithFriend = users.filter(user => user.friends.includes(friendName));
  return usersWithFriend;
};
// Change code above this line


// задача 25
// Change code below this line
const getFriends = (users) => {
   const allFriends = users.flatMap(user => user.friends);
  const friends = allFriends.filter((friend, index, array) => 
  array.indexOf(friend) === index);                                 return friends;
};
// Change code above this line


// задача 28
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR = 'Robert Sheckley';
// Change code below this line

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);


// задача 29
const getUserWithEmail = (users, email) => {
  const userWithEmail = users.find(user => user.email === email);
  return userWithEmail;
};


// 35
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((total, player) => {
  return (total + player.playtime / player.gamesPlayed);
}, 0);


// 36
// Change code below this line
const calculateTotalBalance = users => {
   const everyBalance = users.reduce((total, user) => {
     return total + user.balance;
   }, 0);
  return everyBalance;
};
// Change code above this line


// 37
// Change code below this line
const getTotalFriendCount = users => {
  const totalFriend = users.reduce((allFrinds, user) => {
    allFrinds.push(...user.friends);
    return allFrinds;
  }, []);
  return totalFriend.length;
};
// Change code above this line


