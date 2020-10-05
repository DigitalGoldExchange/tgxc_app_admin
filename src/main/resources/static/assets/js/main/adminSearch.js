$(function () {
    // 페이지 로딩
    var userId = getCookie('userId');
    $("#mainSearchDeviceUserId").val(userId);
    $("#mainSearchUserUserId").val(userId);
    $("#searchWordDevice").val($("#searchMainKey").val());
    $("#searchWordUser").val($("#searchMainKey").val());
    getMainSearchDeviceList(true);
    getMainSearchUserList(true);
});

function getMainSearchDeviceList(callback) {
    var api = $("#apiAddress").val();
    var datas = $("#mainSearchDevice").serialize();
    $.ajax({
        url: api + "/device/getList",
        type: 'GET',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            if (response.success) {
                var deviceList = '';
                var name = '';
                var emailId = '';
                if(response.data.list.length > 0){
                    for(var i = 0; i < response.data.list.length; i++){
                        if(response.data.list[i].user == null){
                            name = "-";
                            emailId = "-";
                        }else {
                            name = response.data.list[i].user.name;
                            emailId = response.data.list[i].user.emailId;
                        }
                        deviceList += '<tr onclick="goDeviceDetail('+response.data.list[i].deviceId+')">\
                                        <td style="text-align: center">'+response.data.list[i].macAddress+'</td>\
                                        <td style="text-align: center">'+numberWithCommas(response.data.list[i].todaySales)+'원</td>\
                                        <td style="text-align: center">'+numberWithCommas(response.data.list[i].thisMonthSales)+'원</td>\
                                        <td style="text-align: center">'+(response.data.list[i].address !== null ? response.data.list[i].address:"-")+'</td>\
                                        <td style="text-align: center">'+name+'</td>\
                                        <td style="text-align: center">'+emailId+'</td>\
                                        <td style="text-align: center">'+response.data.list[i].stock+'</td>\
                                      </tr>';
                    }
                    if (callback) {
                        $('#show-paginator-mainSearchDeviceList').bootpag({
                            total: response.data.totalPages,
                            page: $("#devicePage").val(),
                            maxVisible: 5,
                            leaps: true
                        }).on("page", function (event, num) {
                            $("#devicePage").val(num);
                            getMainSearchDeviceList(false);
                        });
                    }
                }else{
                    deviceList += '<tr><td colspan="8" align="center">검색 결과가 존재하지 않습니다.</td></tr>';
                }
                $("#mainSearchDeviceList").empty();
                $("#mainSearchDeviceList").append(deviceList);
            }
        }
    });
}
function getMainSearchUserList(callback) {
    var api = $("#apiAddress").val();
    var datas = $("#mainSearchUser").serialize();
    $.ajax({
        url : api+"/user/getList",
        type : 'GET',
        data : datas,
        dataType : 'JSON',
        success:function(response){
            if(response.success) {
                if(response.data.list.length>0){
                    var userList = '';
                    var addressMain = '';
                    var addressDetail = '';
                    for(var i = 0; i < response.data.list.length; i++){
                        if(response.data.list[i].addressMain == null){
                            addressMain = '';
                        }else {
                            addressMain = response.data.list[i].addressMain;
                        }
                        if(response.data.list[i].addressDetail == null){
                            addressDetail = '';
                        }else{
                            addressDetail = response.data.list[i].addressDetail;
                        }
                        userList += '<tr onclick="goUserDetail('+response.data.list[i].userId+')">\
                                    <td style="text-align: center">'+response.data.list[i].name+'</td>\
                                    <td style="text-align: center">'+response.data.list[i].emailId+'</td>\
                                    <td style="text-align: center">'+response.data.list[i].countDevice+'</td>\
                                    <td style="text-align: center">'+response.data.list[i].phoneNumber+'</td>\
                                    <td style="text-align: center">'+addressMain+' '+addressDetail+'</td>\
                                    </tr>';
                    }
                    $("#mainSearchUserList").empty();
                    $("#mainSearchUserList").append(userList);

                    if(callback){
                        $('#show-paginator-mainSearchUserList').bootpag({
                            total: response.data.totalPages,
                            page: $("#userPage").val(),
                            maxVisible: 5,
                            leaps: true
                        }).on("page", function (event, num) {
                            $("#userPage").val(num);
                            getMainSearchUserList(false);
                        });
                    }
                }else{
                    var html = '<tr><td colspan="5" align="center">검색 결과가 존재하지 않습니다.</td></tr>';
                    $("#mainSearchUserList").empty();
                    $("#mainSearchUserList").append(html);
                }
            }
        }
    });
}

function goUserDetail(userId) {
    location.href = '/user/userDetail?userId='+userId;
}

function goDeviceDetail(deviceId) {
    location.href = '/device/deviceDetail?deviceId='+deviceId;
}