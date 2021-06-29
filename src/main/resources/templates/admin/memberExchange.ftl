<#include "/layout/sidebar.ftl">
<#include "/layout/base_script.ftl">
<script src="/assets/js/admin/memberConfirm.js"></script>
<!-- ============================================================== -->
<!-- Page Content -->
<!-- ============================================================== -->
<div class="modal fade " id="identifyImage" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content modal-content-none">
            <div class="modal-header">
                <b>신분증사진</b>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body text-center">
                <img id="identify_img" style="max-width:100%;">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade " id="faceImage" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content modal-content-none">
            <div class="modal-header">
                <b>얼굴사진</b>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body text-center">
                <img id="face_img" style="max-width:100%;">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
            </div>
        </div>
    </div>
</div>

<div id="page-wrapper">
    <div class="container-fluid">
        <#--        <div class="container-fluid col-md-9 col-lg-8 col-sm-12">-->
        <!-- ============================================================== -->
        <!-- Different data widgets -->
        <!-- ============================================================== -->
        <div class="main-content">
            <div class="fmain-paymentlist-row m-2 justify-content-between align-items-center">
                <div class="main-text col-auto ">교환 신청 확인</div>

                <div class="col-auto">
                    <div class="fmain-row">
                        <div style="margin-right: 10px">
                        <input type="text" size="30" id="reqNumber" name="reqNumber" class="form-control" placeholder="신청번호를 입력해주세요."/>
                        </div>
                        <div class="align-items-center justify-content-center">
                        <button type="button" class="btn-total-view" id="checkReqNumber"><span>검색</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fmain-col-grid">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th style="text-align: center">신청번호</th>
                            <th style="text-align: center">이메일</th>
                            <th style="text-align: center">이름</th>
                            <th style="text-align: center">연락처</th>
                            <th style="text-align: center">신청수량</th>
                            <th style="text-align: center">신청일</th>
                            <th style="text-align: center">종료일</th>
                            <th style="text-align: center">진행상황</th>
                        </tr>
                        </thead>
                        <tbody id="reqList">

                        </tbody>
                    </table>
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
