// Event Listener
var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function(){
  if(content.className == "open") {
    //shrink the box
    content.className = "";
    button.innerHTML = "Show More";
  } else {
    //expand the box
    content.className = "open";
    button.innerHTML = "Show Less";
  }

};

//JS Timers
// var myMessage = document.getElementById("message");

// function showMessage() {
//     myMessage.className = "show";
// }
// setTimeout(showMessage, 3000);

var colorChanger = document.getElementById("color-changer");
var colors = ["red", "green", "blue", "orange"];
var counter = 0;

function changeColor() {
  if (counter >= colors.length) {
    counter = 0;
  }

  colorChanger.style.background = colors[counter];
  counter++;
}
var myTimer = setInterval(changeColor, 3000);

colorChanger.onclick = function() {
  clearInterval(myTimer);
  colorChanger.innerHTML = "Time Stopped";
}