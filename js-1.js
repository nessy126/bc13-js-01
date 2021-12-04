// "use strict";

// console.log("JavaScript is awesome".length);
// console.log("JavaScript is awesome".toUpperCase());

// const yearOfBirth = 1986;
// console.log(yearOfBirth);

// const message = "JavaScript is awesome!";
// alert(message);

// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);
// console.log(typeof hotelName);

// let a = 5;
// let b = 8;
// let c = Number(b);
// const d = c + a;
// console.log(c);
// console.log(typeof c)
// console.log(d);

// console.log(Number(b));
// console.log(typeof Number(b));

// console.log(Number.isNaN(b));

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log(0.17 * 100);
// console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(5)); // 0.41000

// const varable = Math.round(Math.random() * (10 - 1) + 1);

// console.log(); // случайное число между 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10
// console.log(varable);

// Используя переменные необходимо составить строку с подставленными значениями
// const guestName = "Манго";
// const roomNumber = 207;
// const greeting =
//   "Welcome " + guestName + ", your room number is " + roomNumber + "!";
// console.log(greeting); // "Welcome Mango, your room number is 207!"

// console.log(`Welcome ${guestName}, your room number is ${roomNumber}!`)

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   result = message.length < maxLength ? message : message.slice(0, maxLength) ;
//   /// Change code above this line
//   return result;
// }
// formatMessage("Curabitur ligula sapien", 23);
// formatMessage("Curabitur ligula sapien", 16);

// let result;
// function formatMessage(message, maxLength) {

//   // Change code below this line

//   if (message.length < maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength - 1) + '...';
//   }

//  console.log(result)
//   // result = message.length < maxLength ? message : message.slice(0, maxLength) ;
//   /// Change code above this line
//   return result;

// }

// formatMessage("Curabitur ligula sapien", 16);
// formatMessage("Curabitur ligula sapien", 16)
// formatMessage("Curabitur ligula sapien", 23)
// formatMessage("Vestibulum facilisis purus nec", 20)
// formatMessage("Vestibulum facilisis purus nec", 20)
// formatMessage("Vestibulum facilisis purus nec", 30)
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)

// function checkForName(fullName, name) {
//   const result = fullName.toLowerCase().includes(name.toLowerCase());
//  // Change this line
//   console.log(result)
//   retВrn result;
// }
// checkForName("Egor Kolbasov", "Egor")
// checkForName("Egor Kolbasov", "egor")
// const nameB = prompt("Напишите Ваше имя");
// const amount = parseFloat(prompt("Напишите сумму Вашего чека"));
// const tea = parseFloat(prompt("Какой процент чаевых Вы хотите оставить?"));

// console.log(nameB, amount, tea);

// const tip = Number((amount * (tea / 100)).toFixed(2));
// console.log(tip)

// const totalPrice = amount + tip;
// alert(`${nameB.toUpperCase()}! \n Cумма Вашего заказа вместе с чаевыми составляет: ${totalPrice} гривень`)

// const input = prompt("Введите, пожалуйста, слово, количество букв в котором делится на 2");
// console.log(input);

// const message = input.length / 2;
// const first = (input.slice(message - 1, message + 1));J
// alert(first);
//--------------------------

// const inputOdd = prompt("Введите, пожалуйста, слово")
// let message
// // const message2 = inputOdd.slice(((inputOdd.length) - 1) / 2, (((inputOdd.length) - 1) / 2) + 1);
// console.log(inputOdd)
// if (inputOdd === null || inputOdd.trim() === "") {
//   alert("Invelid value");
// } else {
//   if (inputOdd.length % 2 === 0) {
//     message = inputOdd.slice((inputOdd.length / 2 - 1, inputOdd.length 2 + 1));
//   } else {
//     message = inputOdd.slice(
//       (inputOdd.length - 1) / 2,
//       (inputOdd.length - 1) / 2 + 1
//     )
//   }
// }

// --------------------------------
// console.log(inputOdd);
// console.log(message2);
// alert(`Средняя буква в Вашем слове: ${message2}`)

