$(function () {
    var api = $("#apiAddress").val();

    $("#addAdmin").click(function () {

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
        if(password == '' ){
            alert("초기 비밀번호를 입력해주세요.");
            return false;
        }

        if($('input:checkbox[name=menuLevel]:checked').length == 0){
            alert("권한설정을 최소 1개 이상 선택해야 합니다.");
            $('#level_exchange').focus();
            return false;
        }

        if(confirm("관리자를 추가하시겠습니까?") == false){
            return false;
        }

        var menuLevelArray = new Array();

        $(".menuLevel").each(function(){
            if($(this).is(":checked")){
                menuLevelArray.push($(this).val());
            }
        });


        $.ajax({
            url: api+'/user/insertAdmin?name='+name+"&password="+pw+"&emailId="+emailId+"&menuLevel="+menuLevelArray,
            type: 'post',
            dataType: 'json',
            success: function(response) {
                console.log(response);
                if(response.success){
                    alert("관리자가 추가되었습니다.");
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

function goMain() {
    document.location.href = "/change/changeReq";
}