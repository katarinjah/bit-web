"use strict";

var widePics = document.getElementsByClassName("wideimg");
for (var i = 0; i < widePics.length; i++) {
    widePics[i].setAttribute("width", "300px");
    widePics[i].setAttribute("height", "200px");
}

var imgNodes = document.querySelectorAll("img");

imgNodes.forEach(item => {
    item.addEventListener('click', event => {
        if (item.offsetWidth === 300) {
            event.stopPropagation();
            item.classList.add("border");
        }
    })
})
  

            

