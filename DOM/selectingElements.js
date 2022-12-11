'use strict';

// task 1

function setUlBackground() {
    var secondListNode = document.querySelectorAll('ul')[1];
    secondListNode.classList.add('second-list');
    if (secondListNode.className === 'second-list') {
        secondListNode.style.backgroundColor = "#32a8a6";
    }
}

setUlBackground();


// task 2 

function setLiBackground() {
    var listNodes = document.getElementsByTagName('li');
    for (var i = 0; i < listNodes.length; i++) {
        listNodes[i].classList.add('list-items');
        listNodes[i].style.backgroundColor = '#f05d13';
    }    
}

setLiBackground(); 


// task 3

var thirdListNode = document.createElement('ul');
var listItemNode = document.createElement('li');
thirdListNode.appendChild(listItemNode);
var bodyNode = document.querySelector('body');
bodyNode.appendChild(thirdListNode);
var text = document.createTextNode('Item 7');
listItemNode.appendChild(text);


function customizeThirdList() {
    listItemNode.classList.add('third-list-item');
    if (listItemNode.className === 'third-list-item') {
        listItemNode.style.backgroundColor = '#de6bfa';
        listItemNode.style.textTransform = "uppercase";
    }
}

customizeThirdList();


