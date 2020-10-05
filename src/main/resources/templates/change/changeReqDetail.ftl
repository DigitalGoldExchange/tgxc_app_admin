<#include "/layout/sidebar.ftl">
<#include "/layout/base_script.ftl">
<script src="/assets/js/change/changeReqDetail.js"></script>
<!-- ============================================================== -->
<!-- Page Content -->
<!-- ============================================================== -->
<div id="page-wrapper">
    <input type="hidden" id="exchangeId" value="${exchangeId?string}">
    <div class="container-fluid col-md-9 col-lg-8 col-sm-12">
        <!-- ============================================================== -->
        <!-- Different data widgets -->
        <!-- ============================================================== -->
        <div class="main-content">
            <div class="fmain-paymentlist-row m-2 justify-content-between align-items-center">
                <div class="main-text col-auto ">신청 상세 정보</div>
                <div class="col-auto mb-2">
                    <button type="button" class="btn-total-view" onClick=toPaymentList()><span>돌아가기</span></button>
                    <button type="button" class="btn-total-view" onClick=toPaymentList()><span>상태변경</span></button>
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
                            <th style="text-align: center">신청TG량</th>
                            <th style="text-align: center">교환신청일</th>
                            <th style="text-align: center">교환종료일</th>
                            <th style="text-align: center">상태</th>
                        </tr>
                        </thead>
                        <tbody id="changeReqDetail">
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
                        <tbody id="changeReqList">
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
