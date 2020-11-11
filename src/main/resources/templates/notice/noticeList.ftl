<#include "/layout/sidebar.ftl">
<#include "/layout/base_script.ftl">
<script src="/assets/js/notice/noticeList.js"></script>
<!-- ============================================================== -->
<!-- Page Content -->
<!-- ============================================================== -->
<div id="page-wrapper">
    <div class="container-fluid">
<#--        <div class="container-fluid col-md-9 col-lg-8 col-sm-12">-->
        <!-- ============================================================== -->
        <!-- Different data widgets -->
        <!-- ============================================================== -->
        <div class="main-content">
            <div class="fmain-paymentlist-row m-2 justify-content-between align-items-center">
                <div class="main-text col-auto ">공지관리</div>
                <div class="col-auto mb-2">
                    <form role="search" class="app-search" id="noticeSearch">
                        <div class="row d-flex justify-content-end">
                            <button type="button" class="btn-total-view4" onClick=goNoticeAdd()><span>공지작성</span></button>
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
                            <th style="text-align: center">공지번호</th>
                            <th style="text-align: center">제목</th>
                            <th style="text-align: center">업로드일</th>
                            <th style="text-align: center">상태</th>
                            <th style="text-align: center">작업</th>
                        </tr>
                        </thead>
                        <tbody id="noticeList">
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
