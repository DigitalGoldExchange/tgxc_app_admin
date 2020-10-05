<#include "/layout/sidebar.ftl">
<#include "/layout/base_script.ftl">
<script src="/assets/js/admin/adminUpdate.js"></script>
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
                            <th style="text-align: center">교환매장관리</th>
                        </tr>
                        </thead>
                        <tbody id="recentPaymentList">
                        <#--                                <tr>-->
                        <#--                                    <td>2020/07/01 18:33</td>-->
                        <#--                                    <td>MAC주소</td>-->
                        <#--                                    <td>서울특별시 용산구 이태원 333-45번길</td>-->
                        <#--                                    <td>현금</td>-->
                        <#--                                    <td><span>15,000원</span></td>-->
                        <#--                                </tr>-->
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="fmain-paymentlist-row m-2 justify-content-between align-items-center">
                <div class="main-text col-auto "></div>
                <div class="col-auto mb-2">
                    <button type="button" class="btn-total-view" onClick=toPaymentList()><span>저장</span></button>
                    <button type="button" class="btn-total-view" onClick=toPaymentList()><span>취소</span></button>
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
