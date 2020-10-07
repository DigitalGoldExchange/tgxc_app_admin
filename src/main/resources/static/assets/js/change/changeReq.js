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

function goChangeReqDetail(exchangeId) {
    document.location.href = '/change/changeReqDetail?exchangeId='+exchangeId;
}

function updateStatus(exchangeId) {

    var api = $("#apiAddress").val();

    var msg = "";
    if($("#reqStatus").val() == "완료"){
        msg = "완료 처리 하시겠습니까?";
    }else if($("#reqStatus").val() == "승인"){
        msg = "승인하시겠습니까?";
    }else if($("#reqStatus").val() == "취소"){
        msg = "취소 처리 하시겠습니까?";
    }

    if($("#reqStatus").val() == "반려"){
        msg = "반려하시겠습니까?";
    }

    if(confirm(msg) == false){
        return false;
    }

    $.ajax({
        url: api+'/exchange/update?exchangeId='+exchangeId+'&status='+$("#reqStatus").val(),
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
    var datas = $("#exchangeSearch").serialize();
    console.log(api);
    $.ajax({
        url : api+"/exchange/getList",
        type : 'GET',
        data: datas,
        dataType : 'JSON',
        success:function(response){
            console.log(response.data);
            if(response.success) {
                var html = "";
                var endDay = "";
                var list = response.data.list;
                if (list.length > 0) {
                    for (var i = 0; i < list.length; i++) {

                        if(list[i].updateDatetime == null){
                            endDay = "-";
                        }else{
                            endDay = moment(list[i].updateDatetime).format('YYYY-MM-DD');
                        }

                        html += '<tr>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+')">' + list[i].reqNumber + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+')">' + list[i].user.emailId + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+')">' + list[i].user.name + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+')">' + list[i].user.phoneNumber + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+')">' + list[i].reqAmount + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+')">' + moment(list[i].createDatetime).format('YYYY-MM-DD') + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+')">' + endDay + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+')">' + list[i].status + '</td>'
                            + '<td style="text-align: center">\
                                    <select id="reqStatus" name="reqStatus" onchange="updateStatus('+list[i].exchangeId+')">\
                                        <option>작업</option>\
                                        <option value="0">신청서다운로드</option>\
                                        <option value="완료">완료</option>\
                                        <option value="승인">승인</option>\
                                        <option value="반려">반려</option>\
                                        <option value="취소">취소</option>\
                                    </select></td>'
                            + '</tr>';
                    }
                    $("#changeReqList").empty();
                    $("#changeReqList").append(html);

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
                    var html = '<tr><td colspan="9" align="center">내역이 존재하지 않습니다.</td></tr>';
                    $("#changeReqList").empty();
                    $("#changeReqList").append(html);
                }
            }


        }
    });


}