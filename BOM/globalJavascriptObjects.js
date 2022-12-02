"use strict";

var array = Array(10) 
				.fill()
				.map(() => 50 * Math.random());

console.log(array);


var b = function roundNumbers(array) {
    var array = Array(10) 
				.fill()
				.map(() => 50 * Math.random());
    for (i = 0; i < array.length; i++) {
        array[i] = array[i].toFixed(2);
    }
    return array;
} ();

console.log(b);


var u = function roundNumbers(array) {
    var array = Array(10) 
				.fill()
				.map(() => 50 * Math.random());
    for (i = 0; i < array.length; i++) {
        array[i] = Math.floor(array[i]);
    }
    return array;
} ();

console.log(u);


var largestNumber = function getMax() {
    var result = Math.max(46, 3, 23, 12, 38, 41, 31, 15, 47, 28);
    return result;
} ();

console.log(largestNumber);



var e = Date.now();
console.log(e);


var n = Date();
console.log(n);


