const arr = [1, 2, 3, 4, 5]
/**
 * return: undefined
 * чистая || не чистая
 * callback params: item, index, array
 */
arr.forEach((item, index, array) => {})
/**
 * return: []
 * чистая
 * callback params: item, index, array
 */
const mapArr = arr.map((item, index, array) => {
  return item * 2
})
/**
 * return: []
 * чистая
 * callback params: item, index, array
 */
const mapFlatArr = arr.flatMap((item, index, array) => {
  return item * 2
})
/**
 * return: []
 * чистая
 * callback params: item, index, array
 */
const filterArr = arr.filter((item, index, array) => {
  return item % 2 === 0
})
/**
 * return: item
 * чистая
 * callback params: item, index, array
 */
const findArr = arr.find((item, index, array) => {
  return item % 2 === 0
})
/**
 * return: index
 * чистая
 * callback params: item, index, array
 */
const findIndexArr = arr.findIndex((item, index, array) => {
  return item % 2 === 0
})
/**
 * return: true || false
 * чистая
 * callback params: item, index, array
 */
const everyArr = arr.every((item, index, array) => {
  return item % 2 === 0
})
/**
 * return: true || false
 * чистая
 * callback params: item, index, array
 */
const someArr = arr.some((item, index, array) => {
  return item % 2 === 0
})
/**
 * return: any
 * чистая
 * callback params: acc, item, index, array
 */
const reduceArr = arr.reduce((acc, item, index, array) => {
  return acc + item
}, 0)
/**
 * return: []
 * не чистая
 * callback params: item1, item2
 */
arr.sort((a, b) => b - a)
/*----------------*/
// const fn = (arr) => {
//     arr.forEach((item, index) => {
//         arr[index] = item * 2;
//     });
//     return arr;
// }
// const fn1 = (arr) => {
//     const arr1 = [...arr];
//     arr1.forEach((item, index) => {
//         arr1[index] = item * 2;
//     });
//     return arr1;
// }
// const arr = [1,2,3,4,5,6];
//fn1(arr);
// console.log(arr);
// fn1(arr);
// console.log(arr);
/*--------------*/
// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Поли", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Киви", score: 94 },
//     { name: "Хьюстон", score: 64 },
// ];
// console.log(students.map(item => item.name));
// console.log(students);
// const students = [
//     { name: "Манго", courses: ["математика", "физика"] },
//     { name: "Поли", courses: ["информатика",[1,2,34], "математика"] },
//     { name: "Киви", courses: ["физика", "биология"] },
// ];
// console.log(students.map(student => student.courses).flat(1));
// console.log(students.flatMap(student => student.courses));
// console.log(students);
// const testFilterArr = arr.filter(item => !(item % 2));
// console.log(testFilterArr);
// const HIGH_SCORE = 80;
// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Поли", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Киви", score: 94 },
//     { name: "Хьюстон", score: 64 },
// ];
// const best = students.filter(({ name, score}) => name === "Аякс" && score > 10);
// console.log(best);
// const arr1 = [1, 2, 3, 4, 4, 5, 2, 1, 6, 7, 2, 1];
// const uniqArr = arr1.filter(
//     (item, index, array) => index === array.indexOf(item)
// );
// console.log(uniqArr);
// const colorPickerOptions = [
//     { label: "red", color: "#F44336" },
//     { label: "green", color: "#4CAF50" },
//     { label: "blue", color: "#2196F3" },
//     { label: "pink", color: "#E91E63" },
//     { label: "indigo", color: "#3F51B5" },
// ];
// console.log(colorPickerOptions.findIndex(
//     option => option.label === "blue"
//     ));
// const arrTest = [1, 2, 3, 4, 5, 6];
// console.log(arrTest.every(item => item % 2 === 0));
// console.log(arrTest.some(item => item % 2 === 0));
/*-----------------*/
// const reduce = (arr, cb, defAcc) => {
//     let acc = (defAcc === undefined) ? arr[0] : defAcc;
//     for (const item of arr) {
//         if (defAcc === undefined && arr.indexOf(item) === 0)
//             continue;
//         acc = cb(acc, item, arr.indexOf(item), arr);
//     }
//     return acc;
// }
// console.log(reduce(arr, (acc, item) => acc + item, 5));
// console.log(arr.reduce((acc, item) => acc + item, 5));
// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Поли", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Киви", score: 94 },
//     { name: "Хьюстон", score: 64 },
// ];
// console.log(
//     students.reduce(
//         (acc, { name }) => acc + `, ${name}`, ''
//     )
//     .slice(2)
// );
// const players = [
//     { name: "Mango", playTime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playTime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playTime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playTime: 241, gamesPlayed: 1 },
// ];
// const res = players.reduce((acc, item) => {
//     const obj = {};
//     obj.name = item.name;
//     obj.averageTime = item.playTime / item.gamesPlayed;
//     acc.push(obj);
//     return acc;
// }, [])
// console.log(res);
/*----------------*/
/**
 * 4,2,5,1,3
 * 2,4,5,1,3
 * 2,4,5,1,3
 * 2,4,1,5,3
 * 2,4,1,3,5
 *
 * 2,4,1,3,5
 * 2,1,4,3,5
 * 2,1,3,4,5
 *
 * 1,2,3,4,5
 *
 */
