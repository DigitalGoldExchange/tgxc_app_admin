<#include "/layout/sidebar.ftl">
<#include "/layout/base_script.ftl">
<script src="/assets/js/exchange/exchangeList.js"></script>
<!-- ============================================================== -->
<!-- Page Content -->
<!-- ============================================================== -->
<div id="page-wrapper">
    <div class="container-fluid col-md-9 col-lg-8 col-sm-12">
        <!-- ============================================================== -->
        <!-- Different data widgets -->
        <!-- ============================================================== -->
        <div class="main-content">

            <div class="fmain-paymentlist-row m-2">
                <div class="main-text col-auto ">교환 비율</div>
            </div>
            <div class="fmain-col-grid2">
                <input type="text" size="10" style="text-align: center;background-color: #adadad" maxlength="20" id="gram" name="gram" value="1g" readonly>
                =
                <input type="text" size="20" style="text-align: center;" maxlength="20" id="tg" name="tg" value="">
                <button type="button" class="btn-total-view" id="insertRate"><span>저장</span></button>
            </div>
            <div class="update-info-text-underline"></div>

            <div class="fmain-paymentlist-row m-2">
                <div class="main-text col-auto ">교환 관리</div>
            </div>
            <div class="fmain-col-grid2">
                <div class="form-check form-check-inline mr-3" style="margin-right: 100px">
                    <input class="form-check-input" type="checkbox" name="receiveType" id="receiveType_0" value="0" checked>
                    <label class="form-check-label" for="receiveType_0">방문수령</label>
                </div>
                <div class="form-check form-check-inline mr-3" style="margin-right: 18px">
                    <input class="form-check-input" type="checkbox" name="receiveType" id="receiveType_1" value="1">
                    <label class="form-check-label" for="receiveType_1">우편수령</label>
                </div>
                <button type="button" class="btn-total-view" onClick=toPaymentList()><span>저장</span></button>

            </div>
            <div class="update-info-text-underline"></div>

            <div class="fmain-paymentlist-row m-2">
                <div class="main-text col-auto ">교환 매장 관리</div>
            </div>
            <div class="fmain-col-grid2">

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
