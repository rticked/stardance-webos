// Make the window draggable
dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("notes"));
dragElement(document.getElementById("calculator"));
dragElement(document.getElementById("notesicon"));

function dragElement(element) {

  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();

    initialX = e.clientX;
    initialY = e.clientY;

    document.onmouseup = stopDragging;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;

    initialX = e.clientX;
    initialY = e.clientY;

    element.style.top =
      (element.offsetTop - currentY) + "px";

    element.style.left =
      (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Window controls
var welcomeScreen = document.querySelector("#welcome");
var welcomeScreenClose = document.querySelector("#welcomeclose");
var welcomeScreenOpen = document.querySelector("#welcomeopen");

function closeWindow(element) {
  element.style.display = "none";
}

function openWindow(element) {
  element.style.display = "flex";
}

welcomeScreenClose.addEventListener("click", function () {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function () {
  openWindow(welcomeScreen);
});

// Notes window controls
var notesScreen = document.querySelector("#notes");
var notesClose = document.querySelector("#notesclose");
var notesIcon = document.querySelector("#notesicon");

notesClose.addEventListener("click", function () {
  closeWindow(notesScreen);
});

notesIcon.addEventListener("click", function () {
  openWindow(notesScreen);
});

// Calculator window controls
var calculatorScreen = document.querySelector("#calculator");
var calculatorClose = document.querySelector("#calculatorclose");
var calculatorIcon = document.querySelector("#calculatoricon");

calculatorClose.addEventListener("click", function () {
  closeWindow(calculatorScreen);
});

calculatorIcon.addEventListener("click", function () {
  openWindow(calculatorScreen);
});

// Clock
function updateTime() {
  var currentTime = new Date().toLocaleString();
  var timeText = document.querySelector("#timeElement");

  if (timeText) {
    timeText.innerHTML = currentTime;
  }
}

updateTime();
setInterval(updateTime, 1000);