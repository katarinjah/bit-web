"use strict";

var mario = document.getElementById("mario");
var runningMario = document.getElementById("running-mario");
var container = document.querySelector(".container");

document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowRight") {
    mario.style.display = "none";
    runningMario.style.display = "block";
    var position = parseInt(container.style.backgroundPosition) || 0;
    container.style.backgroundPosition = (position - 10) + "px";
  }
})

document.addEventListener("keyup", function(event) {
  if (event.key === "ArrowRight") {
    mario.style.display = "block";
    runningMario.style.display = "none";  
  }
})
  