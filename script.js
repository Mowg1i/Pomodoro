//import jquery

var title = document.getElementById("title");
var pomoInner = document.getElementById("pomoinner");
var pomoButton = document.getElementById("pomobutton");
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var startMins = 25;
var mins = 25;
var secs = 0;
var timerPause = true;
var intervalId;

// update timer display function. Takes the time and makes it pretty.

function displayTime() {
  var prettySecs = secs;
  if (secs.toString().length < 2) {
    prettySecs = "0" + secs.toString();
  }

  pomoInner.innerHTML = mins + ":" + prettySecs;
}

displayTime();

// timer function - count down from mins. run multiple times using setInterval. when timer reaches zero, stop timer function and reset to default mins. ( the user set mins)

function updateTime() {
  if (timerPause === false) {
    if (secs > 0) {
      secs -= 1;
    } else if (mins > 0) {
      secs = 59;
      mins -= 1;
    } else if (mins === 0 && secs === 0) {
      mins = startMins;
      timerPause = true;
      title.innerHTML = "TAKE A BREAK!";
      pomoButton.style.backgroundColor = "lightblue";
      clearInterval(intervalId);
    }

    displayTime();
  }
}

// when timer is clicked, start timer function, if timer is clicked again, pause timer function

pomoButton.onclick = function() {
  if (timerPause === true) {
    timerPause = false;
    title.innerHTML = "POMODORO-ING!";
    pomoButton.style.backgroundColor = "indianred";
    intervalId = setInterval(updateTime, 1000);
  } else {
    timerPause = true;
    title.innerHTML = "POMO-PAUSED";
    pomoButton.style.backgroundColor = "lightblue";
    clearInterval(intervalId);
  }
};

// when minus is clicked, starting mins -=1

minus.onclick = function() {
  if (mins > 1) {
    startMins = mins - 1;
    mins -= 1;
    displayTime();
  }
};

// when plus is clicked, starting mins +=1

plus.onclick = function() {
  startMins = mins + 1;
  mins += 1;
  displayTime();
};

// reset button

document.getElementById("reset").onclick = function() {
  mins = startMins;
  secs = 0;
  timerPause = true;
  title.innerHTML = "POMODORO";
  pomoButton.style.backgroundColor = "lightblue";
  clearInterval(intervalId);
  displayTime();
};
