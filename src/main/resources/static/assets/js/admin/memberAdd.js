function goMain() {
    document.location.href = "/change/changeReq";
}

$(function () {
    var api = $("#apiAddress").val();

    $("#addMember").click(function () {

        var name = $("#name").val();
        var emailId = $("#emailId").val();
        var pw = $("#password").val();

        if(name == '' ){
            alert("관리자 이름을 입력해주세요.");
            return false;
        }
        if(emailId == '' ){
            alert("관리자 이메일을 입력해주세요.");
            return false;
        }
        if(pw == '' ){
            alert("초기 비밀번호를 입력해주세요.");
            return false;
        }

        if(confirm("매장 관리자를 추가하시겠습니까?") == false){
            return false;
        }


        $.ajax({
            url: api+'/user/insertMember?name='+name+"&password="+pw+"&emailId="+emailId,
            type: 'post',
            dataType: 'json',
            success: function(response) {
                console.log(response);
                if(response.success){
                    alert("매장 관리자가 추가되었습니다.");
                    document.location.href="/change/changeReq";
                }else{
                    alert(response.msg);
                }
            },error: function(xhr, ajaxOptions, thrownError) {
                alert("오류가 발생했습니다.");
            }
        });


    });

});