"use strict";

var button = document.querySelector("#button");
var ipAddress = document.querySelector("#ip");
var country = document.querySelector("#country");

function getCountryName() {
    var randomIP = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
    var xhr = new XMLHttpRequest();
    ipAddress.value = xhr.open("GET", "http://www.geoplugin.net/xml.gp?ip=" + randomIP, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var xmlDoc = xhr.responseXML;
            var countryName = xmlDoc.getElementsByTagName("geoplugin_countryName")[0].childNodes[0].nodeValue;
            country.textContent = countryName;
        };
    };
    xhr.send();
    ipAddress.value = randomIP;
};

button.addEventListener("click", getCountryName);