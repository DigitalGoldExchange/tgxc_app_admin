<#include "/layout/sidebar.ftl">
<#include "/layout/base_script.ftl">
<script src="/assets/js/deposit/depositDetail.js"></script>
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

<div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <b id="modal-top-title">TXID</b>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <table class="table table-bordered">
                    <tbody>
                    <th>TXID를 입력해주세요.</th>
                    <tr>
                        <td><input type="text" class="form-control" name="txid" id="txid" maxlength="25"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
                <button type="button" class="btn btn-primary" id="submit_btn1">등록</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <b id="modal-top-title">알림 등록</b>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <table class="table table-bordered">
                    <tbody>
                    <th>보내실 알림을 입력해주세요.</th>
                    <tr>
                        <th>제목</th>
                    </tr>
                    <tr>
                        <td><input type="text" class="form-control" name="title" id="title" maxlength="25"></td>
                    </tr>
                    <tr>
                        <th>내용</th>
                    </tr>
                    <tr>
                        <td><input type="text" class="form-control" name="content" id="content" maxlength="25"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
                <button type="button" class="btn btn-primary" id="submit_btn2">등록</button>
            </div>
        </div>
    </div>
</div>


<div id="page-wrapper">
    <input type="hidden" id="exchangeId" value="${exchangeId?string}">
    <input type="hidden" id="userId" value="${userId?string}">
    <div class="container-fluid">
<#--        <div class="container-fluid col-md-9 col-lg-8 col-sm-12">    -->
        <!-- ============================================================== -->
        <!-- Different data widgets -->
        <!-- ============================================================== -->
        <div class="main-content">
            <div class="fmain-paymentlist-row m-2 justify-content-between align-items-center">
                <div class="main-text col-auto ">출금 신청 상세 정보</div>
                <div class="col-auto mb-2">
                    <button type="button" class="btn-total-view" onClick=goMain()><span>돌아가기</span></button>
                    <button type="button" class="btn-total-view" data-toggle="modal" data-target="#myModal3"><span>알림보내기</span></button>
                    <#--                    <button type="button" class="btn-total-view" onClick=toPaymentList()><span>상태변경</span></button>-->
                </div>
            </div>
            <div class="fmain-col-grid">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th style="text-align: center">신청번호</th>
                            <th style="text-align: center">TXID</th>
                            <th style="text-align: center">이메일</th>
                            <th style="text-align: center">출금주소</th>
                            <th style="text-align: center">이름</th>
                            <th style="text-align: center">연락처</th>
                            <th style="text-align: center">신청TG량</th>
                            <th style="text-align: center">상태</th>
                            <th style="text-align: center">상태변경</th>
                        </tr>
                        </thead>
                        <tbody id="depositDetail">

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
                        <tbody id="depositList">
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
