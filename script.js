const elTimeRemaining = document.getElementById("time")
const elSessionTimeInMinutes = document.getElementById("session-time")
const elBreakTimeInMinutes = document.getElementById("break-time")
const elSessionUp = document.getElementById("session-up")
const elSessionDown = document.getElementById("session-down")
const elBreakUp = document.getElementById("break-up")
const elBreakDown = document.getElementById("break-down")
const elPlayButton = document.getElementById("play-button")
const elPauseButton = document.getElementById("pause-button")
const elStopButton = document.getElementById("stop-button")
const elResetButton = document.getElementById("reset-button")

// Set event listeners on elements
elPlayButton.addEventListener('click', startTimer)
elPauseButton.addEventListener('click', pauseTimer)
elStopButton.addEventListener('click', stopTimer)
elResetButton.addEventListener('click', resetTimer)
elSessionUp.addEventListener('click', increaseSessionTime)
elSessionDown.addEventListener('click', decreaseSessionTime)
elBreakUp.addEventListener('click', increaseBreakTime)
elBreakDown.addEventListener('click', decreaseBreakTime)

// Set initial session time
let sessionMinutes = 25
let sessionSeconds = 0
let sessionTime = sessionMinutes + ":" + (sessionSeconds > 9 ? sessionSeconds : "0" + sessionSeconds)

elTimeRemaining.textContent = sessionTime

// Set initial break time
let breakMinutes = 5
let breakSeconds = 0
let breakTime = breakMinutes + ":" + (breakSeconds > 9 ? breakSeconds : "0" + breakSeconds)

// timer(sessionMinutes, sessionSeconds)

function timer(minutes, seconds) {
    // Get total number of seconds
    seconds += minutes * 60
    while (seconds > 0) {
        setTimeout(computeTimeRemaining(seconds), 1000)
        seconds--
    }
}

function computeTimeRemaining(seconds) {
    elTimeRemaining.textContent = formatTime(seconds)
    // return seconds = seconds - 1
}

function formatTime(seconds) {
    let min = Math.floor(seconds / 60)
    let sec = seconds % 60
    return min + ":" + (sec > 9 ? sec : "0" + sec)
}

function startTimer() {
    timer(sessionMinutes, sessionSeconds)
    // alert("play feature not implemented yet")
}

function pauseTimer() {
    // TODO
    alert("pause feature not implemented yet")
}

function stopTimer() {
    // TODO
    alert("stop feature not implemented yet")
}

function resetTimer() {
    // Conditional statement to run only when timer not active
    sessionTime = sessionMinutes + ":" + (sessionSeconds > 9 ? sessionSeconds : "0" + sessionSeconds)
    elTimeRemaining.textContent = sessionTime
}

function increaseSessionTime() {
    // Prevent user from exceeding 60 minutes
    if (sessionMinutes == 60) {return alert("whoa nelly!  low down there, champ!")}
    elSessionTimeInMinutes.textContent = ++sessionMinutes
}

function decreaseSessionTime() {
    // Prevent user from setting a negative amount of time
    if (sessionMinutes > 0) {elSessionTimeInMinutes.textContent = --sessionMinutes}
}

function increaseBreakTime() {
    // Cap break time at 10 minutes
    if (breakMinutes >= 10) {return alert("maybe do some work, huh?")}
    elBreakTimeInMinutes.textContent = ++breakMinutes
}

function decreaseBreakTime() {
    elBreakTimeInMinutes.textContent = --breakMinutes
}