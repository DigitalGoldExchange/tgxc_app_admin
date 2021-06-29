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

function doComplete(exchangeId, status) {
    $('#myModal1').modal('show');

    $("#submit_btn1").click(function () {

        var txid = $("#txid").val();
        if(txid == '' ) {
            alert("TXID를 입력해주세요.");
            return false;
        }
        if(confirm("TXID로 완료 하시겠습니까?") == false){
            return false;
        }
        var api = $("#apiAddress").val();

        $.ajax({
            url: api+'/exchange/depositUpdate?exchangeId='+exchangeId+'&status='+status+"&txid="+txid,
            type: 'post',
            dataType: 'json',
            success: function(response) {
                if(response.success){
                    alert("완료 처리되었습니다.");
                    location.reload();
                }else{
                    alert(response.msg);
                }
            },error: function(xhr, ajaxOptions, thrownError) {
                alert("처리중 오류가 발생했습니다.");
            }
        });

    });
}

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


function goChangeReqDetail(exchangeId, userId) {
    document.location.href = '/deposit/depositDetail?exchangeId='+exchangeId+"&userId="+userId;
}

function updateStatus(exchangeId, status) {

    var api = $("#apiAddress").val();


    if(status == "반려"){
        doReject(exchangeId, status);
        return false;
    }
    if(status == "완료"){
        doComplete(exchangeId, status);
        return false;
    }
    var msg = "";
    if(status == "진행중"){
        msg = "진행하시겠습니까?";
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
    var datas = $("#depositSearch").serialize();
    console.log(api);
    $.ajax({
        url : api+"/exchange/getDepositList",
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
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+','+list[i].user.userId+')">' + list[i].reqNumber + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+','+list[i].user.userId+')">' + list[i].user.emailId + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+','+list[i].user.userId+')">' + list[i].walletAddr + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+','+list[i].user.userId+')">' + list[i].amount + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+','+list[i].user.userId+')">' + moment(list[i].createDatetime).format('YYYY-MM-DD') + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+','+list[i].user.userId+')">' + endDay + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+list[i].exchangeId+','+list[i].user.userId+')">' + list[i].status + '</td>'
                            + '<td style="text-align: center">';
                        if((list[i].status == '완료' || list[i].status == '반려' || list[i].status == '취소') && level != 'ADMIN'){
                            html += '-';
                        }else{
                            html += '<select id="reqStatus" name="reqStatus" onchange="updateStatus('+list[i].exchangeId+',this.value)">\
                                                <option>작업</option>\
                                                <option value="완료">완료</option>\
                                                <option value="진행중">진행중</option>\
                                                <option value="반려">반려</option>\
                                                <option value="취소">취소</option>\
                                            </select></td>';
                        }
                        html += '</tr>';
                    }
                    $("#depositList").empty();
                    $("#depositList").append(html);

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
                    $("#depositList").empty();
                    $("#depositList").append(html);
                }
            }


        }
    });


}