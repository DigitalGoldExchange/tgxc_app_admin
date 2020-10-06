<#include "/layout/sidebar.ftl">
<#include "/layout/base_script.ftl">
<script src="/assets/js/admin/adminInfoDetail.js"></script>
<!-- ============================================================== -->
<!-- Page Content -->
<!-- ============================================================== -->
<div id="page-wrapper">
    <div class="container-fluid col-md-9 col-lg-8 col-sm-12">
        <!-- ============================================================== -->
        <!-- Different data widgets -->
        <!-- ============================================================== -->
        <div class="main-content">
            <form id="insertAdmin" method="post">
                <div class="main-text-manage col-auto mb-4">관리자 정보 페이지</div>
                <div class="fmain-row mb-3" style="justify-content: center;">
                    <div class="mt-3" style="margin-right:21px;">담당자 이름</div>
                    <div><input type="text" id="name" name="name" class="form-control" /></div>
                </div>
                <div class="fmain-row mb-3" style="justify-content: center;">
                    <div class="mt-3 mr-3">담당자 이메일</div>
                    <div><input type="text" id="emailId" name="emailId" class="form-control" /></div>
                </div>
                <div class="fmain-row mb-3" style="justify-content: center;">
                    <div class="mt-3 mr-3">현재 비밀번호</div>
                    <div><input type="password" id="nowPassword" name="nowPassword" class="form-control" /></div>
                </div>
                <div class="fmain-row mb-3" style="justify-content: center;">
                    <div class="mt-3 mr-3">비밀번호 변경</div>
                    <div><input type="password" id="updatePassword" name="updatePassword" class="form-control" /></div>
                </div>
                <div class="fmain-row mb-3" style="justify-content: center;">
                    <div class="mt-3 mr-3">비밀번호 확인</div>
                    <div><input type="password" id="confirmPassword" name="confirmPassword" class="form-control" /></div>
                </div>
            </form>

            <div class="fmain-row" style="justify-content: center;">
                <div class="col-auto mb-2">
                    <button type="button" class="btn-total-view" id="updateAdminInfo"><span>확인</span></button>
                    <button type="button" class="btn-total-view" onClick=goMain()><span>취소</span></button>
                    <#if 'ADMIN' = '${level}'>
                        <button type="button" class="btn-total-view" onClick=goAdminManage()><span>관리자 관리</span></button>
                    </#if>

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
