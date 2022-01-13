// const span = document.querySelector('span.test-15');

// console.log([...span.classList]);

// span.classList.add('hello');
// span.classList.remove('test-15');
// span.classList.toggle('test-15');
// span.classList.replace('test-class', 'new-test-class');

// console.log(span.classList.contains('test-class'));
// console.log(span.classList.contains('hello'));

// console.log([...span.classList]);
// //===========================
// document.querySelectorAll('.b-index-lastsongs-item__pic').forEach(elem => elem.firstElementChild.style.borderColor = '#ff0000')
//----- Practic------------
// const refs = {
//   input: document.querySelector('#input'),
//   button: document.querySelector('.btn'),
// }

// const handler = event => {
//   console.log(refs.input.value)
// }
// refs.button.addEventListener('click', handler)
//--------------------
// const refs = {
//   bntRed: document.querySelector('.btn-red'),
//   bntGreen: document.querySelector('.btn-green'),
//   bntBlue: document.querySelector('.btn-blue'),
//   body: document.querySelector('body'),
// }

// function onClick(event) {
//   refs.body.style.backgroundColor = 'red';
// }

// refs.bntRed.addEventListener('click', onClick);
// refs.bntGreen.addEventListener('click',
//   () => refs.body.style.backgroundColor = 'green'
// )

// refs.bntBlue.addEventListener('click',
//   () => refs.body.style.backgroundColor = 'blue'
// )
//-------------------------------------
// document.body.style.backgroundColor = 'tomato';
// const refs = {
//   divEl: document.querySelector('div'),
//   inputEl: document.querySelector('input'),
// }
// const changeOpacity = () => refs.divEl.style.opacity = refs.inputEl.value / 100;

// refs.inputEl.addEventListener('input', changeOpacity)
// changeOpacity()
//--------------------------
// const refs = {
//   input1: document.querySelectorAll('input')[0],
//   input2: document.querySelectorAll('input')[1],
//   btn: document.querySelector('button'),
// }

// function sum(e) {
//   console.log(+refs.input2.value + +refs.input1.value)
// }
// refs.btn.addEventListener('click', sum)
//---------------------------
// const refs = {
//   input1: document.querySelector("#num-1"),
//   input2: document.querySelector("#num-2"),
//   result: document.querySelector("#res"),
//   actions: document.querySelector("#actions"),
// }

// actions.addEventListener("click", (e) => {
//   if (e.target.nodeName !== "BUTTON") return false
//   const action = e.target.textContent
//   let resShow;
  // console.log(action)

//   switch (action) {
//     case "+":
//       resShow = +refs.input1.value + +refs.input2.value;
//       break;
//     case "-":
//       resShow = +refs.input1.value - +refs.input2.value;
//       break;
//     case "*":
//       resShow = +refs.input1.value * +refs.input2.value;
//       break;
//     case "/":
//       resShow = +refs.input1.value / +refs.input2.value;
//       break;
//     case "^":
//       resShow = (+refs.input1.value) ** +refs.input2.value;
//       break;
    
//     case "%":
//       resShow = +refs.input1.value % +refs.input2.value;
//       break;
//   }
//   refs.result.value = resShow;
// })
//-------------------------------
// const refs = {
//   colors: document.querySelector('#colors'),
//   root: document.querySelector('#root'),
// }

// refs.colors.addEventListener('click', e => {
//   // console.log(e.target.nodeName)
//   console.log((e.target.textContent));
//   if (e.target.tagName !== 'BUTTON') return;
//   refs.root.style.backgroundColor = e.target.dataset.color;
// })
//==========================
// const result = _.add(2, 3);
// console.log(result);

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     console.log("Scroll handler call every 300ms");
//   }, 300)
// );

// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     console.log("Scroll handler call after 300ms pause");
//   }, 300,
//   {
//       leading: true,
//       trailing: false,
//     })
// );
//---------LocalStorage---------------
// let counter = +localStorage.getItem('counter');

// counter += 1;
// localStorage.setItem('counter', counter)
// const H1Element = document.querySelector('h1')
// H1Element.textContent = counter;
// console.log(H1Element)
//------------------------------

const titleBooks = JSON.parse(localStorage.getItem("titleBooks") || '[]')
const listEl = document.querySelector('ul')


function renderMarkup(titles) {
  const liesEl = titles.map(title => {
    return `<li>${title}  <button class="del">X</button></li>`
  }).join('')
  listEl.innerHTML = liesEl;
}
renderMarkup(titleBooks)
const inputEl = document.querySelector('input')
const btnEl = document.querySelector('button')
const delEl = document.querySelector('ul')

console.log(delEl)
btnEl.addEventListener('click', addBookFunction)
delEl.addEventListener('click', removeBook)

function addBookFunction(e) {
  if (!inputEl.value) return false;
  const newTitle = inputEl.value;
  titleBooks.push(newTitle)
  localStorage.setItem('titleBooks', JSON.stringify(titleBooks))
  renderMarkup(titleBooks)
  inputEl.innerHTML = ''
}

console.log(delEl)
function removeBook(e) {
  // console.log('lll')
  console.log(e.target.parentNone.textContant)
  // localStorage.removeItem(e.book)
}
// =====АЛЬТЕРНАТИВНОЕ РЕШЕНИЕ ДРУГИМ СТУДЕНТОМ=========

// const refs = {
//   button: document.querySelector('#mainBtn'),
//   input: document.querySelector('input'),
//   listEl: document.querySelector('ul'),
// };
// const titleBooks = JSON.parse(localStorage.getItem('titleBooks') || '[]');
// function renderMarkup(titles) {
//   const liesEl = titles
//     .map(title => {
//       return `<li>${title} <button>X</button></li>`;
//     })
//     .join('');
//   refs.listEl.innerHTML = liesEl;
// }
// renderMarkup(titleBooks);
// function addBook(e) {
//   if (refs.input.value === '') return false;
//   titleBooks.push(refs.input.value);
//   localStorage.setItem('titleBooks', JSON.stringify(titleBooks));
//   renderMarkup(titleBooks);
//   refs.input.value = '';
// }
// refs.button.addEventListener('click', addBook);
// const handleClick = e => {
//   if (e.target.nodeName !== 'BUTTON') return;
//   const index = titleBooks.findIndex(item => e.target.parentNode.textContent.includes(item));
//   titleBooks.splice(index, 1);
//   localStorage.setItem('titleBooks', JSON.stringify(titleBooks));
//   renderMarkup(titleBooks);
// };
// refs.listEl.addEventListener('click', handleClick);
