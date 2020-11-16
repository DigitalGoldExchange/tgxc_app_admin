<#include "/layout/sidebar.ftl">
<#include "/layout/base_script.ftl">
<script src="/assets/js/admin/memberAdd.js"></script>
<!-- ============================================================== -->
<!-- Page Content -->
<!-- ============================================================== -->
<div id="page-wrapper">
    <div class="container-fluid col-md-9 col-lg-8 col-sm-12">
        <!-- ============================================================== -->
        <!-- Different data widgets -->
        <!-- ============================================================== -->
        <div class="main-content">
            <div class="main-text-manage col-auto mb-4">매장 관리자 추가</div>
            <div class="fmain-row" style="justify-content: center; margin-top: 50px;">
                <div class="col-auto mb-2">
                    <div class="mb-2">이름</div>
                    <input type="text" size="30" id="name" name="name" class="form-control" placeholder="이름을 입력해주세요."/>
                </div>
            </div>
            <div class="fmain-row mt-4" style="justify-content: center;">
                <div class="col-auto mb-2">
                    <div class="mb-2">이메일 주소</div>
                    <input type="text" size="30" id="emailId" name="emailId" class="form-control" placeholder="이메일 주소를 입력해주세요."/>
                </div>
            </div>
            <div class="fmain-row mt-4" style="justify-content: center;">
                <div class="col-auto mb-2">
                    <div class="mb-2">초기 비밀번호</div>
                    <input type="password" size="30" id="password" name="password" class="form-control" placeholder="비밀번호를 입력해주세요."/>
                </div>
            </div>

            <div class="fmain-row mt-4" style="justify-content: center;">
                <div class="col-auto mb-2">
                    <button type="button" class="btn-total-view" id="addMember"><span>추가</span></button>
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