// const a = 'Константинополь';
// console.log(a.length);
// a.slice(3, 8);
// console.log(a.slice(7,13));

// let counterClient = 18;
// const maxClients = 24
// while (counterClient <= maxClients) {
//   console.log(counterClient)
//   counterClient += 1;
// }

// let password = "";

// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На каждой итерации будем проверять совпадает ли элемент массива с
//   // именем клиента. Если совпадает то мы записываем в message сообщение
//   // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }

//   // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = "Клиента с таким именем нету в базе данных!";
// }

// console.log(message); // "Клиент с таким именем есть в базе данных!"

// const nameV = "Mango";
// console.log(nameV.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript это интересно";
// console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]

// const fruit = "apple";

// if (
//   fruit === "appfffle" ||
//   fruit === "strawberry" ||
//   fruit === "cherry" ||
//   fruit === "cranberries"
// ) {
//   console.log("It is a red fruit!");
// }

// // Выносим варианты в массив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherrly";
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// const numbers = [];

// numbers.push('mellow');
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

// function getExtremeElements(array) {
//   // Change code below this line
//   let newArray;

//   for (const element of array) {
//     if (element === array[0]) {
//       newArray.push(element);
//     }
//     if (element === array[array.lenth - 1]) {
//       newArray.push(element)
//     }
//   }
// }

// getExtremeElements([1, 2, 3, 4, 5]);
// Change code above this line

// const test = [1, 2, 3, 4, 5];
// const firstEl = test[0]
// console.log(firstEl)
// const newTest = [newTest.push(firstEl)];
// console.log(newTest)
// // const lastEl = test.push(firstEl)

// const num = 2;
// const factor = 10;
// let result = 1;

// for (let i = 1; i <= factor; i += 1) {
//   result = result * factor;
//   }
//   console.log(result);

// const number1 = 2;
// const number2 = 10;
// let total = 1;
// for (let i = 0; i < number2; i += 1) {
//   total = total * number1;
// }
// //2^10 2*2*2*2*2*2*2*2*2*2
// console.log(total);

// const str = 'подотряд класса пресмыкающихся отряда чешуйчатые';
// let res = "";

// for (let i = 0; i < str.length; i++) {
//   // console.log(res);
//   if (i % 2) {
//     res = res + '*';
//   } else {
//     res = res + str[i];
//   }
// }
// console.log(res);
// for (let i = 0; i < str.length; i+=2) {
//   res += str[i] + "*";

// }
// console.log(res);
// let total = 0;
// let num;

// do {
//   num = prompt('Введите цифры');

//   if (!isNaN(num)) {
//     total += Number(num);
//   }

//   // console.log(num);
// } while (num !== null)

// console.log(total)
// __________________________________
// Write the code which verify user rights.
// Step 1. Check login
// 	Ask user for a login // use prompt()
// const input = prompt("Введите логин")
// let password

// const time = new Date().getHours()
// console.log(time)

// // let message;
// if (input === "" || input === null) {
//   alert("Canceled")
// } else if (input.length < 4) {
//   alert("I dont know any users having name length less than 4 symbols")
// } else if (input === "User" || input === "Admin") {
//   password = prompt("Введите пароль")
// } else {
//   alert("I don’t know you")
// }

// if (password === "") {
//   alert("Canceled")
// } else if (
//   (input === "User" && password === "UserPass") ||
//   (input === "Admin" && password === "RootPass")
// ) {
//   if (input === "User" && time > 5 && time < 20) {
//     alert("Good day, dear User!")
//   } else if (input === "Admin" && time > 5 && time < 20) {
//     alert("Good day, dear Admin!")
//   } else if (input === "Admin" && time < 5 && time > 20) {
//     alert("Good evening, dear Admin!")
//   } else if (input === "User" && time < 5 && time > 20) {
//     alert("Good day, dear User!")
//   }
// } else {
//   alert("Wrong password")
// }
// 	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
// 	If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”.
// 	If it’s another string – then show “I don’t know you”.
// 	If the visitor enters "User" or "Admin", then prompt for a password.
//
// Step 2. Check password:
// 	For an empty string or cancelled input, show “Canceled.”
// 	For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”.
// In other case, show “Wrong password”.

