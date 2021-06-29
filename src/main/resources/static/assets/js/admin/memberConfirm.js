$(function () {
    // 페이지 로딩
    getList();

    $("#checkReqNumber").click(function () {

        var reqNumber = $("#reqNumber").val();
        if(reqNumber == '' ) {
            alert("신청번호를 입력해주세요.");
            return false;
        }
        getList(reqNumber);

        var api = $("#apiAddress").val();

        $("#identifyImage").on("show.bs.modal",function(event){
            var button = $(event.relatedTarget);
            var upload_file = button.data("originimg");
            $("#identify_img").attr("src",api+"/uploads/"+upload_file);
        });

        $("#faceImage").on("show.bs.modal",function(event){
            var button = $(event.relatedTarget);
            var upload_file = button.data("originimg");
            $("#face_img").attr("src",api+"/uploads/"+upload_file);
        });


    });
});



    function getList(reqNumber) {
        var api = $("#apiAddress").val();
        console.log(api);
        $.ajax({
            url : api+"/exchange/getMemberConfirmList?reqNumber="+reqNumber,
            type : 'GET',
            dataType : 'JSON',
            success:function(response){
                console.log(response.data);
                if(response.success) {
                    if(response.data.exchangeInfo != null){
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
                            + '<td style="text-align: center">' + exchangeInfo.amount + '</td>'
                            + '<td style="text-align: center">' + moment(exchangeInfo.createDatetime).format('YYYY-MM-DD') + '</td>'
                            + '<td style="text-align: center">' + endDay + '</td>'
                            + '<td style="text-align: center">' + exchangeInfo.status + '</td>'
                            + '<td style="text-align: center">';
                        html += '</tr>\
                            <tr><td colspan="8" align="right">\
                                <button type="button" class="btn-total-view" data-toggle="modal" data-target="#identifyImage" data-originimg="'+exchangeImage.identifyCardPath+'"><span>신분증사진</span></button>\
                                <button type="button" class="btn-total-view" data-toggle="modal" data-target="#faceImage" data-originimg="'+exchangeImage.profileImagePath+'"><span>얼굴사진</span></button>\
                                </td></tr>';
                        if(exchangeInfo.status == "반려"){
                            html += '<tr><td colspan="8" align="right">반려사유 : '+exchangeInfo.note+'</td></tr>';
                        }

                        $("#reqList").empty();
                        $("#reqList").append(html);
                    }else{
                        var html = '<tr><td colspan="8" align="center">신청번호로 검색해주세요.</td></tr>';
                        $("#reqList").empty();
                        $("#reqList").append(html);
                    }





                }


            }
        });


    }