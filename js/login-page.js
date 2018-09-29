$("#obtain").click(function () {
    $(".shade").css("display","block");
});
$(".shade-background").click(function () {
    $(".shade").css("display","none");
});
$(".reg-text").on("focus",function () {
    $(this).prev("div").css("color","#29b078")
});
$(".reg-text").on("blur",function () {
    $(this).prev("div").css("color","#25272e")
});