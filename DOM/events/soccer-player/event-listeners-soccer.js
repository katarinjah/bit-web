"use strict";

var field = document.querySelector(".container");
var player = document.querySelector(".player");
var button = document.querySelector(".button");

var move = function() {
    var x = event.clientX;
    var y = event.clientY;
    player.style.position = "absolute";
    player.style.left = x + "px";
    player.style.top = y + "px";
}

field.addEventListener("click", move);

button.addEventListener("click", function() {
  field.removeEventListener("click", move);
});
