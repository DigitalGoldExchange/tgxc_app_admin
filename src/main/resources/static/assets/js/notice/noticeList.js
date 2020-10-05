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

function goNoticeAdd() {
    document.location.href = '/notice/noticeAdd';
}

function getList(callback) {

    var api = $("#apiAddress").val();
    var searchWord = $("#searchWord").val();
    console.log(api);
    $.ajax({
        url : api+"/notice/getList?searchWord="+searchWord,
        type : 'GET',
        dataType : 'JSON',
        success:function(response){
            console.log(response.data);
            if(response.success) {
                var html = "";
                var dispYn = "";
                var list = response.data.list;
                if (list.length > 0) {
                    for (var i = 0; i < list.length; i++) {

                        if(list[i].dispYn == "Y"){
                            dispYn = "표시";
                        }else{
                            dispYn = "숨김";
                        }

                        html += '<tr>'
                            + '<td style="text-align: center">' + list[i].noticeId + '</td>'
                            + '<td style="text-align: center">' + list[i].title + '</td>'
                            + '<td style="text-align: center">' + moment(list[i].createDatetime).format('YYYY-MM-DD') + '</td>'
                            + '<td style="text-align: center">' + dispYn + '</td>'
                            + '<td style="text-align: center">-</td>'
                            + '</tr>';
                    }
                    $("#noticeList").empty();
                    $("#noticeList").append(html);

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
                    var html = '<tr><td colspan="5" align="center">내역이 존재하지 않습니다.</td></tr>';
                    $("#noticeList").empty();
                    $("#noticeList").append(html);
                }
            }


        }
    });


}