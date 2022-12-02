"use strict";

var conversation = function() {
    window.alert("Greetings, human!");
    window.prompt("Are you sure you want to visit this page?");
    if (window.confirm("We will submit this answer now!")) {
        window.alert("You have successfully visited the page.");
    }
} ();

console.log(conversation);





