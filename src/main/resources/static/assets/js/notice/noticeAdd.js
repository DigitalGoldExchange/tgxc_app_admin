$(function () {
    var api = $("#apiAddress").val();
    // 페이지 로딩

    $("#noticeInsert").click(function () {

        var title = $("#title").val();
        var contents = $("#contents").val();
        if(title == '' ){
            alert("제목을 입력해주세요.");
            return false;
        }

        if(contents == '' ){
            alert("내용을 입력해주세요.");
            return false;
        }

        //공지사항 등록
        addNotice();

    });

    function addNotice() {
        var datas = $("#insertNotice").serialize();
        $.ajax({
            url: api+'/notice/insert',
            type: 'post',
            data: datas,
            dataType: 'json',
            success: function(response) {
                if(response.success){
                    alert("등록되었습니다.");
                    document.location.href="/notice/noticeList";
                }else{
                    alert(response.msg);
                }
            },error: function(xhr, ajaxOptions, thrownError) {
                alert("등록중 오류가 발생했습니다.");
            }
        });
    }



});

function goNoticeList() {
    document.location.href = "/notice/noticeList";
}

