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

                        html += '<tr onclick="goUserDetail('+list[i].userId+')">'
                            + '<td style="text-align: center">' + list[i].emailId + '</td>'
                            + '<td style="text-align: center">' + list[i].name + '</td>'
                            + '<td style="text-align: center">' + list[i].phoneNumber + '</td>'
                            + '<td style="text-align: center">' + list[i].totalTg + '</td>'
                            + '<td style="text-align: center">' + moment(list[i].createDatetime).format('YYYY-MM-DD') + '</td>'
                            + '<td style="text-align: center">' + status + '</td>'
                            + '<td style="text-align: center">-</td>'
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