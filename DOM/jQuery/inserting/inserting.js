$(function() {

    var images = ["./images/img1.jpg", "./images/img2.jpg", "./images/img3.jpg", "./images/img4.jpg", "./images/img5.jpg"];

    var container = $("<div></div>");
    container.insertBefore("script");

    images.forEach(function(image) {
        var img = $("<img>");
        img.attr("src", image);
        img.appendTo(container);
    });

    container.prepend("<h1>Animal Images</h1>");

    container.find("img").each(function() {
        var width = Math.floor(Math.random() * 300) + 100;
        var height = Math.floor(Math.random() * 300) + 100;
        $(this).css({
            width: width + "px",
            height: height + "px"
        });
    });

    container.find("img").each(function() {
        var width = $(this).width();
        if (width < 200) {
            $(this).css("border", "3px solid #26C281");
        } else {
            return false;
        };
    });

})