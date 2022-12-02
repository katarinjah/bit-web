"use strict";

var platform = function() {
    return window.navigator.platform;
}();

console.log(platform);


var version = function() {
    return window.navigator.appVersion;
} ();

console.log(version);


var creator = function() {
    return window.navigator.userAgent;
} ();

console.log(creator);


var isOnline = function checkIfOnline() {
    if (window.navigator.onLine) {
        return "online";
    } else {
        return "offline";
    }
} ();

console.log(isOnline);


var screenDimensions = function() {
    var a = window.screen.availWidth;
    var b = window.screen.availHeight;
    var c = window.screen.height;
    var output = (a + "") + "\n" + (b + "") + "\n" + (c + "");
    return output;
} ();

console.log(screenDimensions);


var URLInfo = function() {
    var url = window.location.href;
    var domain = window.location.hostname;
    var protocol = window.location.protocol;
    var parameters = window.location.search;
    var output = (url + "") + "\n" + (domain + "") + "\n" + (protocol + "") + "\n" + (parameters + "");
    return output;
} ();

console.log(URLInfo);


var reload = function() {
    var g = window.location.reload();
    return g;
} ();

var m = reload;
console.log(m)


var redirect = function() {
    var z = window.location.replace("https://belgradeevents.com/");
    return z;
} ();

var l = redirect;
console.log(l);


window.localStorage.setItem("favourite colour", "blue");


var readData = function () {
    var d = window.localStorage.getItem("favourite colour");
    if (!d) {
        return "There is no data"
    } else {
        return d;
    }
}();

console.log(readData);

window.localStorage.setItem("favourite food", "sarma");

var readNewData = function() {
    var m = window.localStorage.getItem("favourite food");
    return m;
} ();

console.log(readNewData);


window.sessionStorage.setItem("username", "Pera");

var readSessionData = function() {
    var o = window.sessionStorage.getItem("username");;
    return o;
} ();

console.log(readSessionData);

window.sessionStorage.clear();







