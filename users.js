const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
]

// const names = [];
//   users.forEach(us => {
//     names.push(us.name);
//   });
//   console.log(names)
//---------------------
// Write a function that checks is array contains arg passed as
//   a parameter value and return true in this case. Reuse function
//   from task 2.

// const containsValue = (arr, num) => {
// let result = false;
//   arr.forEach((element) => {
//     if (element === num) {
//       result = true;
//     }
//   });
//   return result;
// }

// console.log(containsValue([2, 5, 8], 2))  // returns true
// console.log(containsValue([12, 4, 6], 5))  // returns false
//-------------------------
// Write a function that accepts an array of object and
// returns new array of values by passed key name.
// const fruits = [
//   { name: "apple", weight: 0.5 },
//   { name: "pineapple", weight: 2 },
// ]

// const result = []
// const getArrayOfKeys = (array, param) => {
//   array.forEach((element) => {
//     result.push(element[param])
//   });
//   return result
// }
// console.log(getArrayOfKeys(fruits, "name"))
// // returns [‘apple’, ‘pineapple’]
//---------------------------
// // // Write function substitute() that accepts an array of
// numbers and manages to replace all numbers lower than 20 and
// greater than 10
// // // with '*'. It should return a new array with numbers and '*'
// instead of these numbers.

// const substitute = (array) => {
//   const newArray = [...array]
//   newArray.forEach((element, index) => {
//     if (element < 20 && element > 10) {
//       newArray.splice(index, 1, "*")
//     }   return newArray;
// }

// console.log(substitute([58, 14, 48, 12, 31, 19, 10]))

// returns [58, '*', 48, '*', 31, '*', 10]
//Выыести все возраста в массив-----------
// const userAges = [];
// for (const user of users) {
//   userAges.push(user.age)
//  }
//  console.log(userAges)
// // ----------------------
// const arrayOfSkills = [];
// // / Вариант 1
// for (const user of users) {
//   console.log(user.skills)
//   arrayOfSkills.push(user.skills)
// }
// const summurySkills = arrayOfSkills.flat()
// console.log(summurySkills)

// const uniqSkills = [];

// for (const skill of summurySkills) {
//   if (!uniqSkills.includes(skill)) {
//     uniqSkills.push(skill);
//   }
// }
// console.log(uniqSkills);

//------Вариант 2--------
// let newArr = [];
// for (const user of users) {
//   // arrayOfSkills
//   newArr = arrayOfSkills.concat(user.skills)
// }
// console.log(newArr)
//--------------------

// вывести все значения свойств всех объектов

// let values = [];
// for (const user of users) {
//   const value = Object.values(user)
//   values.push(value)
// }
// console.log(values);

// const allValues = values.flat(3);
// console.log(allValues);

//08-12-21 Wensday - sreda - Practice---
// console.log('hello')
// const totalUsers = {
//   id: [],
//   name: [],
//   email: [],
//   eyeColor: [],
//   friends: [],
//   isActive: [],
//   balance: [],
//   skills: [],
//   gender: [],
//   age: [],
// }
// console.log(users.length)

// for (let i = 0; i < users.length; i += 1) {
//   const {
//     id,
//     name,
//     email,
//     eyeColor,
//     friends,
//     isActive,
//     balance,
//     skills,
//     gender,
//     age,
//   } = users[i]
//------------------------
//   totalUsers.id.push(id)
//   totalUsers.name.push(name)
//   totalUsers.email.push(email)
//   totalUsers.eyeColor.push(eyeColor)
//   totalUsers.friends.push(friends)
//   totalUsers.isActive.push(isActive)
//   totalUsers.balance.push(balance)
//   totalUsers.skills.push(skills)
//   totalUsers.gender.push(gender)
//   totalUsers.age.push(age)
// }

// console.log(totalUsers);

// let { friends, skills } = totalUsers;
// friends = friends.flat();
// skills = skills.flat();
// console.log(friends, skills);
// console.log(totalUsers);
// // console.log(totalUsers.id)
//-------------------------

// for (const user of users) {
//   // console.log(user)
//    totalUsers.id.push(user.id)
// }
// console.log(totalUsers)

// for (const product of products) {
//   const key = Object.keys(product);
//   const val = Object.values(product);
//   for (i = 0; i < key.length; i++) {
//     if (propName === key[i]) {
//       arg.push(val[i]);
//     }
//   }
// }

//------------------------
// function uniq(params) {
//   const newUniq = [];
//   for (const param of params) {
//     if (!newUniq.includes(param)) {
//       newUniq.push(param)
//     }
//   }
//   return newUniq;
// }
// console.log(uniq([1, 3, 1, 5, 7, 3]))
// // console.log(uniq(newObject[key]))
// //----------------------------

// const newObject = {};
// // const preFinalNewObject =
// function owrKeys (users) {
//   // for (const user of users) {
//     // const keys = Object.keys(user);
//     // for (const key of keys) {
//     //   console.log(key)
//     //   newObject[key] = [];
//     // }
//   for (const key in users[0]) {
//     // console.log(key);
//     console.log(key)
//       newObject[key] = [];
//   }
// }
// // console.log(newObject)
// owrKeys(users);

// for (const key in newObject) {
//     for (const user of users) {
//     // console.log(key);
//     // console.log(key[user[key]])
//     // const keys = Object.key(user)
//     // console.log(newObject[key])
//     newObject[key].push(user[key])
//     // newObject[key].flat(2)
//     }
//   if (Array.isArray(key[key])) {
//       let a = [];
//       a = key[key].flat();
//       console.log(a);
//   }
// }

// const values = Object.values(newObject);
// console.log(values)
// for (const value of values) {
//   console.log(value)
//   for (const el of value) {
//     if (Array.isArray(el)) {
//       let a = [];
//       a = value.flat();
//       console.log(a);
//   }
//   }
// }

// // console.log(values)

// console.log(newObject)

//-----------------------------

// const arr = [];
// for(let user of users) {
//   arr.push(user.age);
// }
// console.log(arr)
// const arr = [];
// for(let user of users) {
//   arr.push(user.skills)
// }
// const arr1 = arr.flat();
// console.log(arr1)
// const arr2 = [];
// for(const item of arr1) {
//   if(arr2.includes(item) === false){
//     arr2.push(item)
//   }
// }
// console.log(arr2)
// const arr = [];
// for(const user of users) {
//   const value = Object.values(user);
//   // arr.push(value)
//   arr.push(value)
// }
// const arr1 = arr.flat()
// console.log(arr1)
