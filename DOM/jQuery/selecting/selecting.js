$(function() {

    console.log("Hello, world!");

    $("li:first").css("border-bottom", "2px solid black");

    $("li").text(function(index, currentText) {
      return currentText.toUpperCase();
    });

    $("li:last").addClass("active");
    $("li.active").css("color", "#F22613");

    var middleIndex = Math.floor($("li").length / 2);
    $("li").eq(middleIndex).css("background-color", "#FFB61E");

  })