/*
    JavaScript Archive by: @arthurferreira-dev
    LICENSE: MIT License
*/

// Variables
let SecondsCache = 0;
let MinuteCache = 0;
let HourCache = 0;
let timer = document.getElementById('timers');
let btn = document.getElementById('start');
let interval;

// Start Function Cronômetro
function start() {
    if (SecondsCache >= 60) {
        SecondsCache = 0;
        MinuteCache += 1;
    } else if (MinuteCache >= 60) {
        MinuteCache = 0;
        HourCache += 1;
    }

    SecondsCache += 1;

    const format = (num) => (num < 10 ? `0${num}` : num);

    timer.innerHTML = `${format(HourCache)}:${format(MinuteCache)}:${format(SecondsCache)}`;
}

btn.addEventListener('click', function() {
    if (!interval) {
        interval = setInterval(start, 1000);
    }
})

// Reload Page Function
function ReloadPage() {
    location.reload()
}