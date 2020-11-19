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

function doReject(exchangeId, status) {
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
            url: api+'/exchange/update?exchangeId='+exchangeId+'&status='+status+'&note='+note,
            type: 'post',
            dataType: 'json',
            success: function(response) {
                if(response.data.result){
                    alert("반려 처리되었습니다.");
                    location.reload();
                }else{
                    alert(response.data.msg);
                    location.reload();
                }
            },error: function(xhr, ajaxOptions, thrownError) {
                alert("등록중 오류가 발생했습니다.");
            }
        });

    });
}

function doExcelDownLoad(exchangeId) {

    if(confirm("신청서를 다운로드 하시겠습니까?") == false){
        return false;
    }

    var api = $("#apiAddress").val();

    var req = new XMLHttpRequest();
    req.open("GET", api+'/excel/excelDown?exchangeId='+exchangeId, true);
    req.responseType = "blob";
    req.onload = function (event) {
        var blob = req.response;
        // var fileName = req.getResponseHeader("fileName") //if you have the fileName header available
        var fileName = "exchange_form.pdf";
        var link=document.createElement('a');
        link.href=window.URL.createObjectURL(blob);
        link.download=fileName;
        link.click();
    };

    req.send();
    // $.ajax({
    //     url: api+'/excel/excelDown?exchangeId='+exchangeId,
    //     type: 'get',
    //     dataType: 'json',
    //     success: function(response) {
    //         console.log(response);
    //         if(response.success){
    //             alert("다운로드 성공");
    //
    //         }else{
    //             alert("신청서 다운로드에 실패했습니다.");
    //             location.reload();
    //         }
    //     },error: function(xhr, ajaxOptions, thrownError) {
    //         console.log(xhr);
    //         alert("등록중 오류가 발생했습니다.");
    //     }
    // });



}


function goChangeReqDetail(exchangeId) {
    document.location.href = '/change/changeReqDetail?exchangeId='+exchangeId;
}

function updateStatus(exchangeId, status) {

    var api = $("#apiAddress").val();

    if(status == "다운"){
        doExcelDownLoad(exchangeId);
        return false;
    }


    if(status == "반려"){
        doReject(exchangeId, status);
        return false;
    }
    var msg = "";
    if(status == "완료"){
        msg = "완료 처리 하시겠습니까?";
    }else if(status == "승인"){
        msg = "승인하시겠습니까?";
    }else if(status == "취소"){
        msg = "취소 처리 하시겠습니까?";
    }
    if(confirm(msg) === false){
        return false;
    }

    $.ajax({
        url: api+'/exchange/update?exchangeId='+exchangeId+'&status='+status,
        type: 'post',
        dataType: 'json',
        success: function(response) {
            console.log(response);
            if(response.data.result){
                alert("처리되었습니다.");
                location.reload();
            }else{
                alert(response.data.msg);
                location.reload();
            }
        },error: function(xhr, ajaxOptions, thrownError) {
            alert("등록중 오류가 발생했습니다.");
        }
    });


}





function getList(callback) {
    var level = getCookie('level');
    console.log(level);
    var api = $("#apiAddress").val();
    var datas = $("#exchangeSearch").serialize();
    console.log(api);
    $.ajax({
        url : api+"/exchange/getList?type=exchange",
        type : 'GET',
        data: datas,
        dataType : 'JSON',
        success:function(response){
            console.log(response.data);
            if(response.success) {
                var html = "";
                var endDay = "";
                var phoneNumber = "";
                var list = response.data.list;
                if (list.length > 0) {
                    for (var i = 0; i < list.length; i++) {

                        if(list[i].updateDatetime == null){
                            endDay = "-";
                        }else{
                            endDay = moment(list[i].updateDatetime).format('YYYY-MM-DD');
                        }

                        if(list[i].user.phoneNumber == null || list[i].user.phoneNumber == 'undefined'){
                            phoneNumber = "-";
                        }else{
                            phoneNumber = list[i].user.phoneNumber;
                        }

                        html += '<tr>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+')">' + list[i].reqNumber + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+')">' + list[i].user.emailId + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+')">' + list[i].user.name + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+')">' + phoneNumber + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+')">' + list[i].reqType + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+')">' + list[i].reqQty + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+')">' + list[i].amount + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+')">' + moment(list[i].createDatetime).format('YYYY-MM-DD') + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+')">' + endDay + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+')">' + list[i].status + '</td>'
                            + '<td style="text-align: center">';
                                if( (list[i].status == '완료' || list[i].status == '반려' || list[i].status == '취소') && level != 'ADMIN'){
                                    html += '-';
                                }else{
                                    html += '<select id="reqStatus" name="reqStatus" onchange="updateStatus('+list[i].exchangeId+',this.value)">\
                                                <option>작업</option>\
                                                <option value="다운">신청서다운로드</option>\
                                                <option value="완료">완료</option>\
                                                <option value="승인">승인</option>\
                                                <option value="반려">반려</option>\
                                                <option value="취소">취소</option>\
                                            </select></td>';
                                }
                                html += '</tr>';
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