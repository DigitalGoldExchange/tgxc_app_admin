$(function () {
    getList();

    var api = $("#apiAddress").val();
    // 페이지 로딩

    $("#insertRate").click(function () {
        if(confirm("교환비율을 저장하시겠습니까?") == false){
            return false;
        }

        var exchangeRate = $("#tg").val();
        $.ajax({
            url: api+'/exchangeRate/insert?exchangeRate='+exchangeRate,
            type: 'post',
            dataType: 'json',
            success: function(response) {
                if(response.success){
                    alert("등록되었습니다.");
                    location.reload();
                }else{
                    alert(response.msg);
                }
            },error: function(xhr, ajaxOptions, thrownError) {
                alert("등록중 오류가 발생했습니다.");
            }
        });

    });

    $("#insertAddress").click(function () {

        var walletAddress = $("#walletAddress").val();

        if(walletAddress == '' ){
            alert("지갑주소를 입력해주세요.");
            return false;
        }

        if(confirm("지갑주소를 저장하시겠습니까?") == false){
            return false;
        }

        $.ajax({
            url: api+'/deposit/insert?walletAddress='+walletAddress,
            type: 'post',
            dataType: 'json',
            success: function(response) {
                if(response.success){
                    alert("등록되었습니다.");
                    location.reload();
                }else{
                    alert(response.msg);
                }
            },error: function(xhr, ajaxOptions, thrownError) {
                alert("등록중 오류가 발생했습니다.");
            }
        });

    });

    $("#saveReceiveType").click(function () {

        if($('input:checkbox[name=receiveType]:checked').length == 0){
            alert("교환관리를 최소 1개 이상 선택해야 합니다.");
            $('#receiveType_0').focus();
            return false;
        }

        if(confirm("교환관리를 저장하시겠습니까?") == false){
            return false;
        }

        var receiveTypeArray = new Array();

        $(".receiveType").each(function(){
            if($(this).is(":checked")){
                receiveTypeArray.push($(this).val());
            }
        });


        $.ajax({
            url: api+'/exchangeMethod/insert?exchangeMethod='+receiveTypeArray,
            type: 'post',
            dataType: 'json',
            success: function(response) {
                if(response.success){
                    alert("등록되었습니다.");
                    location.reload();
                }else{
                    alert(response.msg);
                }
            },error: function(xhr, ajaxOptions, thrownError) {
                alert("등록중 오류가 발생했습니다.");
            }
        });

    });


    $("#submit_btn").click(function () {

        var name = $("#name").val();
        var address = $("#address").val();
        var phoneNumber = $("#phoneNumber").val();

        if(name == '' ){
            alert("매장명을 입력해주세요.");
            return false;
        }
        if(address == '' ){
            alert("주소를 입력해주세요.");
            return false;
        }
        if(phoneNumber == '' ){
            alert("전화번호를 입력해주세요.");
            return false;
        }

        if(confirm("매장을 추가하시겠습니까?") == false){
            return false;
        }

        $.ajax({
            url: api+'/exchangeStore/insert?name='+name+'&address='+address+'&phoneNumber='+phoneNumber,
            type: 'post',
            dataType: 'json',
            success: function(response) {
                if(response.success){
                    alert("등록되었습니다.");
                    location.reload();
                }else{
                    alert(response.msg);
                }
            },error: function(xhr, ajaxOptions, thrownError) {
                alert("등록중 오류가 발생했습니다.");
            }
        });

    });

    $("#update_btn").click(function () {
        var name = $("#name1").val();
        var address = $("#address1").val();
        var phoneNumber = $("#phoneNumber1").val();
        var storeId1 = $("#storeId").val();

        if(name == '' ){
            alert("매장명을 입력해주세요.");
            return false;
        }
        if(address == '' ){
            alert("주소를 입력해주세요.");
            return false;
        }
        if(phoneNumber == '' ){
            alert("전화번호를 입력해주세요.");
            return false;
        }

        if(confirm("매장을 수정하시겠습니까?") == false){
            return false;
        }

        $.ajax({
            url: api+'/exchangeStore/update?name='+name+'&address='+address+'&phoneNumber='+phoneNumber+'&storeId='+storeId1,
            type: 'post',
            dataType: 'json',
            success: function(response) {
                if(response.success){
                    alert("수정되었습니다.");
                    location.reload();
                }else{
                    alert(response.msg);
                }
            },error: function(xhr, ajaxOptions, thrownError) {
                alert("수정중 오류가 발생했습니다.");
            }
        });

    });

    $("#updateStore").click(function () {

        if($('input:checkbox[name=activeStore]:checked').length > 0){
            alert("활성화 매장은 수정할 수 없습니다.");
            return false;
        }else if($('input:checkbox[name=inactiveStore]:checked').length == 0){
            alert("매장을 최소 1개 선택해야 합니다.");
            return false;
        }else if($('input:checkbox[name=inactiveStore]:checked').length > 1){
            alert("1개의 매장씩 수정이 가능합니다.");
            return false;
        }


        var chkValueArr = [];

        $(".inactiveListCheck").each(function () {
            if($(this).is(":checked")) chkValueArr.push($(this).val());
        });

        $.ajax({
            url: api+'/exchangeStore/getOne?storeId='+chkValueArr,
            type: 'get',
            dataType: 'json',
            success: function(response) {
                console.log(response);
                if(response.success){
                    $("#name1").val(response.data.exchangeStore.storeName);
                    $("#address1").val(response.data.exchangeStore.address);
                    $("#phoneNumber1").val(response.data.exchangeStore.phoneNumber);
                    $("#storeId").val(response.data.exchangeStore.exchangeStoreId);
                    $('#myModal1').modal('show');

                }else{
                    alert("매장 수정 실패");
                }
            },error: function(xhr, ajaxOptions, thrownError) {
                alert("수정중 오류가 발생했습니다.");
            }
        });
    });

    $("#updateActive").click(function () {

        if($('input:checkbox[name=inactiveStore]:checked').length == 0){
            alert("매장을 최소 1개 이상 선택해야 합니다.");
            return false;
        }

        var chkValueArr = [];

        $(".inactiveListCheck").each(function () {
            if($(this).is(":checked")) chkValueArr.push($(this).val());
        });

        $.ajax({
            url: api+'/exchangeStore/activeUpdate?storeId='+chkValueArr,
            type: 'post',
            dataType: 'json',
            success: function(response) {
                if(response.success){
                    alert("활성매장으로 등록되었습니다.");
                    location.reload();
                }else{
                    alert("매장 활성화 실패");
                }
            },error: function(xhr, ajaxOptions, thrownError) {
                alert("등록중 오류가 발생했습니다.");
            }
        });
    });



    $("#inactiveAllCheck").click(function(){
        if($(this).is(":checked")){
            $(".inactiveListCheck").prop("checked",true);
        }else{
            $(".inactiveListCheck").prop("checked",false);
        }
    });


    $("#updateInactive").click(function () {

        if($('input:checkbox[name=activeStore]:checked').length == 0){
            alert("매장을 최소 1개 이상 선택해야 합니다.");
            return false;
        }
        var chkValueArr = [];

        $(".activeListCheck").each(function () {
            if($(this).is(":checked")) chkValueArr.push($(this).val());
        });

        $.ajax({
            url: api+'/exchangeStore/inactiveUpdate?storeId='+chkValueArr,
            type: 'post',
            dataType: 'json',
            success: function(response) {
                if(response.success){
                    alert("비활성 매장으로 등록되었습니다.");
                    location.reload();
                }else{
                    alert("매장 비활성화 실패");
                }
            },error: function(xhr, ajaxOptions, thrownError) {
                alert("등록중 오류가 발생했습니다.");
            }
        });
    });

    $("#activeAllCheck").click(function(){
        if($(this).is(":checked")){
            $(".activeListCheck").prop("checked",true);
        }else{
            $(".activeListCheck").prop("checked",false);
        }
    });

    $("#deleteStore").click(function () {

        if($('input:checkbox[name=inactiveStore]:checked').length == 0){
            alert("매장을 최소 1개 이상 선택해야 합니다.");
            return false;
        }

        var chkValueArr = [];

        $(".inactiveListCheck").each(function () {
            if($(this).is(":checked")) chkValueArr.push($(this).val());
        });

        $.ajax({
            url: api+'/exchangeStore/delete?storeId='+chkValueArr,
            type: 'post',
            dataType: 'json',
            success: function(response) {
                if(response.success){
                    alert("삭제되었습니다.");
                    location.reload();
                }else{
                    alert("매장 활성화 실패");
                }
            },error: function(xhr, ajaxOptions, thrownError) {
                alert("등록중 오류가 발생했습니다.");
            }
        });
    });


});


