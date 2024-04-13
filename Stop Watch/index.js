let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime"); 
let timer = null;

function stopWatch() {
    seconds++;
    if(seconds == 60) {
        seconds = 0;
        minutes++;
        if(minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let formattedHours = hours.toString().padStart(2, '0');
    let formattedMinutes = minutes.toString().padStart(2, '0');
    let formattedSeconds = seconds.toString().padStart(2, '0');
    displayTime.innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function watchStart() {
    if(timer === null) {
        timer = setInterval(stopWatch, 1000);
    }
}

function watchStop() {
    clearInterval(timer);
    timer = null;
}

function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = '00:00:00';
    timer = null;
}
