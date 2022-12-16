'use strict';

// innerHTML

function create1stDropdown () {
    var firstSelectNode = document.querySelector('div').innerHTML = "<select name='drop' id='drop1'><option value='1st option'>1st option</option><option value='2nd option'>2nd option</option><option value='3rd option'>3rd option</option></select>";    
}

create1stDropdown()


// DOM manipulation

function create2ndDropdown(array) {
    var bodyNode = document.querySelector('body');
    var secondDivNode = Array.from(document.querySelectorAll('div')).pop();
    var selectNode = document.createElement('select');
    secondDivNode.appendChild(selectNode);
    selectNode.setAttribute('id', 'drop2');
    var optionNode = "";
    for(var i = 0; i < array.length; i++) {
        optionNode += ("<option>" + array[i] + "</option>");
    }
    document.getElementById('drop2').innerHTML = optionNode;
}

create2ndDropdown(['4th option', '5th option', '6th option'])
