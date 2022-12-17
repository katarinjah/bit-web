"use strict";

function validateForm() {
    var inputNodes = document.querySelectorAll("input");
    for (var i = 0; i < inputNodes.length; i++) {
        if (inputNodes[i].value.length === 0 && inputNodes[i].hasAttribute("required")) {
            inputNodes[i].classList.add("border")
        }   
    }   
}

validateForm()

