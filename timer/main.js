const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const newYears = '15 jan 2022';

function countDown(){
    const newDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newDate - currentDate) / 1000 ;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24 ;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const sec = Math.floor(totalSeconds) % 60 ;

    console.log(days, hours, mins, sec);

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = mins;
    secondsElement.innerHTML = sec;
    

}

countDown();

setInterval(countDown, 1000)