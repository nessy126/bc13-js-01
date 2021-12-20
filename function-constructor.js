// const student = {
//   name: "Bill",
//   email: "bill@ya.ru",
//   homeWorkResult: [
//     {
//       topic: "html",
//       success: true,
//     },
//   ],
//   showname() {
//     console.log(`Имя студента: ${this.name}, email: ${this.email}`)
//   },
//   addHomeWorkResults(value) {
//     this.homeWorkResult.push(...value)
//   },
//   getHomeWorkResults() {
//     console.log(this.homeWorkResult)
//   },
// };

// student.showname();
// student.addHomeWorkResults([
//   { topic: "css", success: true },
//   { topic: "js", success: false },
// ]);
// student.getHomeWorkResults();
//---------Функция-Конструктор---------
// const Student = function (name, email) {
//   const homeWorkResults = [];
//   this.showName = function () {
//     console.log(`Имя студента: ${name}, email: ${email}`);
//   };
//   this.addHomeWorkResults = function (topic, success) {
//     homeWorkResults.push({ topic, success });
//   }
//   this.getHomeWorkResults = function () {
//     console.log(homeWorkResults);
//   };
// };

// const studentOne = new Student('Anna', 'em@i.ua');
// const studentTwo = new Student('Ivan', 'ivan@i.ua');
// // const studentOne = new Student('Anna', 'em@i.ua')

// studentOne.showName();
// studentTwo.showName();
// studentOne.addHomeWorkResults('html', true);
// studentTwo.addHomeWorkResults('css', true);
// studentOne.getHomeWorkResults();
// studentTwo.getHomeWorkResults();
// console.log(studentTwo.name);
//--------------------------
const listOfStudents = [
  {
    name: "John",
    email: "john@gmail.com",
  },
  {
    name: "Jane",
    email: "jane@gmail.com",
  },
  {
    name: "Jack",
    email: "jack@gmail.com",
  },
  {
    name: "Mary",
    email: "mary@gmail.com",
  },
  {
    name: "Robert",
    email: "robert@gmail.com",
  },
  {
    name: "Ann",
    email: "ann@gmail.com",
  },
  {
    name: "Brad",
    email: "brad@gmail.com",
  },
  {
    name: "Lisa",
    email: "lisa@gmail.com",
  },
  {
    name: "Matthew",
    email: "matthew@gmail.com",
  },
  {
    name: "Sandra",
    email: "sandra@gmail.com",
  },
];

