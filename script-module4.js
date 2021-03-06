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


// 39
// сортировка по возростанию и убыванию методом sort()
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort((a, b) =>
                                                     a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b,) =>
  b - a);
                                                      

  // 40
  // сортировка строк в алфавитном и обратном порядке
  const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
// Change code below this line

const authorsInAlphabetOrder = [...authors].sort((a, b) =>
                                                 a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a,b) =>
  b.localeCompare(a));
                                                 

  // 41
  // сортировка по рейтингу и имени автора
  const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));

const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => 
                                                   secondBook.author.localeCompare(firstBook.author));

const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);

const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);


// 42
// сортировка по балансу
// Change code below this line
const sortByAscendingBalance = users => {
  const sortedByBalance = [...users].sort((firstUser, secondUser) => firstUser.balance - secondUser.balance);
  return sortedByBalance;
};
// Change code above this line


// 43
// сортировка по количеству друзей
// Change code below this line
const sortByDescendingFriendCount = users => {
   const sortedByFriends = [...users].sort((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length);
  return sortedByFriends;
};
// Change code above this line


// 45
// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, 
// рейтинг книг которых больше значения переменной MIN_BOOK_RATING.
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = [...books]
.filter(book => book.rating > MIN_BOOK_RATING)
.map(book => book.author)
  .sort((a, b) => a.localeCompare(b));


  // 46
  // Дополни функцию getNamesSortedByFriendCount(users) так, 
  // чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей(свойство friends).
  // Change code below this line
const getNamesSortedByFriendCount = users => {
     const sortedByFriends = [...users].sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length)
     .map(user => user.name);
  return sortedByFriends;
};
// Change code above this line


// 47
// Дополни функцию getSortedFriends(users) так, 
// чтобы она возвращала массив уникальных имён друзей(свойство friends) отсортированный по алфавиту.
// Change code below this line
const getSortedFriends = users => {
   const sortedFriends = [...users].flatMap(user => user.friends)
   .filter((friend, index, array) => array.indexOf(friend) === index)
   .sort((a, b) => a.localeCompare(b));
  return sortedFriends;
};
// Change code above this line


// 48
// Дополни функцию getTotalBalanceByGender(users, gender) так, 
// чтобы она возвращала общий баланс пользователей(свойство balance),
//   пол которых(свойство gender) совпадает со значением параметра gender.
// Change code below this line
const getTotalBalanceByGender = (users, gender) => {
  const totalBalanceByGender = users.filter(user => user.gender === gender)
  .reduce((total, user) => (total + user.balance), 0);
  return totalBalanceByGender;
};
// Change code above this line