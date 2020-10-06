$(function () {
    var api = $("#apiAddress").val();

    $("#updateAdminInfo").click(function () {
        var userId = getCookie('userId');

        var name = $("#name").val();
        var emailId = $("#emailId").val();
        var nowPassword = $("#nowPassword").val();
        var updatePassword = $("#updatePassword").val();
        var confirmPassword = $("#confirmPassword").val();

        if(name == '' ){
            alert("담당자 이름을 입력해주세요.");
            return false;
        }
        if(emailId == '' ){
            alert("담당자 이메일을 입력해주세요.");
            return false;
        }
        if(nowPassword == '' ){
            alert("현재 비밀번호를 입력해주세요.");
            return false;
        }
        if(updatePassword == '' ){
            alert("변경할 비밀번호를 입력해주세요.");
            return false;
        }
        if(confirmPassword == '' ){
            alert("비밀번호 확인을 입력해주세요.");
            return false;
        }

        if(updatePassword != confirmPassword){
            alert("변경할 비밀번호가 일치하지 않습니다.");
            return false;
        }

        $.ajax({
            url: api+'/user/findPassword?userId='+userId+"&pw="+nowPassword,
            type: 'get',
            dataType: 'json',
            success: function(response) {
                console.log(response);
                if(response.data.result){
                    updateAdmin();
                }else{
                    alert("현재 비밀번호가 일치하지 않습니다.");
                }
            },error: function(xhr, ajaxOptions, thrownError) {
                alert("오류가 발생했습니다.");
            }
        });


    });


    function updateAdmin() {
        var datas = $("#insertAdmin").serialize();
        var userId = getCookie('userId');
        $.ajax({
            url: api+'/user/updateAdmin?userId='+userId,
            type: 'post',
            data: datas,
            dataType: 'json',
            success: function(response) {
                if(response.success){
                    alert("변경되었습니다.");
                    document.location.href="/change/changeReq";
                }else{
                    alert("등록에 실패했습니다.");
                }
            },error: function(xhr, ajaxOptions, thrownError) {
                alert("등록중 오류가 발생했습니다.");
            }
        });
    }

});




function goAdminManage() {
    document.location.href = "/admin/adminUpdate";
}

function goMain() {
    document.location.href = "/change/changeReq";
}



