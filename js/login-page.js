function adapt() {
    var winWidth = $(window).width();
    var fontSize = (winWidth / 1440) * 100;
    // console.log($("html").css("font-size"));
    $("html").css("font-size",(fontSize < 100 ? fontSize : 100) + "px");
}
$(window).resize(function () {
    adapt()
});
setTimeout(adapt,200);

function focus () {
    $(this).prev("div").css("color","#29b078");
}
function blur () {
    $(this).prev("div").css("color","#25272e")
}
function obtain () {
    $(".shade").css("display","block");
}
function cancel () {
    $(".shade").css("display","none");
}
$(".reg-text").on("focus",focus);
$(".reg-text").on("blur",blur);

