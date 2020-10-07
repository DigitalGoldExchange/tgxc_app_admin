$(function () {
    // 페이지 로딩
    getList(true);

    $("#searchWord").keydown(function (event) {

        if (event.keyCode == 13) {
            getList(true);
            return false;
        }
    });
});

function goUserDetail(userId) {
    document.location.href = '/user/userDetail?userId='+userId;
}

function updateStatus(userId) {

    var api = $("#apiAddress").val();

    var msg = "";
    if($("#userStatus").val() == 1){
        msg = "비활성화 하시겠습니까?";
    }else if($("#userStatus").val() == 2){
        msg = "활성화 하시겠습니까?";
    }else if($("#userStatus").val() == 3){
        msg = "탈퇴 처리 하시겠습니까? 탈퇴된 회원 정보는 삭제됩니다.";
    }

    if(confirm(msg) == false){
        return false;
    }

    $.ajax({
        url: api+'/user/update?userId='+userId+'&status='+$("#userStatus").val(),
        type: 'post',
        dataType: 'json',
        success: function(response) {
            if(response.success){
                alert("처리되었습니다.");
                location.reload();
            }else{
                alert(response.msg);
            }
        },error: function(xhr, ajaxOptions, thrownError) {
            alert("등록중 오류가 발생했습니다.");
        }
    });


}

function getList(callback) {

    var api = $("#apiAddress").val();
    var datas = $("#userSearch").serialize();
    console.log(api);
    $.ajax({
        url : api+"/user/getList",
        type : 'GET',
        data: datas,
        dataType : 'JSON',
        success:function(response){
            console.log(response.data);
            if(response.success) {
                var html = "";
                var status = "";
                var list = response.data.list;
                if (list.length > 0) {
                    for (var i = 0; i < list.length; i++) {

                        if(list[i].status == 0){
                            status = "미인증";
                        }else if(list[i].status == 1){
                            status = "비활성화";
                        }else if(list[i].status == 2){
                            status = "활성화";
                        }else if(list[i].status == 3){
                            status = "탈퇴";
                        }

                        html += '<tr>'
                            + '<td style="text-align: center" onclick="goUserDetail('+list[i].userId+')">' + list[i].emailId + '</td>'
                            + '<td style="text-align: center" onclick="goUserDetail('+list[i].userId+')">' + list[i].name + '</td>'
                            + '<td style="text-align: center" onclick="goUserDetail('+list[i].userId+')">' + list[i].phoneNumber + '</td>'
                            + '<td style="text-align: center" onclick="goUserDetail('+list[i].userId+')">' + list[i].totalTg + '</td>'
                            + '<td style="text-align: center" onclick="goUserDetail('+list[i].userId+')">' + moment(list[i].createDatetime).format('YYYY-MM-DD') + '</td>'
                            + '<td style="text-align: center" onclick="goUserDetail('+list[i].userId+')">' + status + '</td>'
                            + '<td style="text-align: center">\
                                     <select id="userStatus" name="userStatus" onchange="updateStatus('+list[i].userId+')">\
                                        <option>작업</option>\
                                        <option value="1">비활성화</option>\
                                        <option value="2">활성화</option>\
                                        <option value="3">탈퇴</option>\
                                    </select></td>'
                            + '</tr>';
                    }
                    $("#userList").empty();
                    $("#userList").append(html);

                    if (callback) {
                        $('#show-paginator').bootpag({
                            total: response.data.totalPages,
                            page: $("#page").val(),
                            maxVisible: 5,
                            leaps: true
                        }).on("page", function (event, num) {
                            $("#page").val(num);
                            getList(false);
                        });
                    }
                } else {
                    var html = '<tr><td colspan="7" align="center">내역이 존재하지 않습니다.</td></tr>';
                    $("#userList").empty();
                    $("#userList").append(html);
                }
            }


        }
    });


}