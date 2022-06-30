$(document).ready(function() {
//Navbar
    $(".Menu").click(function() {
        $(".Navbar").css("width","200px");
    });
//About Me Jquery
    $(".key").click (function() {
        $("iframe").css("visibility", "visible");
    });
});
$(document).ready(function() {
    $(".Hard").click(function() {
        alert ("This game is hard, if your score is positive you win");
        alert ("The controls are Left, Right,and Up arrow keys");
    });
})