function getList() {
    var api = $("#apiAddress").val();
    console.log(api);
    $.ajax({
        url : api+"/exchangeRate/getList",
        type : 'GET',
        dataType : 'JSON',
        success:function(response){
            console.log(response.data);
            $("#tg").val(response.data.exchangeRate.exchangeRate);
            $("#walletAddress").val(response.data.depositAccount.account);
            var method = response.data.exchangeMethod.split(",");
            for(var i =0; i < method.length;i++){
                $("#receiveType_"+method[i]).prop("checked",true);
            }
            //비활성화 매장
            var inactiveStoreList = response.data.inactiveStoreList;
            var html = "";
            if(inactiveStoreList.length > 0){
                for (var i = 0; i < inactiveStoreList.length; i++) {
                    html += '<tr>'
                        + '<td scope="row"><div class="form-check"><input class="inactiveListCheck" name="inactiveStore" type="checkbox" value="'+inactiveStoreList[i].exchangeStoreId+'" aria-label="..."></div></td>'
                        + '<td style="text-align: center">' + inactiveStoreList[i].storeName + '</td>'
                        + '</tr>';
                }
                $("#inactiveStoreList").empty();
                $("#inactiveStoreList").append(html);

            }else{
                var html = '<tr><td colspan="2" align="center">내역이 존재하지 않습니다.</td></tr>';
                $("#inactiveStoreList").empty();
                $("#inactiveStoreList").append(html);
            }

            //활성매장
            var activeStoreList = response.data.activeStoreList;
            var html2 = "";
            if(activeStoreList.length > 0){
                for (var i = 0; i < activeStoreList.length; i++) {
                    html2 += '<tr>'
                        + '<td scope="row"><div class="form-check"><input class="activeListCheck" name="activeStore" type="checkbox" value="'+activeStoreList[i].exchangeStoreId+'" aria-label="..."></div></td>'
                        + '<td style="text-align: center">' + activeStoreList[i].storeName + '</td>'
                        + '</tr>';
                }
                $("#activeStoreList").empty();
                $("#activeStoreList").append(html2);

            }else{
                var html2 = '<tr><td colspan="2" align="center">내역이 존재하지 않습니다.</td></tr>';
                $("#activeStoreList").empty();
                $("#activeStoreList").append(html2);
            }




        }
    });


}