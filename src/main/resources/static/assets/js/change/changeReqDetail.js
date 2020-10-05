$(function () {
    // 페이지 로딩

    getList();
});

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
                    + '</tr>';

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