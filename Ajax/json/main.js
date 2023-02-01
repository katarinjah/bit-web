"use strict";

var button = document.querySelector("#button");

function getDogImage() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
    xhr.send();
    xhr.onload = function () {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var imageUrl = response.message;
            var image = document.createElement("img");
            image.src = imageUrl;
            image.setAttribute("width", "300px");
            image.setAttribute("height", "300px");
            document.querySelector("#dog-image").appendChild(image);
        } else {
            console.error("An error occurred: " + xhr.status);
        }
    };
};

button.addEventListener("click", getDogImage);

