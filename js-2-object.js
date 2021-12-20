// /-------------------------------------
// Write a function that reverse an integer number. You can't use any array methods, besides push.
// reverseNumber() returns 54321
// function reverseNumber(number) {
//   let revStr = '';

//   const newString = String(number);
//   if (number > 0) {
//     for (let i = newString.length - 1; i >= 0; i -= 1) {
//       revStr += newString[i];
//       console.log(revStr);
//     }
//     return Number(revStr);
//   } else {
//     for (let i = newString.length - 1; i >= 1; i -= 1) {
//       revStr += newString[i];
//       console.log(revStr);
//     }
//     return Number(revStr) * -1;
//   }
// }

// console.log(reverseNumber(-12345));

//----------------------------------------
// function makeListFromRange(array) {
//   let newArr = [];
//   let secondArr = [];
//   if (array[0] > array[1]) {
//     newArr = [array[1], array[0]];
//   } else {
//     newArr = array;
//   }
//   for (let i = newArr[0]; i <= newArr[1]; i++) {
//     secondArr.push(i);
//     // console.log(newArr);
//   }
//   return secondArr;
// }
// console.log(makeListFromRange([2, 7]));
// console.log(makeListFromRange([8, 5]));

//----------------------
// const propName = "name";
// const user = {
//   age: 25,
//   [propName]: 'nnn',
// };

// // user[propName] = "Генри Сибола";
// console.log(user[propName]); // 'Генри Сибола'
//-------------------------
// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']
//----------------------------

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key + ': ' + book[key]);
//   // Значение свойства с таким ключом
//   // console.log(book[key]);
// }
//---------------------------

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Boss';

// console.log(animal);
// console.log(dog.legs);

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.table('Собственное свойство:' + key)
//   }

//   if (!dog.hasOwnProperty(key)) {
//     console.log('Заимствованное свойство:' + key)
//   }
// }

// for (const key in dog) {
//   if (Object.hasOwnProperty.call(dog, key)) {
//     console.log(key);
//     // console.log(Object.key(dog))
//   }
// }

// const keys = Object.keys(dog);
// console.log(keys)

// for (const key of keys) {
//   console.log(key);
//   console.log(dog[key])
// }
//-------------Лекция Объекты------------
// const books = [
//     {
//     title: "The Last Kingdom",
//       name: 'nlkm',
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "На берегу спокойных вод",
//         author: "Роберт Шекли",
//         rating: 8.51,
//     },
//     {
//         title: "Сон смешного человека",
//         author: "Федор Достоевский",
//         rating: 7.75,
//     },
// ];

// delete books[0].name;

// const addBook = function (title, autor, rating) {
//   books.push({ title, autor, rating });
// }

// const removeBook = function (title) {
//   let index;
//   for (let book of books) {
//     if (item.title === title) {
//       books.splice(books.indexOf(book), 1);
//       break;
//     }
//   }
// }

// addBook("Война и Мир", "Лев Толстой", 7.5);
// console.log(books);

//--------------------------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
// ];
// Var 1
// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }
// Var 2
// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
// Var 3
// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
// ------HW-3----byMySelf----
//12/41
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for ( const prop in object) {
//     if (object.hasOwnProperty(prop)) {
//       propCount += 1;
//     }
//     // console.log(object.hasOwnProperty(prop))
//   }

//   // Change code above this line
//   return propCount;
// }
//  countProps({ name: "Mango", age: 2 });
//  countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })
//---------------13\41------------
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);
// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values)
//---------------Дестриктуризация объектов----------

// const user = {
//   name: "Nessy",
//   age: 35,
//   boyfrienfs: {
//     Yalta: "Dima",
//     Kiev: "Andrey",
//   },
//   phone: [+79785150354, +380632408042],
// }

// const {
//   age: old,
//   phone,
//   city = "myTown",
//   boyfrienfs,
//   boyfrienfs: { Yalta },
// } = user
// console.log(old, Yalta, boyfrienfs, city, phone[0]);
// Деструктуризация массивов--------------

// const rgb = [155, 0, 28];
// const [red, green, blue] = rgb;

// console.log(blue);
//---------------
// const name = function (controlNum, ...params) {
//   const result = [controlNum];
//   for (const num of params) {
//     if (num % controlNum === 0) {
//       result.push(num)
//     }
//   }
//   return result;
// };
// console.log(name(3,4,5,6,7,8,9,10,30))
// найти сумму четных и не четных в зависеммости от первого параметра
// const sum = function (firstNum, ...args) {
//   let total = firstNum;
//   for (const arg of args) {
//     if (firstNum % 2 === arg % 2) {
//       total += arg;
//     }
//   }
//   return total;
// };

