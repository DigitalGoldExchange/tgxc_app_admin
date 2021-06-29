$(function () {
    // 페이지 로딩

    getList();
    $("#submit_btn2").click(function () {

        var userId = $("#userId").val();
        var api = $("#apiAddress").val();

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

    $("#identifyImage").on("show.bs.modal",function(event){
        var button = $(event.relatedTarget);
        var upload_file = button.data("originimg");
        $("#identify_img").attr("src","/uploads/"+upload_file);
    });

    $("#faceImage").on("show.bs.modal",function(event){
        var button = $(event.relatedTarget);
        var upload_file = button.data("originimg");
        $("#face_img").attr("src","/uploads/"+upload_file);
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
        alert(note);
        $.ajax({
            url: api+'/exchange/update?exchangeId='+exchangeId+'&status='+status+'&note='+note,
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

function doComplete(exchangeId, status) {
    $('#myModal1').modal('show');

    $("#submit_btn1").click(function () {

        var txid = $("#txid").val();
        if(txid == '' ) {
            alert("TXID를 입력해주세요.");
            return false;
        }
        if(confirm("완료 처리 하시겠습니까?") == false){
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
                alert("등록중 오류가 발생했습니다.");
            }
        });

    });
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
    if(status == "승인"){
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

function goChangeReqDetail(exchangeId) {
    document.location.href = '/change/changeReqDetail?exchangeId='+exchangeId;
}



function getList() {
    var level = getCookie('level');
    console.log(level);
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
                var txId = "";
                var exchangeInfo = response.data.exchangeInfo;

                if(exchangeInfo.updateDatetime == null){
                    endDay = "-";
                }else{
                    endDay = moment(exchangeInfo.updateDatetime).format('YYYY-MM-DD');
                }

                if(exchangeInfo.txId == null){
                    txId = "-";
                }else{
                    txId = exchangeInfo.txId;
                }

                html += '<tr>'
                    + '<td style="text-align: center">' + exchangeInfo.reqNumber + '</td>'
                    + '<td style="text-align: center">' + txId + '</td>'
                    + '<td style="text-align: center">' + exchangeInfo.user.emailId + '</td>'
                    + '<td style="text-align: center">' + exchangeInfo.walletAddr + '</td>'
                    + '<td style="text-align: center">' + exchangeInfo.user.name + '</td>'
                    + '<td style="text-align: center">' + exchangeInfo.user.phoneNumber + '</td>'
                    + '<td style="text-align: center">' + exchangeInfo.amount + '</td>'
                    + '<td style="text-align: center">' + exchangeInfo.status + '</td>'
                    + '<td style="text-align: center">';
                if( (exchangeInfo.status =='완료' || exchangeInfo.status == '반려' || exchangeInfo.status == '취소')  && level != 'ADMIN'){
                    html += '-';
                }else{
                    html += '<select id="reqStatus" name="reqStatus" onchange="updateStatus('+exchangeInfo.exchangeId+', this.value)">\
                                        <option>작업</option>\
                                        <option value="완료">완료</option>\
                                        <option value="승인">진행중</option>\
                                        <option value="반려">반려</option>\
                                        <option value="취소">취소</option>\
                                    </select></td>';
                }
                if(exchangeInfo.status == "반려"){
                    html += '<tr><td colspan="9" align="right">반려사유 : '+exchangeInfo.note+'</td></tr>';
                }

                $("#depositDetail").empty();
                $("#depositDetail").append(html);

                //거래이력
                var depositList = response.data.depositList;
                var htmlList = "";

                if (depositList.length > 0) {
                    for (var i = 0; i < depositList.length; i++) {

                        if(depositList[i].updateDatetime == null){
                            endDay = "-";
                        }else{
                            endDay = moment(depositList[i].updateDatetime).format('YYYY-MM-DD');
                        }

                        htmlList += '<tr>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+depositList[i].exchangeId+')">' + depositList[i].reqNumber + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+depositList[i].exchangeId+')">' + moment(depositList[i].createDatetime).format('YYYY-MM-DD') + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+depositList[i].exchangeId+')">' + endDay + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+depositList[i].exchangeId+')">' + depositList[i].amount + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+depositList[i].exchangeId+')">' + depositList[i].status + '</td>'
                            + '</tr>';
                    }
                    $("#depositList").empty();
                    $("#depositList").append(htmlList);

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
                    $("#depositList").empty();
                    $("#depositList").append(htmlList);
                }
                // <tr style="align-items: flex-end; flex:1">
                //         <td><button type="button" class="btn-total-view" onClick=goMain()><span>신분증사진</span></button></td>
                //     <td><button type="button" class="btn-total-view" data-toggle="modal" data-target="#originImage" data-originimg="'+response.list[i].upload_file+'"><span>얼굴사진</span></button></td>
                //     </tr>




            }


        }
    });


}

function goMain() {
    document.location.href = "/admin/home";
}