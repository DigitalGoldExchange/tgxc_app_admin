<#include "/layout/sidebar.ftl">
<#include "/layout/base_script.ftl">
<script src="/assets/js/user/userList.js"></script>
<!-- ============================================================== -->
<!-- Page Content -->
<!-- ============================================================== -->
<div id="page-wrapper">
    <div class="container-fluid col-md-9 col-lg-8 col-sm-12">
        <!-- ============================================================== -->
        <!-- Different data widgets -->
        <!-- ============================================================== -->
        <div class="main-content">
            <div class="fmain-paymentlist-row m-2 justify-content-between align-items-center">
                <div class="main-text col-auto ">회원 정보 관리</div>
                <div class="col-auto mb-2">
                    <form role="search" class="app-search" id="userSearch">
                        <input type="hidden" id="page" name="page" value="1">
                        <div class="row d-flex justify-content-end">
                            <select class="form-searchType" id="searchKey" name="searchKey">
                                <option value="0">전체</option>
                                <option value="1">이메일</option>
                                <option value="2">이름</option>
                                <option value="3">연락처</option>
                            </select>
                            <input type="text" placeholder="Search..." class="form-control text-center" id="searchWord" name="searchWord" value="">
                        </div>
                    </form>
                </div>
            </div>
            <div class="fmain-col-grid">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th style="text-align: center">아이디</th>
                            <th style="text-align: center">이름</th>
                            <th style="text-align: center">연락처</th>
                            <th style="text-align: center">보유TG</th>
                            <th style="text-align: center">가입일</th>
                            <th style="text-align: center">상태</th>
                            <th style="text-align: center">작업</th>
                        </tr>
                        </thead>
                        <tbody id="userList">

                        </tbody>
                    </table>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div id="show-paginator" aria-label="Page navigation example"></div>
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
