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
            var method = response.data.exchangeMethod.split(",");
            for(var i =0; i < method.length;i++){
                $("#receiveType_"+method[i]).prop("checked",true);
            }
        }
    });


}