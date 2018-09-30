//判断表单内容是否已填写
var regValue = $(".reg-text");
regValue.keyup(function () {
    if ($("#telNo").val() !== '' && $("#smsCode").val() !== '' && $("#pwd").val().length >= 6 && $("#errorTip").val() === ""){
        $('.reg').removeAttr("disabled");
    }else {
        $('.reg').attr("disabled","true");
    }
});
//获取验证码按钮禁用
$("#telNo").keyup(function () {
    console.log("1111");
    if ($("#telNo").val().length == 11){
        phone();
    }else {
        $(".get-code").attr("disabled","true");
    }
});
//判断表单格式是否正确
//手机号校验
function phone() {
    var reg = /^0?(13[0-9]|15[012356789]|17[0678]|18[0123456789]|14[57])[0-9]{8}$/;
    if ($("#telNo").val() == "") {
        $("#errorTip").text("手机号码不能为空！");
    } else if ($("#telNo").val().length < 11) {
        $("#errorTip").text("手机号码长度有误！");
    } else if (!reg.test($("#telNo").val())) {
        $("#errorTip").text("手机号不存在！");
    } else{
        $("#errorTip").text("");
        $(".get-code").removeAttr("disabled");
    }
}
$("#telNo").on("blur",function () {
    phone();
});
//验证码校验
function smsCode() {
    var reg = /^[0-9]{6}$/;
    if ($("#smsCode").val() == "") {
        $("#errorTip").text("验证码不能为空！");
    } else if ($("#smsCode").val().length < 6) {
        $("#errorTip").text("验证码长度有误！");
    } else if (!reg.test($("#smsCode").val())) {
        $("#errorTip").text("验证码格式错误！");
    } else{
        $("#errorTip").text("");
    }
}
$("#smsCode").on("blur",function () {
    smsCode();
});
//密码校验
function password() {
    var reg = /^[a-zA-Z]\w{5,17}$/;
    if ($("#pwd").val() == "") {
        $("#errorTip").text("密码不能为空！");
    } else if (!reg.test($("#pwd").val())) {
        $("#errorTip").text("密码只能包含字母、数字和下划线");
    } else{
        $("#errorTip").text("");
    }
}
$("#pwd").on("blur",function () {
    password();
});


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
}
//遮罩关闭注册
function cancel () {
    $(".shade").css("display","none");
}
$("#close").on("click",cancel);
$(".reg-text").on("focus",focus);
$(".reg-text").on("blur",blur);



