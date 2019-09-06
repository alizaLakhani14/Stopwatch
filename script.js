let seconds = 0;
let minutes = 0;
let hours = 0;
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
let isRunning = true;

let stopWatch =  () => {
    seconds++;
    if (seconds / 60 == 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 == 1) {
            minutes = 0;
            hours++;
        }
    }
    if (seconds < 10) {
        displaySeconds = `0${seconds.toString()}`;
    } else {
        displaySeconds = seconds;
    }
    if (minutes < 10) {
        displayMinutes = `0${minutes.toString()}`;
    } else {
        displayMinutes = minutes;
    }
    if (hours < 10) {
        displayHours = `0${hours.toString()}`;
    } else {
        displayHours = hours;
    }
    document.querySelector("p").innerHTML = `${displayHours} : ${displayMinutes} : ${displaySeconds}`;

}

let Interval;

let startStopWatch = () =>{
    if(isRunning == true){
        Interval = setInterval(stopWatch, 1000);
        isRunning = false;
    }
   
}
let stopStopWatch =  () => {
    clearInterval(Interval);
    isRunning = true;
}

let resetStopWatch = () =>{
    seconds = seconds - seconds;
    minutes = minutes - minutes;
    hours = hours - hours;
    if (seconds == 0) {
        displaySeconds = `0${seconds.toString()}`;
    }
    if (minutes == 0) {
        displayMinutes = `0${minutes.toString()}`;
    } 
    if (hours == 0) {
        displayHours = `0${hours.toString()}`;
    } 
    document.querySelector("p").innerHTML = `${displayHours} : ${displayMinutes} : ${displaySeconds}`;
}