const homeworkResults = [
	{
		topic: 'HTML Basics',
		results: [
			{
				email: 'john@gmail.com',
				success: true,
			},
			{
				email: 'jane@gmail.com',
				success: true,
			},
			{
				email: 'jack@gmail.com',
				success: true,
			},
			{
				email: 'mary@gmail.com',
				success: true,
			},
			{
				email: 'robert@gmail.com',
				success: true,
			},
			{
				email: 'ann@gmail.com',
				success: true,
			},
			{
				email: 'brad@gmail.com',
				success: true,
			},
			{
				email: 'lisa@gmail.com',
				success: true,
			},
			{
				email: 'matthew@gmail.com',
				success: true,
			},
			{
				email: 'sandra@gmail.com',
				success: true,
			},
		],
	},
	{
		topic: 'CSS Basics',
		results: [
			{
				email: 'john@gmail.com',
				success: false,
			},
			{
				email: 'jane@gmail.com',
				success: true,
			},
			{
				email: 'jack@gmail.com',
				success: true,
			},
			{
				email: 'mary@gmail.com',
				success: false,
			},
			{
				email: 'robert@gmail.com',
				success: true,
			},
			{
				email: 'ann@gmail.com',
				success: true,
			},
			{
				email: 'brad@gmail.com',
				success: true,
			},
			{
				email: 'lisa@gmail.com',
				success: false,
			},
			{
				email: 'matthew@gmail.com',
				success: true,
			},
			{
				email: 'sandra@gmail.com',
				success: true,
			},
		],
	},
	{
		topic: 'JS Basics',
		results: [
			{
				email: 'john@gmail.com',
				success: true,
			},
			{
				email: 'jane@gmail.com',
				success: false,
			},
			{
				email: 'jack@gmail.com',
				success: true,
			},
			{
				email: 'mary@gmail.com',
				success: true,
			},
			{
				email: 'robert@gmail.com',
				success: true,
			},
			{
				email: 'ann@gmail.com',
				success: false,
			},
			{
				email: 'brad@gmail.com',
				success: true,
			},
			{
				email: 'lisa@gmail.com',
				success: true,
			},
			{
				email: 'matthew@gmail.com',
				success: false,
			},
			{
				email: 'sandra@gmail.com',
				success: true,
			},
		],
	},
	{
		topic: 'DOM',
		results: [
			{
				email: 'john@gmail.com',
				success: false,
			},
			{
				email: 'jane@gmail.com',
				success: true,
			},
			{
				email: 'jack@gmail.com',
				success: true,
			},
			{
				email: 'mary@gmail.com',
				success: true,
			},
			{
				email: 'robert@gmail.com',
				success: false,
			},
			{
				email: 'ann@gmail.com',
				success: true,
			},
			{
				email: 'brad@gmail.com',
				success: true,
			},
			{
				email: 'lisa@gmail.com',
				success: true,
			},
			{
				email: 'matthew@gmail.com',
				success: false,
			},
			{
				email: 'sandra@gmail.com',
				success: true,
			},
		],
	},
	{
		topic: 'AJAX',
		results: [
			{
				email: 'john@gmail.com',
				success: false,
			},
			{
				email: 'jane@gmail.com',
				success: true,
			},
			{
				email: 'jack@gmail.com',
				success: false,
			},
			{
				email: 'mary@gmail.com',
				success: true,
			},
			{
				email: 'robert@gmail.com',
				success: true,
			},
			{
				email: 'ann@gmail.com',
				success: false,
			},
			{
				email: 'brad@gmail.com',
				success: true,
			},
			{
				email: 'lisa@gmail.com',
				success: true,
			},
			{
				email: 'matthew@gmail.com',
				success: true,
			},
			{
				email: 'sandra@gmail.com',
				success: true,
			},
		],
	},
];

const Student = function (name, email) {
  const homeWorkResults = []
  this.getName = function () {
    return name
  }
  this.getEmail = function () {
    return email
  }
  this.getHomeWorkResults = function () {
    return homeWorkResults
  }
  this.addHomeWorkResult = function (topic, success) {
    homeWorkResults.push({ topic, success })
  }
}
// const student1 = new Student("Sam", "fghj@mail.com")
// console.log(student1.getName());
// student1.addHomeWorkResult("html", true);
// console.log(student1.getHomeWorkResults())

// ---------------------------------------
const FrontendSchool = function (students, faildLimit) {
  //сздали массив
  const superStudents = students.map(
    ({ name, email }) => new Student(name, email)
  )

  this.printStudents = function () {
    console.log(superStudents)
    superStudents.forEach((student) => {
      console.log(`Name: ${student.getName()}, Email: ${student.getEmail()}`)
      console.log(`HomeWorkResults: ${student.getHomeWorkResults()}`)
    })
  }

  this.addHomeworkResults = function () {

  }
}

const s = new FrontendSchool(listOfStudents, 1);
s.printStudents()
console.log(s)
//------------------------------------
// const FrontendLab = function (students, failedLimit) {
//   this.printStudentsList = function () {
//     // console.log(`${students} + ${this.}`)
//   }
// }

//----------------------------------
// class Student {
//     #name
//     #email
//     #homeWorkResults
//     constructor ({name, email}) {
//         this.#name =  name;
//         this.#email = email;
//         this.#homeWorkResults = [];
//     }

//     getName () {
//         return this.#name;
//     }
//     getEmail () {
//         return this.#email;
//     }
//     getHomeWorkResults (){
//         return this.#homeWorkResults;
//     }
//     addHomeWorkResult (topic,success) {
//         this.#homeWorkResults.push({topic, success})
//     }
// }
//  const student2 = new Student({name: "Sam", email: "sam@MediaList.com"});
//  console.log(student2);
// console.log(student2.getName())
