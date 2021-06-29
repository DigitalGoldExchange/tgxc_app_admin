<#include "/layout/sidebar.ftl">
<#include "/layout/base_script.ftl">
<script src="/assets/js/notice/noticeDetail.js"></script>
<!-- ============================================================== -->
<!-- Page Content -->
<!-- ============================================================== -->
<div id="page-wrapper">
    <div class="container-fluid">
<#--        <div class="container-fluid col-md-9 col-lg-8 col-sm-12">-->
        <input type="hidden" id="noticeId" value="${noticeId?string}">
        <!-- ============================================================== -->
        <!-- Different data widgets -->
        <!-- ============================================================== -->
        <div class="main-content">
            <form id="insertNotice" method="post">
                <div class="fmain-paymentlist-row m-2 justify-content-between align-items-center">
                    <div class="main-text col-auto ">공지관리</div>
                </div>

                <div class="fmain-row" style="justify-content: center;margin-top: 50px;">
                    <div class="col-auto mb-2">
                        <div class="mb-2">제목</div>
                        <input type="text" size="30" id="title" name="title" class="form-control"/>
                    </div>
                </div>

                <div class="fmain-row mt-4" style="justify-content: center;">
                    <textarea  id="contents" name="contents" cols="32" rows="7"></textarea>
                </div>

                <div class="fmain-row mt-4" style="justify-content: center;">
                    <div class="col-auto mb-2">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="koreanYn1" name="koreanYn" value="Y">
                            <label class="form-check-label" for="koreanYn1">한글</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="koreanYn2" name="koreanYn" value="N">
                            <label class="form-check-label" for="koreanYn2">영문</label>
                        </div>
                    </div>
                </div>
            </form>

            <div class="fmain-row mt-4" style="justify-content: center;">
                <div class="col-auto mb-2">
                    <button type="button" class="btn-total-view" id="noticeUpdate"><span>수정</span></button>
                    <button type="button" class="btn-total-view" onClick=goNoticeList() ><span>취소</span></button>
                </div>
            </div>

        </div>
    </div>
</div>
<!-- ============================================================== -->
<!-- End Page Content -->
<!-- ============================================================== -->
</div>
<!-- ============================================================== -->
<!-- End Wrapper -->
<!-- ============================================================== -->
<!-- ============================================================== -->

</body>

</html>
