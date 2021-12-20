// // callback
// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Поли", takeCall, leaveHoloMessage);
// //---------------------
// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log("Logging value: ", value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// // Передаем printValue как callback-функцию
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2
//------------------------------
// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });
// /-------------Лекция 10.12.2021------------Ваня
// const arr = [1, 'Bill', 15, 'Johny', 25];
// const filter = (array, call  back) => {
//   const arrOfNaums = [];
//   array.forEach((item, index, array) => {
//     if (callback(item, index, array)) {
//       arrOfNaums.push(item);
//     };
//   });
//   return arrOfNaums;
// }

// console.log(filter(arr, item => typeof item === 'number'));
// console.log(filter(arr, item => typeof item === 'number'));
// массив с цифрами--------------------
// const arr = [1, 15, 'Bill', 'johny', 25];

// const filter = (array, callback) => {
//   const newArray = [];

//   array.forEach((item, index, array) => {

//     if (callback(item, index, array)) {
//       newArray.push(item);
//     }

//   });
  
//   return newArray;
// };
// console.log(filter(arr, item => typeof item === 'number'));
// console.log(filter(arr, item => typeof item === 'string'));
// console.log(filter(arr, (item, index) => index % 2 === 0));
//-----------------
// Write function, which iterates over array and executes
// function on each element.
// const executeforEach = (array, cb) => {
//   // for (const num of array) {
//   //   cb(num);
//   // }
// };

// executeforEach([1,2,3], function(el) {console.log(el * 2)}) // 2 4 6
//--------------
// const a = [1, 2, 3];
// a.forEach(el => console.log(el * 2) );
//-----------------------
// numbers.forEach(function (number, index) {
//   // console.log(`Индекс ${index}, значение ${number}`);
// });