// Step 3. Greets the user appropriately:
// 	If the current time in hours is more then 5.00 and less then 20: // current hours – new Date().getHours()
// 	For “User” show “Good day, dear User!”
// 	For “Admin” show “Good day, dear Admin!”
// 	In other way:
// 	For “User” show “Good evening, dear User!”
// 	For “Admin” show “Good evening, dear Admin!

// const time = new Date().getHours();
// console.log(time);

//--------------------------------------

// function getExtremeElements(array) {
//   // Change code below this line
//   let newArray = [];

//   for (const arr of array) {
//     if (arr === array[0]) {
//       newArray.push(arr);
//     }
//     if (arr === array[array.length - 1]) {
//       newArray.push(arr)
//     }
//   }
//   return newArray
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]))
//--------------------------------------
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "))
// -------------------------------------
// function slugify(title) {
//   // Change code below this line
//   const words = title.toLowerCase();
//   console.log(words);
//   const urlArr = words.split(' ');
//   console.log(urlArr);
//   const url = urlArr.join('-');
//   console.log(url);

// return url;
//   // Change code above this line
// }
// console.log(slugify("Arrays for begginers"));
//---------------------------------

// function calculateTotal(number) {
//   // Change code below this line
//   let total;
//   for (let i = 0; i <= number; i += 1) {
//     const sum = i + i;
//      console.log(sum)
//     return sum;
//   }
//   // Change code above this line
// }

// calculateTotal(15);
//------------------------

// function findLongestWord(string) {
//   // Change code below this line
//   const words = string.split(" ")
//   console.log(words)
//   let wordBigger = words[0]
//   console.log(wordBigger)

//   for (const word of words) {
//     if (word.length > wordBigger.length) {
//       wordBigger = word;
//       console.log(wordBigger)
//     }
//    }
//  return wordBigger
//   // Change code above this line
// }
// findLongestWord("The quick brown fox jumped over the lazy dog")
//--------------------------------------

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let newArr = [];
//   for (let i = 0; i < array1.length; i += 1) {
//       if (array2.includes(array1[i])) {
//         console.log(array1[i])
//         newArr.push(array1[i])
//   }
//   }
//   return newArr;
// }

// getCommonElements([1, 2, 3], [2, 4])//
//------------------------------
//res = [1,2,3,4,5,0,0,0,9,10]

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// a.fill(0, 5, 8)
// // console.log(a)//-----------------
// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];
// // Result: ["a", "b", "c", "a", "b", "c", "g", "h"];
// // a.splice(3, 3, a[0], "b", "c");
// a.copyWithin(3,0, 2)
// console.log(a)
//-----------------------------
// Result: ["a", "b", "c", 0, 1, 2, 3];
// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;
// // const z = b.join(',').split(',')
// // // console.log(z)
// // const d = [];

// // for (const item of z) {
// //   d.push(Number(item));
// // }
// // const res = a.concat(c,d)
// //   console.log(res)

// const b2 = [b[0]].concat(b[1])
// console.log(b2)
//------------------------------
// const a = [1, 2, [3, 4], [5, 6], 7];
// const newArray = [];
// for (const item of a) {
//   if (!Array.isArray(item)) {
//     newArray.push(item);
//   } else {
//     newArray.push(item[0]);
//     newArray.push(item[1]);
//   }
// }
// console.log(newArray);
//-----------------------------
// const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// const z = arr4.flat(Infinity);
// console.log(z)
// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Функции
function multiply(...args) {
  let total = 1;

  for (const argument of arguments) {
    total *= argument;
  }
  // const args = Array.from(arguments);
  console.log(args)

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  10
console.log(multiply(1, 2, 3, 4, 5)); //  15