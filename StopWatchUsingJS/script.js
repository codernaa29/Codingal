window.onload = function () {
    let seconds = "00";
    let milliseconds = "00";

    let appendmilliseconds = document.getElementById("milliseconds");
    let appendseconds = document.getElementById("seconds");
    let buttonStart = document.getElementById("btn_start");
    let buttonStop = document.getElementById("btn_stop");
    let buttonRestart = document.getElementById("btn_restart");
    let interval;

    buttonStart.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(interval);
    }

    buttonRestart.onclick = function () {
        clearInterval(interval);
        milliseconds = "00" ;
        seconds = "00" ;
        appendmilliseconds.innerHTML = milliseconds;
        appendseconds.innerHTML = seconds;
    }

    function startTimer()  {
        milliseconds++;
        if(milliseconds <= 9) {
            appendmilliseconds.innerHTML= "0" + milliseconds;
        }
        if (milliseconds > 9) {
            appendmilliseconds.innerHTML = milliseconds;
        }
        if (milliseconds > 99) {
            seconds++;
            appendseconds.innerHTML = "0" + seconds;
            appendmilliseconds.innerHTML = "0" + 0;

        }
        if (seconds > 9) {
            appendseconds.innerHTML = seconds;
        }
    }
}