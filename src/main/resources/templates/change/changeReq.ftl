<#include "/layout/sidebar.ftl">
<#include "/layout/base_script.ftl">
<script src="/assets/js/change/changeReq.js"></script>
<!-- ============================================================== -->
<!-- Page Content -->
<!-- ============================================================== -->

<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <b id="modal-top-title">반려</b>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <table class="table table-bordered">
                    <tbody>
                    <th>반려 사유를 입력해주세요.</th>
                    <tr>
                        <td><input type="text" class="form-control" name="note" id="note" maxlength="25"></td>
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
    <div class="container-fluid">
<#--        <div class="container-fluid col-md-9 col-lg-8 col-sm-12">-->
        <!-- ============================================================== -->
        <!-- Different data widgets -->
        <!-- ============================================================== -->
        <div class="main-content">
            <div class="fmain-paymentlist-row m-2 justify-content-between align-items-center">
                <div class="main-text col-auto ">교환 신청 관리</div>
                <div class="col-auto mb-2">
                    <form role="search" class="app-search" id="exchangeSearch">
                        <input type="hidden" id="page" name="page" value="1">
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
                            <th style="text-align: center">신청상품</th>
                            <th style="text-align: center">신청수량</th>
                            <th style="text-align: center">신청TG</th>
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
            <div class="d-flex justify-content-center">
                <div id="show-paginator" aria-label="Page navigation example"></div>
            </div>
        </div>
    </div>
</div>
<!-- ============================================================== -->
<!-- End Page Content -->
<!-- ============================================================== -->

<table id="exchangeListByExeclTable" style="display:none;">
    <thead>
    <tr>
        <th colspan="8" style="text-align: center">TGXC 금 교환 신청서</th>
    </tr>
    </thead>
    <tbody id="exchangeListByExeclBody"></tbody>
</table>

</div>
<!-- ============================================================== -->
<!-- End Wrapper -->
<!-- ============================================================== -->
<!-- ============================================================== -->

</body>

</html>
