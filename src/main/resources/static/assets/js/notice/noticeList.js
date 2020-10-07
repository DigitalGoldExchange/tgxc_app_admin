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

function updateStatus(noticeId) {

    var api = $("#apiAddress").val();
    var msg = "";
    if($("#noticeStatus").val() == "Y"){
        msg = "숨김 해지 되었습니다.";
    }else if($("#noticeStatus").val() == "N"){
        msg = "숨김처리 되었습니다.";
    }else if($("#noticeStatus").val() == "D"){
        if(confirm("삭제하시겠습니까?") == false){
            return false;
        }
        msg = "삭제되었습니다.";
    }



    $.ajax({
        url: api+'/notice/update?noticeId='+noticeId+'&status='+$("#noticeStatus").val(),
        type: 'post',
        dataType: 'json',
        success: function(response) {
            if(response.success){
                alert(msg);
                location.reload();
            }else{
                alert(response.msg);
            }
        },error: function(xhr, ajaxOptions, thrownError) {
            alert("등록중 오류가 발생했습니다.");
            location.reload();
        }
    });


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
                            + '<td style="text-align: center">\
                                    <select id="noticeStatus" name="noticeStatus" onchange="updateStatus('+list[i].noticeId+')">\
                                        <option>작업</option>\
                                        <option value="N">숨김처리</option>\
                                        <option value="Y">숨김해지</option>\
                                        <option value="D">삭제처리</option>\
                                    </select></td>'
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