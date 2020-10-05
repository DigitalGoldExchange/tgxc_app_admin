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
            <div class="main-text-manage col-auto mb-4">관리자 추가</div>
            <div class="fmain-row" style="justify-content: center; margin-top: 50px;">
                <div class="col-auto mb-2">
                    <div class="mb-2">이름</div>
                    <input type="password" size="30" id="password" name="password" class="form-control" placeholder="이름을 입력해주세요."/>
                </div>
            </div>
            <div class="fmain-row mt-4" style="justify-content: center;">
                <div class="col-auto mb-2">
                    <div class="mb-2">이메일 주소</div>
                    <input type="password" size="30" id="password" name="password" class="form-control" placeholder="이메일 주소를 입력해주세요."/>
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
                    <div class="mb-2">권한설정</div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="itemDiv1" name="itemDivArray" value="1">
                        <label class="form-check-label" for="itemDiv1">TG 교환 관리</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="itemDiv1" name="itemDivArray" value="1">
                        <label class="form-check-label" for="itemDiv1">회원정보관리</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="itemDiv1" name="itemDivArray" value="1">
                        <label class="form-check-label" for="itemDiv1">공지관리</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="itemDiv1" name="itemDivArray" value="1">
                        <label class="form-check-label" for="itemDiv1">교환매장관리</label>
                    </div>
                </div>
            </div>
            <div class="fmain-row mt-4" style="justify-content: center;">
                <div class="col-auto mb-2">
                    <button type="button" class="btn-total-view" ><span>추가</span></button>
                    <button type="button" class="btn-total-view" ><span>취소</span></button>
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
