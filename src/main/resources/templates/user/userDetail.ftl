<#include "/layout/sidebar.ftl">
<#include "/layout/base_script.ftl">
<script src="/assets/js/user/userDetail.js"></script>
<!-- ============================================================== -->
<!-- Page Content -->
<!-- ============================================================== -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <b id="modal-top-title">알림 등록</b>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <table class="table table-bordered">
                    <tbody>
                    <th>보내실 알림을 입력해주세요.</th>
                    <tr>
                        <th>제목</th>
                    </tr>
                    <tr>
                        <td><input type="text" class="form-control" name="title" id="title" maxlength="25"></td>
                    </tr>
                    <tr>
                        <th>내용</th>
                    </tr>
                    <tr>
                        <td><input type="text" class="form-control" name="content" id="content" maxlength="25"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
                <button type="button" class="btn btn-primary" id="submit_btn">등록</button>
            </div>
        </div>
    </div>
</div>

<div id="page-wrapper">
    <input type="hidden" id="userId" value="${userId?string}">
    <div class="container-fluid col-md-9 col-lg-8 col-sm-12">
        <!-- ============================================================== -->
        <!-- Different data widgets -->
        <!-- ============================================================== -->
        <div class="main-content">
            <div class="fmain-paymentlist-row m-2 justify-content-between align-items-center">
                <div class="main-text col-auto ">회원 상세 정보</div>
                <div class="col-auto mb-2">
                    <button type="button" class="btn-total-view" onClick=goUserList()><span>돌아가기</span></button>
                    <button type="button" class="btn-total-view" data-toggle="modal" data-target="#myModal"><span>알림보내기</span></button>
                </div>
            </div>
            <div class="fmain-col-grid">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th style="text-align: center">이름</th>
                            <th style="text-align: center">이메일</th>
                            <th style="text-align: center">연락처</th>
                            <th style="text-align: center">주소</th>
                            <th style="text-align: center">보유TG</th>
                            <th style="text-align: center">가입일</th>
                            <th style="text-align: center">상태</th>
                        </tr>
                        </thead>
                        <tbody id="userDetail">
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="fmain-paymentlist-row m-2 justify-content-between align-items-center">
                <div class="main-text col-auto ">거래이력</div>
            </div>
            <div class="fmain-col-grid">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th style="text-align: center">신청번호</th>
                            <th style="text-align: center">교환신청일</th>
                            <th style="text-align: center">교환종료일</th>
                            <th style="text-align: center">신청TG량</th>
                            <th style="text-align: center">상태</th>
                        </tr>
                        </thead>
                        <tbody id="userReqList">

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
