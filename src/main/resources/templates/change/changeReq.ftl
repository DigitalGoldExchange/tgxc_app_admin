<#include "/layout/sidebar.ftl">
<#include "/layout/base_script.ftl">
<script src="/assets/js/change/changeReq.js"></script>
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
                <div class="main-text col-auto ">교환 신청 관리</div>
                <div class="col-auto mb-2">
                    <form role="search" class="app-search" id="exchangeSearch">
                        <div class="row d-flex justify-content-end">
                            <select class="form-searchType" id="searchKey" name="searchKey">
                                <option value="0">전체</option>
                                <option value="1">신청번호</option>
                                <option value="2">이메일</option>
                                <option value="3">이름</option>
                                <option value="4">진행상황</option>
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
                            <th style="text-align: center">신청번호</th>
                            <th style="text-align: center">이메일</th>
                            <th style="text-align: center">이름</th>
                            <th style="text-align: center">연락처</th>
                            <th style="text-align: center">신청수량</th>
                            <th style="text-align: center">신청일</th>
                            <th style="text-align: center">종료일</th>
                            <th style="text-align: center">진행상황</th>
                            <th style="text-align: center">작업</th>
                        </tr>
                        </thead>
                        <tbody id="changeReqList">

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
