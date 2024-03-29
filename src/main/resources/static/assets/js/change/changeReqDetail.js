$(function () {
    // 페이지 로딩

    getList();
    var api = $("#apiAddress").val();

    $("#identifyImage").on("show.bs.modal",function(event){
        var button = $(event.relatedTarget);
        var upload_file = button.data("originimg");
        $("#identify_img").attr("src",api+"/uploads/"+upload_file);
    });

    $("#faceImage").on("show.bs.modal",function(event){
        var button = $(event.relatedTarget);
        var upload_file = button.data("originimg");
        // var file = api+"/uploads/"+button.data("originimg");
        // console.log(file);
        $("#face_img").attr("src",api+"/uploads/"+upload_file);
    });
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




}


function updateStatus(exchangeId, status) {

    var api = $("#apiAddress").val();

    if(status == "다운"){
        doExcelDownLoad(exchangeId);
        return false;
    }

    if(status == "반려"){
        doReject(exchangeId);
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
                var phoneNumber = "";
                var exchangeInfo = response.data.exchangeInfo;
                var exchangeImage = response.data.userExchangeImages;

                if(exchangeInfo.updateDatetime == null){
                    endDay = "-";
                }else{
                    endDay = moment(exchangeInfo.updateDatetime).format('YYYY-MM-DD');
                }

                if(exchangeInfo.user.phoneNumber == null || exchangeInfo.user.phoneNumber == 'undefined'){
                    phoneNumber = "-";
                }else{
                    phoneNumber = exchangeInfo.user.phoneNumber;
                }

                html += '<tr>'
                    + '<td style="text-align: center">' + exchangeInfo.reqNumber + '</td>'
                    + '<td style="text-align: center">' + exchangeInfo.user.emailId + '</td>'
                    + '<td style="text-align: center">' + exchangeInfo.user.name + '</td>'
                    + '<td style="text-align: center">' + phoneNumber + '</td>'
                    + '<td style="text-align: center">' + exchangeInfo.reqType + '</td>'
                    + '<td style="text-align: center">' + exchangeInfo.reqQty + '</td>'
                    + '<td style="text-align: center">' + exchangeInfo.amount + '</td>'
                    + '<td style="text-align: center">' + moment(exchangeInfo.createDatetime).format('YYYY-MM-DD') + '</td>'
                    + '<td style="text-align: center">' + endDay + '</td>'
                    + '<td style="text-align: center">' + exchangeInfo.status + '</td>'
                    + '<td style="text-align: center">';
                        if(exchangeInfo.status =='완료' && level != 'ADMIN'){
                            html += '-';
                        }else{
                            html += '<select id="reqStatus" name="reqStatus" onchange="updateStatus('+exchangeInfo.exchangeId+', this.value)">\
                                        <option>작업</option>\
                                        <option value="다운">신청서다운로드</option>\
                                        <option value="완료">완료</option>\
                                        <option value="승인">승인</option>\
                                        <option value="반려">반려</option>\
                                        <option value="취소">취소</option>\
                                    </select></td>';
                        }
                            html += '</tr>\
                            <tr><td colspan="11" align="right">\
                                <button type="button" class="btn-total-view" data-toggle="modal" data-target="#identifyImage" data-originimg="'+exchangeImage.identifyCardPath+'"><span>신분증사진</span></button>\
                                <button type="button" class="btn-total-view" data-toggle="modal" data-target="#faceImage" data-originimg="'+exchangeImage.profileImagePath+'"><span>얼굴사진</span></button>\
                                </td></tr>';
                      if(exchangeInfo.status == "반려"){
                          html += '<tr><td colspan="11" align="right">반려사유 : '+exchangeInfo.note+'</td></tr>';
                      }

                $("#changeReqDetail").empty();
                $("#changeReqDetail").append(html);

                //거래이력
                var exchangeList = response.data.exchangeList;
                var htmlList = "";
                var reqNumber = "";
                var userStatus = "";
                if (exchangeList.length > 0) {
                    for (var i = 0; i < exchangeList.length; i++) {

                        if(exchangeList[i].updateDatetime == null){
                            endDay = "-";
                        }else{
                            endDay = moment(exchangeList[i].updateDatetime).format('YYYY-MM-DD');
                        }

                        if(exchangeList[i].reqNumber == null || exchangeList[i].reqNumber == 'undefined'){
                            reqNumber = "-";
                        }else{
                            reqNumber = exchangeList[i].reqNumber;
                        }

                        if(exchangeList[i].status == null || exchangeList[i].status == 'undefined'){
                            userStatus = "-";
                        }else{
                            userStatus = exchangeList[i].status;
                        }

                        htmlList += '<tr>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+exchangeList[i].exchangeId+')">' + reqNumber + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+exchangeList[i].exchangeId+')">' + moment(exchangeList[i].createDatetime).format('YYYY-MM-DD') + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+exchangeList[i].exchangeId+')">' + endDay + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+exchangeList[i].exchangeId+')">' + exchangeList[i].reqType + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+exchangeList[i].exchangeId+')">' + exchangeList[i].reqQty + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+exchangeList[i].exchangeId+')">' + exchangeList[i].amount + '</td>'
                            + '<td style="text-align: center" onclick="goChangeReqDetail('+exchangeList[i].exchangeId+')">' + userStatus + '</td>'
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