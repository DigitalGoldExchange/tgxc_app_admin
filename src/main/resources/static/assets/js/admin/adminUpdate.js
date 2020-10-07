$(function () {
    // 페이지 로딩
    getList(true);

    var api = $("#apiAddress").val();

    $("#saveManageInfo").click(function () {
        if(confirm("저장하시겠습니까?") == false){
            return false;
        }


        var menuLevelArray = new Array();

        // var fileValue = $("input[name='userId']").length;
        // var fileData = new Array(fileValue);
        // for(var i=0; i<fileValue; i++){
        //     // fileData[i] = $("input[name='userId']")[i].value;
        //     fileData.push($("input[name='userId']")[i].value);
        //     $(".menuLevel").each(function(){
        //         if($(this).is(":checked")){
        //             fileData.push($("input[name='menuLevel']")[i].value);
        //         }
        //     });
        // }
        // alert(fileData);



        var userValue = $("input[name='userId']").length;
        var levelValue = $("input[name='menuLevel']")[0].length;
        alert(levelValue);
        for(var i=0; i<userValue; i++) {
            menuLevelArray.push($("input[name='userId']")[i].value);
            if($("input[name='menuLevel']").is(":checked")){
                menuLevelArray.push($("input[name='menuLevel']")[i].value);
            }
            // $(".menuLevel").each(function () {
            //     if ($(this).is(":checked")) {
            //         menuLevelArray.push($(this).val());
            //     }
            // });
        }

        alert(menuLevelArray);
        // {1|exchange,notice}
        // {2|notice}



        //userId

        // $.ajax({
        //     url: api+'/user/insertAdmin?name='+name+"&password="+pw+"&emailId="+emailId+"&menuLevel="+menuLevelArray,
        //     type: 'post',
        //     dataType: 'json',
        //     success: function(response) {
        //         console.log(response);
        //         if(response.success){
        //             alert("관리자가 추가되었습니다.");
        //             document.location.href="/change/changeReq";
        //         }else{
        //             alert(response.msg);
        //         }
        //     },error: function(xhr, ajaxOptions, thrownError) {
        //         alert("오류가 발생했습니다.");
        //     }
        // });


    });

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
                            + '<input type="hidden"  id="userId" name="userId" value="'+list[i].userId+'">'
                            + '<td style="text-align: center">' + list[i].name + '</td>'
                            + '<td style="text-align: center">' + list[i].emailId + '</td>'
                            + '<td style="text-align: center" class="td"><input class="menuLevel" type="checkbox" id="level_exchange" name="menuLevel[]" value="exchange"';if(list[i].menuLevel.includes("exchange")){html+='checked';}html+='></td>'
                            + '<td style="text-align: center" class="td"><input class="menuLevel" type="checkbox" id="level_user" name="menuLevel[]" value="user"';if(list[i].menuLevel.includes("user")){html+='checked';}html+='></td>'
                            + '<td style="text-align: center" class="td"><input class="menuLevel" type="checkbox" id="level_notice" name="menuLevel[]" value="notice"';if(list[i].menuLevel.includes("notice")){html+='checked';}html+='></td>'
                            + '<td style="text-align: center" class="td"><input class="menuLevel" type="checkbox" id="level_store" name="menuLevel[]" value="store"';if(list[i].menuLevel.includes("store")){html+='checked';}html+='></td>'
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

function goAdminAdd() {
    document.location.href = "/admin/adminAdd";
}