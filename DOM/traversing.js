"use strict";

function changeActive() {
    var activeLiNode = document.querySelector(".active");
    activeLiNode.classList.remove("active");
    var firstUlNode = document.querySelectorAll('ul')[0];
    var newActiveNode = firstUlNode.firstElementChild;
    newActiveNode.classList.add("active");
}

changeActive()