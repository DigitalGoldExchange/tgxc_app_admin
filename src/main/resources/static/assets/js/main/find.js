$(function () {
    $("#findPassWord").click(function () {
        var api = $("#apiAddress").val();
        var name = $("#name").val();
        var emailId = $("#emailId").val();

        if(name == '' ){
            alert("관리자 이름을 입력해주세요.");
            return false;
        }
        if(emailId == '' ){
            alert("관리자 이메일을 입력해주세요.");
            return false;
        }

        $.ajax({
            url: api+'/user/sendEmail?name='+name+"&emailId="+emailId,
            type: 'post',
            dataType: 'json',
            success: function(response) {
                console.log(response);
                if(response.data.result){
                    alert("비밀번호를 메일로 발송했습니다.");
                    document.location.href="/login";
                }else{
                    alert(response.data.msg);
                }
            },error: function(xhr, ajaxOptions, thrownError) {
                alert("오류가 발생했습니다.");
            }
        });


    });
});