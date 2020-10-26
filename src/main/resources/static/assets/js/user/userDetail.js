$(function () {
    // 페이지 로딩

    getList();

    var userId = $("#userId").val();
    var api = $("#apiAddress").val();

    $("#submit_btn").click(function () {

        var title = $("#title").val();
        var content = $("#content").val();

        if(title == '' ){
            alert("제목을 입력해주세요.");
            return false;
        }

        if(content == '' ){
            alert("내용을 입력해주세요.");
            return false;
        }


        $.ajax({
            url: api+'/push/sendPush?title='+title+"&content="+content+"&userId="+userId,
            type: 'post',
            dataType: 'json',
            success: function(response) {
                if(response.success){
                    alert("발송되었습니다.");
                    location.reload();
                }else{
                    alert(response.msg);
                }
            },error: function(xhr, ajaxOptions, thrownError) {
                alert("등록중 오류가 발생했습니다.");
            }
        });

    });
});

function goUserList() {
    document.location.href = '/user/userList';
}

function getList() {
    var userId = $("#userId").val();
    var api = $("#apiAddress").val();
    console.log(api);
    $.ajax({
        url : api+"/user/getOne?userId="+userId,
        type : 'GET',
        dataType : 'JSON',
        success:function(response){
            console.log(response.data);
            if(response.success) {

                //신청상세정보
                var html = "";
                var endDay = "";
                var user = response.data.user;
                var status = "";
                // if(exchangeInfo.updateDatetime == null){
                //     endDay = "-";
                // }else{
                //     endDay = moment(exchangeInfo.updateDatetime).format('YYYY-MM-DD');
                // }

                if(user.status == 0){
                    status = "미인증";
                }else if(user.status == 1){
                    status = "비활성화";
                }else if(user.status == 2){
                    status = "활성화";
                }else if(user.status == 3){
                    status = "탈퇴";
                }


                html += '<tr>'
                    + '<td style="text-align: center">' + user.name + '</td>'
                    + '<td style="text-align: center">' + user.emailId + '</td>'
                    + '<td style="text-align: center">' + user.phoneNumber + '</td>'
                    + '<td style="text-align: center">' + (user.address!=null?user.address:'-') + '</td>'
                    + '<td style="text-align: center">' + user.totalTg + '</td>'
                    + '<td style="text-align: center">' + moment(user.createDatetime).format('YYYY-MM-DD') + '</td>'
                    + '<td style="text-align: center">' + user.status + '</td>'
                    + '</tr>';

                $("#userDetail").empty();
                $("#userDetail").append(html);

                //거래이력
                var exchangeList = response.data.exchangeList;
                var htmlList = "";

                if (exchangeList.length > 0) {
                    for (var i = 0; i < exchangeList.length; i++) {

                        if(exchangeList[i].updateDatetime == null){
                            endDay = "-";
                        }else{
                            endDay = moment(exchangeList[i].updateDatetime).format('YYYY-MM-DD');
                        }

                        htmlList += '<tr>'
                            + '<td style="text-align: center">' + exchangeList[i].reqNumber + '</td>'
                            + '<td style="text-align: center">' + moment(exchangeList[i].createDatetime).format('YYYY-MM-DD') + '</td>'
                            + '<td style="text-align: center">' + endDay + '</td>'
                            + '<td style="text-align: center">' + exchangeList[i].reqAmount + '</td>'
                            + '<td style="text-align: center">' + exchangeList[i].status + '</td>'
                            + '</tr>';
                    }
                    $("#userReqList").empty();
                    $("#userReqList").append(htmlList);

                    // if (callback) {
                    //     $('#show-paginator').bootpag({
                    //         total: response.data.totalPages,
                    //         page: $("#page").val(),
                    //         maxVisible: 5,
                    //         leaps: true
                    //     }).on("page", function (event, num) {
                    //         $("#page").val(num);
                    //         getList(false);
                    //     });
                    // }
                } else {
                    var htmlList = '<tr><td colspan="5" align="center">내역이 존재하지 않습니다.</td></tr>';
                    $("#userReqList").empty();
                    $("#userReqList").append(htmlList);
                }





            }


        }
    });


}