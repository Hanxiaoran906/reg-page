var countdown=60;
function settime(obj) {
    if (countdown == 0) {
        obj.removeAttribute("disabled");
        obj.value="获取验证码";
        countdown = 60;
        return;
    } else {
        obj.setAttribute("disabled", true);
        obj.value="重新发送(" + countdown + ")";
        countdown--;
    }
    setTimeout(function() {
            settime(obj) }
        ,1000)
}

//rem随屏幕变化
function adapt() {
    var winWidth = $(window).width();
    var fontSize = (winWidth / 1440) * 100;
    var otherSize = (992 / 1440) * 100;
    // console.log($("html").css("font-size"));
    $("html").css("font-size",(fontSize < 100 ? fontSize : 100) + "px");

    if(winWidth > 992){
        $("html").css("font-size", (fontSize < 100 ? fontSize : 100) + "px");
    }else {
        $("html").css("font-size", otherSize + "px")
    }
}
//监测屏幕宽度变化
$(window).resize(function () {
    adapt()
});
setTimeout(adapt,200);

//表单元素聚焦
function focus () {
    $(this).prev("div").css("color","#29b078");
}
//表单元素失焦
function blur () {
    $(this).prev("div").css("color","#25272e")
}
//立即领取按钮
function obtain () {
    $(".shade").css("display","block");
}
//遮罩关闭注册
function cancel () {
    $(".shade").css("display","none");
}
$(".reg-text").on("focus",focus);
$(".reg-text").on("blur",blur);

