$(function () {
    getList();
    getServerManage();
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

        var passRule = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

        if(!passRule.test(updatePassword)) {
            alert("비밀번호는 영어+숫자+특수문자 조합으로 8~20자 형식이여야 합니다. ");
            return false;
        }

        var emailRule = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!emailRule.test(emailId)) {
            alert("잘못된 이메일 형식입니다.");
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

    $("#submit_btn").click(function () {

        var radioVal = $('input[name="check_info"]:checked').val();
        var userId = getCookie('userId');


        $.ajax({
            url: api+'/serverManage/update?userId='+userId+"&status="+radioVal,
            type: 'post',
            success: function(response) {
                console.log(response);
                alert("변경되었습니다.");
                location.reload();
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
    document.location.href = "/admin/home";
}

function goStoreManage() {
    document.location.href = "/admin/memberAdd";
}

function getList() {
    var api = $("#apiAddress").val();
    var userId = getCookie('userId');
    console.log(api);
    $.ajax({
        url : api+"/user/getOne?userId="+userId,
        type : 'GET',
        dataType : 'JSON',
        success:function(response){
            console.log(response);
            if(response.success) {
                $("#name").val(response.data.user.name);
                $("#emailId").val(response.data.user.emailId);


            }


        }
    });


}

function getServerManage() {
    var api = $("#apiAddress").val();
    $.ajax({
        url : api+"/serverManage/getOne",
        type : 'GET',
        dataType : 'JSON',
        success:function(response){
            console.log(response);
            if(response.success) {
                // $("#name").val(response.data.user.name);
                // $("#emailId").val(response.data.user.emailId);
                $('input[name="check_info"]').val([response.data.status]);

            }


        }
    });


}



