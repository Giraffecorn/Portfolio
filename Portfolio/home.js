$(document).ready(function() {
    $(".Fire").hover(function() {
        $("body").css("background-image", "url('images/Fire.webp')");
    }, function() {
        $("body").css("background-image", "none");
    });
    $(".Menu").click(function() {
        $(".Navbar").css("width","200px");
    });
});