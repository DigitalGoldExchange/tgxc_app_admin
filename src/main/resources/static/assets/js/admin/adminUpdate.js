$(function () {
    // 페이지 로딩
    getList(true);

    var api = $("#apiAddress").val();

    $("#saveManageInfo").click(function () {
        if(confirm("저장하시겠습니까?") == false){
            return false;
        }


        var menuLevelArray = new Array();

        // var userValue = $("input[name='userId']").length;
        //
        // for(var i=0; i<userValue; i++) {
        //     menuLevelArray.push($("input[name='userId']")[i].value);
        //     $(".menuLevel_"+i).each(function () {
        //         if ($(this).is(":checked")) {
        //             menuLevelArray.push($(this).val());
        //         }
        //     });
        // }
        $(".rowData").each(function(i){
            var userId = $(this).find(".userId").val();
            var checkArr = [];
            $(".menuLevel_"+i).each(function(){
                if($(this).is(":checked")){
                    // console.log(userId,$(this).val());
                    checkArr.push($(this).val());
                }
            });
            var result = userId+"|"+checkArr.join(",");
            menuLevelArray.push(result);

        });

        var datas = menuLevelArray.join(";");
        console.log(datas);
        $.ajax({
            url: api+'/user/updateLevel',
            type: 'post',
            dataType: 'json',
            data: "level="+datas,
            success: function(response) {
                console.log(response);
                if(response.success){
                    alert("정상적으로 저장되었습니다.");
                    location.reload();
                }else{
                    alert("실패했습니다.");
                }
            },error: function(xhr, ajaxOptions, thrownError) {
                alert("오류가 발생했습니다.");
            }
        });


    });

});

function updateStatus(userId) {
    var api = $("#apiAddress").val();
    var msg = "";
    if($("#userStatus").val() == 1){
        msg = "비밀번호를 변경하시겠습니까?";
    }else if($("#userStatus").val() == 2){
        msg = "관리자를 삭제하시겠습니까?";
    }

    if(confirm(msg) == false){
        return false;
    }

    $.ajax({
        url: api+'/user/delete?userId='+userId,
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

                        html += '<tr class="rowData">'
                            + '<input type="hidden" class="userId" name="userId" value="'+list[i].userId+'">'
                            + '<td style="text-align: center">' + list[i].name + '</td>'
                            + '<td style="text-align: center">' + list[i].emailId + '</td>'
                            + '<td style="text-align: center" class="td"><input class="menuLevel_'+i+'" type="checkbox" name="menuLevel" value="exchange"';if(list[i].menuLevel.includes("exchange")){html+='checked';}html+='></td>'
                            + '<td style="text-align: center" class="td"><input class="menuLevel_'+i+'" type="checkbox" name="menuLevel" value="user"';if(list[i].menuLevel.includes("user")){html+='checked';}html+='></td>'
                            + '<td style="text-align: center" class="td"><input class="menuLevel_'+i+'" type="checkbox" name="menuLevel" value="notice"';if(list[i].menuLevel.includes("notice")){html+='checked';}html+='></td>'
                            + '<td style="text-align: center" class="td"><input class="menuLevel_'+i+'" type="checkbox" name="menuLevel" value="store"';if(list[i].menuLevel.includes("store")){html+='checked';}html+='></td>'
                            + '<td style="text-align: center">' + moment(list[i].createDatetime).format('YYYY-MM-DD') + '</td>'
                            + '<td style="text-align: center">\
                                     <select id="userStatus" name="userStatus" onchange="updateStatus('+list[i].userId+')">\
                                        <option>작업</option>\
                                        <option value="1">비밀번호변경</option>\
                                        <option value="2">삭제</option>\
                                    </select></td>'
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

function goAdminAdd() {
    document.location.href = "/admin/adminAdd";
}