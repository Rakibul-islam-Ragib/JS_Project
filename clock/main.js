const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();

// second timing ...........
    const second = now.getSeconds();
    const secondDegree = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

// minutes timing.............
    const mins = now.getMinutes();
    const minsDegree = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegree}deg)`;

// hours timing..........
    const hour = now.getHours();
    const hoursDegree = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

    console.log(second);
}

setInterval(setDate, 1000);