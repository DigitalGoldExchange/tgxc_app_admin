$(function () {
    // 페이지 로딩
    getList();

    $("#noticeUpdate").click(function () {
        var noticeId = $("#noticeId").val();
        var title = $("#title").val();
        var contents = $("#contents").val();
        var koreanYn = $(":input:radio[name=koreanYn]:checked").val();



        if(title == '' ){
            alert("제목을 입력해주세요.");
            return false;
        }

        if(contents == '' ){
            alert("내용을 입력해주세요.");
            return false;
        }

        var api = $("#apiAddress").val();

        $.ajax({
            url: api+'/notice/updateContent?title='+title+"&contents="+contents+"&noticeId="+noticeId+"&koreanYn="+koreanYn,
            type: 'post',
            dataType: 'json',
            success: function(response) {
                if(response.success){
                    alert("수정되었습니다.");
                    document.location.href="/notice/noticeList";
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
    document.location.href = '/notice/noticeList';
}

function getList() {
    var noticeId = $("#noticeId").val();
    var api = $("#apiAddress").val();
    console.log(api);
    $.ajax({
        url : api+"/notice/getOne?noticeId="+noticeId,
        type : 'GET',
        dataType : 'JSON',
        success:function(response){
            console.log(response);
            if(response.success) {
                $("#title").val(response.data.title);
                $("#contents").val(response.data.contents);
                if(response.data.type == 'KO'){
                    $("input:radio[name='koreanYn']:radio[value='Y']").prop('checked', true);
                }else{
                    $("input:radio[name='koreanYn']:radio[value='N']").prop('checked', true);
                }

            }


        }
    });


}