<#include "/layout/sidebar.ftl">
<#include "/layout/base_script.ftl">
<script src="/assets/js/admin/adminInfo.js"></script>
<!-- ============================================================== -->
<!-- Page Content -->
<!-- ============================================================== -->
<div id="page-wrapper">
    <div class="container-fluid col-md-9 col-lg-8 col-sm-12">
        <!-- ============================================================== -->
        <!-- Different data widgets -->
        <!-- ============================================================== -->
        <div class="main-content">
            <div class="main-text-manage col-auto mb-4">관리자 정보 페이지</div>
            <div class="col-auto" style="text-align: center">정보 보호를 위해 로그인 비밀번호를 한번 더 입력해 주세요.</div>
            <div class="fmain-row mt-4" style="justify-content: center;">
                <div class="col-auto mb-2">
                    <div class="mb-2">비밀번호</div>
                    <input type="password" size="30" id="password" name="password" class="form-control" placeholder="비밀번호를 입력해주세요."/>
                </div>
            </div>
            <div class="fmain-row mt-4" style="justify-content: center;">
                <div class="col-auto mb-2">
                    <button type="button" class="btn-total-view" id="checkAdmin"><span>확인</span></button>
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
