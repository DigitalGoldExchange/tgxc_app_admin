$(function () {
   $(".form-control").keyup(function (event) {
       if(event.which == 13) {
           login();
       }
   });
   // var id = getCookie('userId');
   // if(id != "" && id != null && id != undefined) {
   //     location.href='/member/dashboard';
   // }
});
function login() {
    var id = $("#emailId").val();
    var pw = $("#pwd").val();
    if(id == "") {
        alert('아이디를 입력해주세요.');
        return false;
    }else if(pw == "") {
        alert('비밀번호를 입력해주세요.');
        return false;
    }
    var api = $("#apiAddress").val();
    var datas = $("#loginForm").serialize();
    console.log(datas);
    $.ajax({
        url: api+"/user/login",
        type: 'POST',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            if(response.data.result) {
                console.log(response);
                // return false;
                setCookie('emailId', response.data.user.emailId, 7);
                setCookie('name', response.data.user.name, 7);
                setCookie('userId', response.data.user.userId, 7);
                setCookie('level', response.data.user.level, 7);
                location.href='/change/changeReq';
                // if(response.data.level==10){
                //     location.href='/main/adminMain';
                // }else{
                //     location.href='/main/userMain';
                // }
            }else {
                alert('로그인 정보를 다시 확인해주세요');
                return false;
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
}

function findPassWord() {
    var id = $("#loginId").val();
    var pw = $("#pwd").val();
    if(id == "") {
        alert('아이디를 입력해주세요.');
        return false;
    }else if(pw == "") {
        alert('비밀번호를 입력해주세요.');
        return false;
    }
    var api = $("#apiAddress").val();
    var datas = $("#loginForm").serialize();
    console.log(datas);
    $.ajax({
        url: api+"/user/login",
        type: 'POST',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            if(response.data!=null) {
                console.log(response);
                // return false;

                setCookie('emailId', response.data.emailId, 7);
                setCookie('name', response.data.name, 7);
                setCookie('userId', response.data.userId, 7);
                setCookie('level', response.data.level, 7);
                if(response.data.level==10){
                    location.href='/main/adminMain';
                }else{
                    location.href='/main/userMain';
                }
            }else {
                alert('로그인 정보를 다시 확인해주세요');
                return false;
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
}

function changeLanguage() {
    document.location.href = '/login?language=en';
}