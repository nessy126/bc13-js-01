// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });
//==================================

// Change value of isSuccess variable to call resolve or reject
// const isSuccess = 0;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Will run first
// console.log("Before promise.then()");

// // Registering promise callbacks
// promise.then(
//   // onResolve will run third or not at all
//   value => {
//     console.log("onResolve call inside promise.then()");
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   error => {
//     console.log("onReject call inside promise.then()");
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// // Will run second
// console.log("After promise.then()");
//==================================
// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess("success value");
//     } else {
//       onError("error");
//     }
//   }, 2000);
// };

// const onFetchSuccess = user => {
//   console.log(user);
// };

// const onFetchError = error => {
//   console.error(error);
// };

// fetchUserFromServer("Mango", onFetchSuccess, onFetchError);
//===================
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() > 0.5) resolve(5)
//     else reject('error')
//   }),
// },

// )
//================================

// const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

// const imitatedServer = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//           if (Math.random() > 0.2) {
//             res(getRandomInt(10, 100))
//           }
//             else rej('oops!!!')
//         },getRandomInt(1000,5000))
//     })
// }

// Promise.all([imitatedServer(), imitatedServer()])
//   .then((arr) => {
//     console.log(arr)
//     return arr[0] + arr[1]
//   })
//   .then((arg) => {
//     console.log(arg)
//   })
//   .catch(console.log)
//-======Practic Promise===========
// const delay = ms => {
//   return new Promise( resolve => {
//     setTimeout(() => {
//       resolve(ms)
//     }, ms)
//   })
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(2500).then(logger); // Resolved after 1500ms
//=============================
// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];

// const toggleUserState = (allUsers, userName) => {

//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );
//   return new Promise(res => {
//   res(updatedUsers)
// })

// };

// const logger = updatedUsers => console.table(updatedUsers);

// /*
//  * Сейчас работает так
//  */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

// /*
//  * Должно работать так
//  */
// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);
// ..========Практика из домашек=============
// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const makeTransaction = (transaction) => {
//   const delay = randomIntegerFromInterval(200, 500);
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const canProcess = Math.random() > 0.3;

//       if (canProcess) {
//         res([transaction.id, delay]);
//       } else {
//         rej(transaction.id);
//       }
//     }, delay);
//   })
// }

// const logSuccess = ([id, time]) => {
//   console.log(`Transaction ${id} processed in ${time}ms`);
// };

// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };

// /*
//  * Работает так
//  */
// // makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// // makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// // makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// // makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
// /*
//  * Должно работать так
//  */
// makeTransaction({ id: 70, amount: 150 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 71, amount: 230 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 72, amount: 75 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 73, amount: 100 })
//   .then(logSuccess)
//   .catch(logError);
// ..============================
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(console.log)
//   .catch(error => {
//     // Error handling
//   });

//   const searchParams = new URLSearchParams({
//   _limit: 5,
//   _sort: "name",
// });

// console.log(`${searchParams}`);
// console.log(searchParams.toString()) // "_limit=5&_sort=name"

// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"

// //======================
// fetch("https://jsonplaceholder.typicode.com/users", {
//   headers: {
//     Accept: "application/json",
//   },
// }).then(response => {
//   // ...
// });
///-------------------------Лекция
console.log(fetch('htths://rickandmortyapi.com/api')).then((response) => {
  console.log(response)
}).catch((err) => {
  
});