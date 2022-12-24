"use strict";

var field = document.querySelector(".container");
var player = document.querySelector(".player");

field.addEventListener("click", function() {
    var x = event.clientX;
    var y = event.clientY;
    player.style.position = "absolute";
    player.style.left = x + "px";
    player.style.top = y + "px";
})