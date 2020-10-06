$(function () {
    // 페이지 로딩
    getList(true);

});


function getList(callback) {

    var api = $("#apiAddress").val();
    console.log(api);
    $.ajax({
        url : api+"/user/getManageList",
        type : 'GET',
        dataType : 'JSON',
        success:function(response){
            console.log(response.data);
            if(response.success) {
                var html = "";
                var list = response.data.list;
                if (list.length > 0) {
                    for (var i = 0; i < list.length; i++) {

                        html += '<tr>'
                            + '<td style="text-align: center">' + list[i].name + '</td>'
                            + '<td style="text-align: center">' + list[i].emailId + '</td>'
                            + '<td style="text-align: center"><input class="menuLevel" type="checkbox" id="level_exchange" name="menuLevel" value="exchange"';if(list[i].menuLevel.includes("exchange")){html+='checked';}html+='></td>'
                            + '<td style="text-align: center"><input class="menuLevel" type="checkbox" id="level_user" name="menuLevel" value="user"';if(list[i].menuLevel.includes("user")){html+='checked';}html+='></td>'
                            + '<td style="text-align: center"><input class="menuLevel" type="checkbox" id="level_notice" name="menuLevel" value="notice"';if(list[i].menuLevel.includes("notice")){html+='checked';}html+='></td>'
                            + '<td style="text-align: center"><input class="menuLevel" type="checkbox" id="level_store" name="menuLevel" value="store"';if(list[i].menuLevel.includes("store")){html+='checked';}html+='></td>'
                            + '<td style="text-align: center">' + moment(list[i].createDatetime).format('YYYY-MM-DD') + '</td>'
                            + '<td style="text-align: center">-</td>'
                            + '</tr>';

                    }
                    $("#manageList").empty();
                    $("#manageList").append(html);

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
                    var html = '<tr><td colspan="8" align="center">내역이 존재하지 않습니다.</td></tr>';
                    $("#manageList").empty();
                    $("#manageList").append(html);
                }
            }


        }
    });


}

function goMain() {
    document.location.href = "/change/changeReq";
}