// const numbers = [4, 2, 5, 1, 3];
// numbers.sort((a, b) => b - a);
// console.log(numbers);
// const players = [
//     { name: "Mango", playTime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playTime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playTime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playTime: 241, gamesPlayed: 1 },
// ];
// const testSort = ["test", 12, 44, 44, 11, 1, 5, 'Привет', 'привет', 8, 22, 44, 6, 'hi', 'Hi'];
//testSort.sort((a, b) => a.toString().localeCompare(b));
// testSort.sort();
// console.log(testSort);
/*---------------------*/
// const students = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];
// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// const tagsUniq = tweets
//     .flatMap(item => item.tags)
//     .filter((item, index, array) => index === array.indexOf(item))
//     .map(item => item.toUpperCase())
//     .sort()
// console.log(tagsUniq);

// Write a function - positiveSum
// It should accept an array of numbers and return a result of their
// addition.But you must calculate only positive numbers and omit negative
// y presents.
// For example:

// const positiveSum = arr => arr.filter(el => el >= 0).reduce((acc, item) => acc+item)
// const positiveSum = (arr) => arr.reduce((acc, item) => item > 0 ? acc += item : acc, 0)

// console.log(positiveSum([2, 4, 6, 8])) // => 20
// console.log(positiveSum([0, -3, 5, 7])) // => 12
//-----------------------------
// Write a function – letterCount
// It accepts two string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// For example:
// const letterCount = (str, control) => str.toLowerCase().split('').reduce((acc, item) => (item === control ? acc += 1 : acc), 0);

// console.log(letterCount("Maggy", "g"))// => 2
// console.log(letterCount("Barry", "b")) // => 1
// console.log(letterCount("", "z"))      // => 0
//-----------------------------
// Our football team completed the championship. The result of each match look like "x:y".
// Results of all matches are recorded in the collection like this: ["3:1", "2:2", "0:1", ...]

// Write a function – countPoints
// It should accept a collection of football games scores and count the points of our team in the championship.
// Rules for counting points for each match:
// •	if x > y   - 3 points
// •	if x < y   - 0 point
// •	if x = y   - 1 point
// const countPoints = arr => {
//   const manyArr = arr.map((el) => {
//     return el.split(':');
//   });

//   return manyArr.reduce((acc, el) => {
//     if (el[0] > el[1]) {
//       acc += 3;
//     } else if (el[0] === el[1]) {
//       acc += 1;
//     } else {
//       acc;
//     }
//     // console.log(acc);
//     return acc;
//   }, 0);
// }
//----Альтернативное решение---
// reduce((acc, el) => if (el[0] > el[1]) acc += 3; if (el[0] = el[1] acc += 1) acc += 0, 0);

// // For example:
// console.log(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']) )// => 17
// console.log(countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0'])) // => 12
//--------------------------------------
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, makePizza,  onOrderError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//     } else {
//       return makePizza(pizzaName)
//     }
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
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// pizzaPalace.order('Vienna', makePizza, onOrderError);
//------------------------------------
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ];
// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   console.log(users.flatMap(({ friends }) => friends));
//  return  users.flatMap(({friends}) => friends).filter( friend => friend === friendName)
// };
// // Change code above this line
//-------------------35\48----------------------
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },J
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//  acc += (player.playtime / player.gamesPlayed);
// },0);

//--------------------48\48
// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//     .filter((user) => user.gender === gender)
//     .reduce((acc, user) => acc += user.balance)
// };
//--------------------Лекция THIS

// const arr = [1, 2, 3, 4, 5];
// const forEach = function (index = 0) {
//     if (index >= this.length) return;
//     console.log(this[index]);
//     // index += 1;
//     forEach.call(this, ++index);
// }

// forEach.call(arr);

//-----------16-12-2021--------

// const getSum = (arr) => {
//   const newArr = []
//   arr.reduce((acc, item) => {
//     if (acc === arr[0]) newArr.push(acc)
//     acc += item
//     newArr.push(acc)
//     return acc
//   })
//   return newArr
// }

// console.log(getSum([1, 2, 3, 4, 5]))
// //[1,3,6,10,15]


