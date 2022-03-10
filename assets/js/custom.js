const dayElem = document.querySelector("#days");
const hourElem = document.querySelector("#hours");
const minElem = document.querySelector("#mins");
const secElem = document.querySelector("#secs");
console.log(dayElem)

let countdown;
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 22, 30, 0);
console.log(futureDate)

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // const values = [days, hours, minutes, seconds];

  function format(value) {
    if (value < 10) {
      return (value = `0${value}`);
    }
    return value;
  }

  dayElem.innerHTML = format(days)
  hourElem.innerHTML = format(hours)
  minElem.innerHTML = format(minutes)
  secElem.innerHTML = format(seconds)

  if (t < 0) {
    clearInterval(countdown);
    // deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}

countdown = setInterval(function () {
  getRemainingTime()
}, 1000);
getRemainingTime();
