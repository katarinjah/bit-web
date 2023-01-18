$(function() {

    var images1 = ["./images/img1.jpg", "./images/img2.jpg", "./images/img3.jpg"];
    var images2 = ["./images/img4.jpg", "./images/img5.jpg", "./images/img6.jpg"];

    $("<div></div>").addClass("gallery1").insertBefore("script:first");
    $("<div></div>").addClass("gallery2").insertBefore("script:first");

    images1.forEach(function(image) {
        var img = $("<img>");
        img.attr("src", image);
        img.css("width", "33%");
        img.appendTo($(".gallery1"));
    });

    images2.forEach(function(image) {
        var img = $("<img>");
        img.attr("src", image);
        img.css("width", "33%");
        img.appendTo($(".gallery2"));
    });

    $(".gallery1 img").first().addClass("selected");
    $(".selected").css("border", "3px solid red");


    function moveBorder() {
        var selected = $(".gallery1 img.selected");
        selected.removeClass("selected").css("border", "none");
        var middle = $("body").children(".gallery2").find("img").eq(1);
        middle.addClass("selected").css("border", "3px solid red");
    };

    moveBorder();

})



