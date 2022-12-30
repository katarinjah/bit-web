"use strict";

var mario = document.getElementById("mario");
var runningMario = document.getElementById("running-mario");

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 39) {
      mario.style.display = "none";
      runningMario.style.display = "block";
    }
  });

  document.addEventListener("keyup", function(event) {
    if (event.keyCode === 39) {
      mario.style.display = "block";
      runningMario.style.display = "none";
    }
  });

  