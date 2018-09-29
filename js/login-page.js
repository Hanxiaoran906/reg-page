//判断表单内容是否已填写
var regValue = $('.reg-text');
var tipText;
regValue.keyup(function () {
    if (regValue[0].value !== '' && regValue[1].value !== '' && regValue[2].value !== ''){
        console.log("???");
        $('.reg').removeAttr("disabled");
    }else {
        $('.reg').attr("disabled","true");
    }
});
//判断表单格式是否正确
function register() {
    $('#errorTip').css("display","block");
    if(regValue[0].value.length != 11){
        tipText = "手机号输入错误";
        // return tipText;
    }else if (regValue[1].value.length != 6){
        tipText = "验证码输入错误";
        // return tipText;
    }else if(regValue[2].value.length < 6){
        tipText = "密码输入错误";
        // return tipText;
    }else{
        tipText = "Success!";
        $('.shade').css('display','none');
    }
    $('#errorTip').text(tipText);
    setTimeout(function () {
        $('#errorTip').css("display","none");
    },1000)
}

//获取验证码倒计时
var countdown=60;
function settime(obj) {
    if (countdown == 0) {
        obj.removeAttribute("disabled");
        $(".get-code").css("background-color","#29b078");
        obj.value="获取验证码";
        countdown = 60;
        return;
    } else {
        obj.setAttribute("disabled", true);
        $(".get-code").css("background-color","#999");
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
    // $(".reg").attr("disabled","true");

}
//遮罩关闭注册
function cancel () {
    $(".shade").css("display","none");
}
$(".reg-text").on("focus",focus);
$(".reg-text").on("blur",blur);

