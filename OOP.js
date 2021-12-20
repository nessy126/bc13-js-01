// const animal = {
//   legs: 4,
//   usi: true,
//   ndddame: 'me',
// };

// const dog = Object.create(animal);
// dog.name = 'Mango';
// console.log(dog);

// const cat = {
//   name: 'Masik',
// }
// console.log(cat);
// console.log(animal.isPrototypeOf(dog))

// dog.legs = 2;
// console.log(dog.hasOwnProperty('legs'))
// console.log(dog.ndddame);
//--------------------------

// class User {
//   name
//   #age
//   #email
//   #role

//   // Объявление и инициализация статического свойства
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   }

//   static #takenEmails = []

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email)
//   }

//   constructor({ name, email, age, role }) {
//     this.name = name
//     this.#age = age
//     this.#email = email
//     this.#role = role
//     User.#takenEmails.push(email);
//   }

//   get role() {
//     return this.#role
//   }

//   set role(newRole) {
//     this.#role = newRole
//   }

//   // Геттер email
//   get email() {
//     return this.#email
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail
//   }

//   get age() {
//     return this.#age
//   }

//   set age(newAge) {
//     this.#age = newAge
//   }
// }

// class ContentEditor extends User {
//   // Тело класса ContentEditor
//   constructor({ name, posts }) {
//     // Вызов конструктора родительского класса User
//     super(name);
//     this.posts = posts;
//   }

//     addPost(post) {
//     this.posts.push(post);
//   }

// }

// const editor = new  ContentEditor({
//   name: 'Stasya',
//   // age: 17,
//   // email: "stasya@mail.com",
//   posts: [],
//     // role: User.Roles.EDITOR
// });
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.role); // "mango@mail.com"
// editor.addPost("post-1");
// console.log(editor.posts);

// const nastya = new User({
//   name: "Nastya",
//   age: 35,
//   email: "nessy126@gmail.com",
//   role: User.Roles.ADMIN,
// })
// console.log(nastya.role)

// const mango = new User({
//   name: "Манго",
//   age: 28,
//   email: "mango@mail.com",
//   role: User.Roles.EDITOR,
// })

//   ; (mango.age = 29), console.log(mango) // { name: "Манго", email: "mango@mail.com" }
// console.log(mango.email)
// console.log(mango.age)
// console.log(User.isEmailTaken("mango@mail.com"));

// const poly = new User({
//   name: "Поли",
//   email: "poly@mail.com",
// })
// console.log(poly) // { name: "Поли", email: "poly@mail.com" }

//---------------------------------
// class Car {
//   // Change code below this line
//   #price;
//   static MAX_PRICE = 50000;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > this.MAX_PRICE) {
//       return
//     }
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
// ----------Задача по 5 модулю из Scoology-------------------
// Задание 1
// Напиши функцию-конструктор Account, которая создает объект со 
// свойствами login и email.В prototype функции - конструктора добавь
//  метод getInfo(), который выводит в консоль значения полей login 
// и email объекта который его вызвал.

const Account = function (login, email) {
  
  this.login = login
  this.email = email
}

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com