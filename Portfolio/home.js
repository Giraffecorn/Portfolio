//Navbar Jquery
$(document).ready(function() {
    $(".Menu").click(function() {
        $(".Navbar").css("width","200px");
    });
});
//Image Jquery
$(document).ready(function() {
    //Fire Images
    $(".fire img").hover(function() {
        $(".fire").css("background-image", "url('images/fire.jpg')");
        $("h2").css("visibility", "hidden");
    }, function() {
        $(".fire").css("background-image", "none");
        $("h2").css("visibility", "visible");
    });
    $(".fire img").click(function() {
        $(".fire img").css("transform", "scale(2)");
        $(".fire img").css("transition", "0.4s");
    });
    //Water Images
    $(".water img").hover(function() {
        $(".water").css("background-image", "url('images/water.jpg')");
        $("h2").css("visibility", "hidden");
    }, function() {
        $(".water").css("background-image", "none");
        $("h2").css("visibility", "visible");
    });
    $(".water img").click(function() {
        $(".water img").css("transform", "scale(2)");
        $(".water img").css("transition", "0.4s");
    });
    //Air Images
    $(".air img").hover(function() {
        $(".air").css("background-image", "url('images/air.jpg");
        $("h2").css("visibility", "hidden");
    }, function() {
        $(".air").css("background-image", "none");
        $("h2").css("visibility", "visible");
    });
    $(".air img").click(function() {
        $(".air img").css("transform", "scale(2)");
        $(".air img").css("transition", "0.4s");
    });
    //Nature Images
    $(".nature img").hover(function() {
        $(".nature").css("background-image", "url('images/nature.jpg')");
        $("h2").css("visibility", "hidden");
    }, function() {
        $(".nature").css("background-image", "none");
        $("h2").css("visibility", "visible");
    });
    $(".nature img").click(function() {
        $(".nature img").css("transform", "scale(2)");
        $(".nature img").css("transition", "0.4s");
    });
    //About Me Jquery
    $(".key").click (function() {
        $("iframe").css("visibility", "visible");
    });
});