// console.log(sum(6, 2, 3, 4, 5));
//08-12-21 Wensday - sreda - Practice---

// Write a function that converts the argument values. If it will be a string, convert it to number and wise versa.
// It should return an array of converted values.
// convert('1', 2, 3, '4') // [1, '2', '3', 4]
//-----------------------------
// function revers(...params) {
//   const result = [];
//   for (const param of params) {
//     // console.log(param);

//     if ( typeof(param) === 'number') {
//       result.push(String(param));
//       // console.log(String(param))
//     }else {
//     result.push(Number(param));
//     }
//     return result;
//   }

// }
// console.log(revers('1', 2,3, '4'))
//----------------14\41----------------
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
//   console.log(keys)

//   // for (const key in object) {
//   //   if (object.hasOwnProperty(key)) {
//   //     propCount += 1;
//   //   }
//   // }
//   for (const key of keys) {
//     propCount += 1;

//     // Change code above this line
//   }
//    return propCount;
// }

// console.log(countProps({ name: "Mango", age: 2 }))
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))
// 18\41

//   const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     const {name, price} = product;
//       if (name === productName) {
//       return price
//     }
//   }
//   return null;
// }
// console.log(getProductPrice("Radar"))
//19\41
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ]

// function getAllPropValues(propName) {
//   // Change code below this line
//   const names = []
//   const prices = []
//   const quantiteis = []

//   for (const product of products) {
//     const keys = Object.keys(product)
//     for (const key of keys) {
//       if (propName === key) {
//         names.push(product[key])
//       }
//     }
//   }
//   console.log(names)
//   return names
// }

// console.log(getAllPropValues("name"))
// console.log(getAllPropValues("quantity"));
//-----------20\41
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
//  for (const product of products) {
//     const {name, price, quantity} = product;
//       if (name === productName) {
//       return price * quantity;
//     }
//   }
//   return 0;
//   // Пиши код выше этой строки
// }
//------------25\41
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg" },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//   } = forecast;

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;
//26\41
// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//     today: {
//       low: todayLow,
//       high: todayHigh,
//     },
//     tomorrow: {
//       low: tomorrowLow,
//       high: tomorrowHigh,
//     }
//   } = forecast
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// 35\41----------
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     // console.log(this.books.indexOf(oldName))
//     if (this.books.includes(oldName)) {
//       let index = this.books.indexOf(oldName)
//      this.books.splice(index, 1, newName)
//    }

//     // Change code above this line
//   },
// };

// // bookShelf.updateBook("Haze", "Dungeon chronicles")
// bookShelf.updateBook("The last kingdom", "Dune")
/// 37\41------------------
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {

//     return this.potions
//   }
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions())
// 39\41-----------------
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     for (const el of this.potions) {
//       // console.log(this.potions)
//       // console.log(el)
//       // console.log(el.indexOf(potionName))
//       if (el === potionName) {
//         const index = this.potions.indexOf(potionName)
//         // console.log(this.potions)
//         // console.log(index)
//         this.potions.splice(index, 1)
//       }
//     }
//     return this.potions
//     // Change code above this line
//   }
// }
// console.log(atTheOldToad.removePotion("Dragon breath"))
// console.log(atTheOldToad.removePotion('Speed potion'))
//-----40\41---------

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     for (const el of this.potions) {
//        if (el === oldName) {
//         const index = this.potions.indexOf(oldName)
//         // console.log(this.potions)
//         // console.log(index)
//         this.potions.splice(index, 1, newName)
//       }
//     }
//     return this.potions
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"))
//-----------41\41--------

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    console.log(this.potions)
    return this.potions
  },
  addPotion(newPotion) {
    const { name } = newPotion
    console.log(name)
    for (const value of this.potions) {
      if (name === value.name) {
        return `Error! Potion ${name} is already in your inventory!`
      }
    }
    this.potions.push(newPotion)
  },
  removePotion(potionName) {
    let index;

    for (const fullObj of this.potions) {
      console.log(fullObj)
      console.log(fullObj.name)
      if (potionName === fullObj.name) {
        index = this.potions.indexOf(fullObj)
        console.log(index)
        this.potions.splice(index, 1);
        console.log(this.potions)
      }
    
    }
    return `Potion ${potionName} is not in inventory!`
  },
  updatePotionName(oldName, newName) {
    let index;
    
    for (const fullObj of this.potions) {
      if (oldName === fullObj.name) {
        fullObj.name = newName
        console.log(this.potions)
      }
    }
    // Change code above this line
  },
}
//  atTheOldToad.getPotions()
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }))
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }))
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"))
console.log(atTheOldToad.updatePotionName('Dragon breath',
  'Polymorth'))
