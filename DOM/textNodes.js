'use strict';

function printAlert() {
    var itemNodes = document.querySelector('ul');
    var priceNode = itemNodes.firstElementChild;
    window.alert(priceNode.textContent)
}

printAlert()

function replaceText(newText) {
    var itemNodes = document.querySelector('ul');
    var lastItemNode = itemNodes.lastElementChild;
    lastItemNode.textContent = newText;
}

replaceText('Do Not Contact Us')