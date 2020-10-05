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

                        html += '<tr onclick="goChangeReqDetail('+list[i].exchangeId+')">'
                            + '<td style="text-align: center">' + list[i].reqNumber + '</td>'
                            + '<td style="text-align: center">' + list[i].user.emailId + '</td>'
                            + '<td style="text-align: center">' + list[i].user.name + '</td>'
                            + '<td style="text-align: center">' + list[i].user.phoneNumber + '</td>'
                            + '<td style="text-align: center">' + list[i].reqAmount + '</td>'
                            + '<td style="text-align: center">' + moment(list[i].createDatetime).format('YYYY-MM-DD') + '</td>'
                            + '<td style="text-align: center">' + endDay + '</td>'
                            + '<td style="text-align: center">' + list[i].status + '</td>'
                            + '<td style="text-align: center">' + list[i].status + '</td>'
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