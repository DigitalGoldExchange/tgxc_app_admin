<#include "/layout/sidebar.ftl">
<#include "/layout/base_script.ftl">
<script src="/assets/js/admin/adminUpdate.js"></script>
<!-- ============================================================== -->
<!-- Page Content -->
<!-- ============================================================== -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <b id="modal-top-title">비밀번호 초기화</b>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <table class="table table-bordered">
                    <tbody>
                    <th>초기화할 비밀번호를 입력해주세요.</th>
                    <tr>
                        <td><input type="text" class="form-control" name="password" id="password" maxlength="25"></td>
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
    <div class="container-fluid col-md-9 col-lg-8 col-sm-12">
        <!-- ============================================================== -->
        <!-- Different data widgets -->
        <!-- ============================================================== -->
        <div class="main-content">
            <div class="fmain-paymentlist-row m-2 justify-content-between align-items-center">
                <div class="main-text col-auto ">관리자 관리</div>
                <div class="col-auto mb-2">
                    <button type="button" class="btn-total-view" onClick=goAdminAdd()><span>관리자 추가</span></button>
                </div>
            </div>
            <div class="fmain-col-grid">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th rowspan="2" style="text-align: center; vertical-align: middle;">이름</th>
                            <th rowspan="2" style="text-align: center; vertical-align: middle;">아이디</th>
                            <th colspan="4" style="text-align: center; vertical-align: middle;">권한</th>
                            <th rowspan="2" style="text-align: center; vertical-align: middle;">최근접속</th>
                            <th rowspan="2" style="text-align: center; vertical-align: middle;">작업</th>
                        </tr>
                        <tr>
                            <th style="text-align: center">교환관리</th>
                            <th style="text-align: center">회원정보관리</th>
                            <th style="text-align: center">공지관리</th>
                            <th style="text-align: center">교환관리</th>
                        </tr>
                        </thead>
                        <tbody id="manageList">
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="fmain-paymentlist-row m-2 justify-content-between align-items-center">
                <div class="main-text col-auto "></div>
                <div class="col-auto mb-2">
                    <button type="button" class="btn-total-view" id="saveManageInfo"><span>저장</span></button>
                    <button type="button" class="btn-total-view" onClick=goMain()><span>취소</span></button>
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
