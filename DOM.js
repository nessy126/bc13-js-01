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
const refs = {
  input1: document.querySelectorAll('input')[0],
  input2: document.querySelectorAll('input')[1],
  btn: document.querySelector('button'),
}

function sum(e) {
  console.log(+refs.input2.value + +refs.input1.value)
}
refs.btn.addEventListener('click', sum)