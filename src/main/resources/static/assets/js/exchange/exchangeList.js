$(function () {
    getList();

    var api = $("#apiAddress").val();
    // 페이지 로딩

    $("#insertRate").click(function () {
        if(confirm("교환비율을 저장하시겠습니까?") == false){
            alert("false");
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


});

function goNoticeList() {
    document.location.href = "/notice/noticeList";
}

function getList() {
    var api = $("#apiAddress").val();
    console.log(api);
    $.ajax({
        url : api+"/exchangeRate/getList",
        type : 'GET',
        dataType : 'JSON',
        success:function(response){
            console.log(response.data);
            $("#tg").val(response.data.exchangeRate);


        }
    });


}