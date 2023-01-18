$(document).ready(function() {

    var field = $(".container");
    var player = $(".player");
    var button = $(".button");
    
    var move = function(event) {
        var x = event.clientX;
        var y = event.clientY;
        player.css({
            "position": "absolute",
            "left": x + "px",
            "top": y + "px"
        });
    };
    
    field.on("click", move);
    
    button.on("click", function() {
    field.off("click", move);
    });

});
