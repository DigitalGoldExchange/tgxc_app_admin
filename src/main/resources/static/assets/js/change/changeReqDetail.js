$(function () {
    // 페이지 로딩

    getList();
});

function doReject(exchangeId) {
    $('#myModal').modal('show');

    $("#submit_btn").click(function () {

        var note = $("#note").val();
        if(note == '' ) {
            alert("반려사유를 입력해주세요.");
            return false;
        }
        if(confirm("반려 처리 하시겠습니까?") == false){
            return false;
        }
        var api = $("#apiAddress").val();

        $.ajax({
            url: api+'/exchange/update?exchangeId='+exchangeId+'&status='+$("#reqStatus").val()+"&note="+note,
            type: 'post',
            dataType: 'json',
            success: function(response) {
                if(response.success){
                    alert("반려 처리되었습니다.");
                    location.reload();
                }else{
                    alert(response.msg);
                }
            },error: function(xhr, ajaxOptions, thrownError) {
                alert("등록중 오류가 발생했습니다.");
            }
        });

    });
}


function updateStatus(exchangeId) {

    var api = $("#apiAddress").val();

    if($("#reqStatus").val() == "반려"){
        doReject(exchangeId);
        return false;
    }
    var msg = "";
    if($("#reqStatus").val() == "완료"){
        msg = "완료 처리 하시겠습니까?";
    }else if($("#reqStatus").val() == "승인"){
        msg = "승인하시겠습니까?";
    }else if($("#reqStatus").val() == "취소"){
        msg = "취소 처리 하시겠습니까?";
    }
    if(confirm(msg) === false){
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

function getList() {
    var exchangeId = $("#exchangeId").val();
    var api = $("#apiAddress").val();
    console.log(api);
    $.ajax({
        url : api+"/exchange/getOne?exchangeId="+exchangeId,
        type : 'GET',
        dataType : 'JSON',
        success:function(response){
            console.log(response.data);
            if(response.success) {

                //신청상세정보
                var html = "";
                var endDay = "";
                var exchangeInfo = response.data.exchangeInfo;

                if(exchangeInfo.updateDatetime == null){
                    endDay = "-";
                }else{
                    endDay = moment(exchangeInfo.updateDatetime).format('YYYY-MM-DD');
                }

                html += '<tr>'
                    + '<td style="text-align: center">' + exchangeInfo.reqNumber + '</td>'
                    + '<td style="text-align: center">' + exchangeInfo.user.emailId + '</td>'
                    + '<td style="text-align: center">' + exchangeInfo.user.name + '</td>'
                    + '<td style="text-align: center">' + exchangeInfo.user.phoneNumber + '</td>'
                    + '<td style="text-align: center">' + exchangeInfo.reqAmount + '</td>'
                    + '<td style="text-align: center">' + moment(exchangeInfo.createDatetime).format('YYYY-MM-DD') + '</td>'
                    + '<td style="text-align: center">' + endDay + '</td>'
                    + '<td style="text-align: center">' + exchangeInfo.status + '</td>'
                    + '<td style="text-align: center">\
                                    <select id="reqStatus" name="reqStatus" onchange="updateStatus('+exchangeInfo.exchangeId+')">\
                                        <option>작업</option>\
                                        <option value="0">신청서다운로드</option>\
                                        <option value="완료">완료</option>\
                                        <option value="승인">승인</option>\
                                        <option value="반려">반려</option>\
                                        <option value="취소">취소</option>\
                                    </select></td>'
                    + '</tr>';
                      if(exchangeInfo.status == "반려"){
                          html += '<tr><td colspan="9" align="right">반려사유 : '+exchangeInfo.note+'</td></tr>';
                      }

                $("#changeReqDetail").empty();
                $("#changeReqDetail").append(html);

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
                    $("#changeReqList").empty();
                    $("#changeReqList").append(htmlList);

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
                    $("#changeReqList").empty();
                    $("#changeReqList").append(htmlList);
                }





            }


        }
    });


}

function goMain() {
    document.location.href = "/change/changeReq";
}