$(function () {
    var api = $("#apiAddress").val();

    // 페이지 로딩

    $("#checkAdmin").click(function () {

        var userId = getCookie('userId');
        var level = getCookie('level');

        var pw = $("#password").val();
        if(pw == '' ){
            alert("비밀번호를 입력해주세요.");
            return false;
        }
        $.ajax({
            url: api+'/user/findPassword?userId='+userId+"&pw="+pw,
            type: 'get',
            dataType: 'json',
            success: function(response) {
                console.log(response);
                if(response.data.result){
                    document.location.href="/admin/adminInfoDetail?level="+level+"&userId="+userId;
                }else{
                    alert("비밀번호가 일치하지 않습니다.");
                }
            },error: function(xhr, ajaxOptions, thrownError) {
                alert("오류가 발생했습니다.");
            }
        });


    });



});

function goMain() {
    document.location.href = "/admin/home";
}



