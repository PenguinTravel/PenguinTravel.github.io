// The End Of The Year Date To Countdown
// 1000 miliseoufs = 1 Secoud

let countDownDate = new Date("Oct 17, 2023 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() =>{
  // Get Date Now
  let dateNow =  new Date().getTime();
  
  // Find The Date Difference etween Noe And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units 
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor(dateDiff % (1000 * 60 * 60 ) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);


// End



