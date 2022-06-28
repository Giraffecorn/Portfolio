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
    //Water Images
    $(".water img").hover(function() {
        $(".water").css("background-image", "url('images/water.jpg')");
        $("h2").css("visibility", "hidden");
    }, function() {
        $(".water").css("background-image", "none");
        $("h2").css("visibility", "visible");
    });
    //Air Images
    $(".air img").hover(function() {
        $(".air").css("background-image", "url('images/air.jpg");
        $("h2").css("visibility", "hidden");
    }, function() {
        $(".air").css("background-image", "none");
        $("h2").css("visibility", "visible");
    });
    //Nature Images
    $(".nature img").hover(function() {
        $(".nature").css("background-image", "url('images/nature.jpg')");
        $("h2").css("visibility", "hidden");
    }, function() {
        $(".nature").css("background-image", "none");
        $("h2").css("visibility", "visible");
    });
});