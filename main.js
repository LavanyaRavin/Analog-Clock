// const hour = document.querySelector('.hrs');
// const minute = document.querySelector('.min');
// const second = document.querySelector('.sec');

// setInterval(runClock, 1000);

// function runClock() {
//     const time = new Date();
//     console.log(time)
//     const sec = time.getSeconds() / 60;
//     console.log(sec)
//     const min = (sec + time.getMinutes()) / 60;
//     console.log(min)
//     const hrs = (min + time.getHours()) / 12;
//     console.log(hrs)
//     hour.style.setProperty('--rotation', hrs * 360);
//     minute.style.setProperty('--rotation', min * 360);
//     second.style.setProperty('--rotation', sec * 360);

// }
// runClock();

// var second = 0;
// var minute = 0;
// var hour = 0;
// var d=new Date();

setInterval(
    function runClock(){
      var  d = new Date();
      var  second = d.getSeconds() * 6;
      var  minute =d.getMinutes() * 6;
      var  hour = d.getHours() * 30 + Math.round(minute/12);
        document.getElementById("second-hand").style.transform = "rotate("+ second +"deg)";
        document.getElementById("minute-hand").style.transform = "rotate("+ minute +"deg)";
        document.getElementById("hour-hand").style.transform = "rotate("+ hour +"deg)";
    }, 1000
);

runClock();