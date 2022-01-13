// const rootNode = document.querySelector('#date');

// const normalizeDate = (date) => {
//     date = new Date(date);
//     let result = '';

//     result += `${date.getFullYear()}-`;
//     result += `${(date.getMonth()+1).toString().padStart(2,0)}-`;
//     result += `${date.getDate().toString().padStart(2,0)} `;
//     result += `${date.getHours().toString().padStart(2,0)}:`;
//     result += `${date.getMinutes().toString().padStart(2,0)}:`;
//     result += `${date.getSeconds().toString().padStart(2,0)}`;

//     return result;
// }

// // добавляет секунду каждую секунду к текущему времени
// // rootNode.innerHTML = normalizeDate(Date.now()) // если это не написать, то будет задержка в 1 секунду
// // setInterval(() => {
// //     rootNode.innerHTML = normalizeDate(Date.now())
// // }, 1000);

// // отнимает секунду каждую секунду от текущего времени
// // let now = Date.now();
// // rootNode.innerHTML = normalizeDate(now)
// // setInterval(() => {
// //   now -= 1000;
// //   rootNode.innerHTML = normalizeDate(now)
// // }, 1000)

// //сохраним всё это в хранилище каждую секунду
// const dataNow = localStorage.getItem('now')
// let now = dataNow ? +dataNow : Date.now();

// rootNode.innerHTML = normalizeDate(now);

// setInterval(() => {
//     now -= 1000;
//     rootNode.innerHTML = normalizeDate(now);
//     localStorage.setItem('now', now)
// }, 1000);
//---------------Практика Алёна---------------------

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector
    this.targetDate = targetDate
    this.updateTimer()
    this.interval = null
  }

  updateTimer() {
    this.interval = setInterval(() => {
      const currentTime = Date.now()
      const time = this.targetDate - currentTime
      const daysEl = document.querySelector(
        `${this.selector} [data-value="days"]`
      )
      const hoursEl = document.querySelector(
        `${this.selector} [data-value="hours"]`
      )
      const minsEl = document.querySelector(
        `${this.selector} [data-value="mins"]`
      )
      const secsEl = document.querySelector(
        `${this.selector} [data-value="secs"]`
      )

      daysEl.textContent = Math.floor(time / (1000 * 60 * 60 * 24))
      hoursEl.textContent = String(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0")
      minsEl.textContent = String(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0")
      secsEl.textContent = String(
        Math.floor((time % (1000 * 60)) / 1000)
      ).padStart(2, "0")
    }, 1000)
  }
}

const timer1 = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2022"),
})

const timer2 = new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("Jul 17, 2023"),
})
//-----Вопрос - ответ Среда 12.01.2022-------
// function convertMs(ms) {
//   const hours = Math.floor(ms / 1000 / 60 / 60)
//   console.log(hours)
//   ms = ms - 1000 * 60 * 60 * hours
//   // console.log(ms)
//   const mins = Math.floor(ms / 1000 / 60)
//   console.log(mins)
//   ms = ms - mins * 1000 * 60
//   // console.log(ms)
//   const secs = Math.floor(ms/1000)
//   console.log(secs)
// }

// // function startTimer (e) {
//   let startTimeinMs = 5000000
// setInterval(() => {
//   startTimeinMs -= 1000
//   convertMs(startTimeinMs)
// }, 1000)


