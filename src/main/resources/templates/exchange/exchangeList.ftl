<#include "/layout/sidebar.ftl">
<#include "/layout/base_script.ftl">
<script src="/assets/js/exchange/exchangeList.js"></script>
<!-- ============================================================== -->
<!-- Page Content -->
<!-- ============================================================== -->

<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <b id="modal-top-title">매장 등록</b>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <table class="table table-bordered">
                    <tbody>
                    <th>추가하실 매장명을 입력해주세요.</th>
                    <tr>
                        <td><input type="text" class="form-control" name="name" id="name" maxlength="25"></td>
                    </tr>
                    <th>추가하실 매장 주소를 입력해주세요.</th>
                    <tr>
                        <td><input type="text" class="form-control" name="address" id="address" maxlength="25"></td>
                    </tr>
                    <th>추가하실 매장 대표번호를 입력해주세요.</th>
                    <tr>
                        <td><input type="text" class="form-control" name="phoneNumber" id="phoneNumber" maxlength="25"></td>
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
                <b id="modal-top-title">매장 등록</b>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <input type="hidden" name="storeId" id="storeId" value="">
                <table class="table table-bordered">
                    <tbody>
                    <th>추가하실 매장명을 입력해주세요.</th>
                    <tr>
                        <td><input type="text" class="form-control" name="name1" id="name1" maxlength="25"></td>
                    </tr>
                    <th>추가하실 매장 주소를 입력해주세요.</th>
                    <tr>
                        <td><input type="text" class="form-control" name="address1" id="address1" maxlength="25"></td>
                    </tr>
                    <th>추가하실 매장 대표번호를 입력해주세요.</th>
                    <tr>
                        <td><input type="text" class="form-control" name="phoneNumber1" id="phoneNumber1" maxlength="25"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
                <button type="button" class="btn btn-primary" id="update_btn">수정</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <b id="modal-top-title">교환 비율 등록</b>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <table class="table table-bordered">
                    <tbody>
                    <th>추가하실 종류를 입력해주세요.</th>
                    <tr>
                        <td><input type="text" class="form-control" name="gram" id="gram" maxlength="25"></td>
                    </tr>
                    <th>금액(TG)을 입력해주세요.</th>
                    <tr>
                        <td><input type="text" class="form-control" name="tg" id="tg" maxlength="25"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
                <button type="button" class="btn btn-primary" id="insertRate">등록</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <b id="modal-top-title">교환 비율 등록</b>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <input type="hidden" name="exchangeRateId" id="exchangeRateId" value="">
                <table class="table table-bordered">
                    <tbody>
                    <th>추가하실 종류를 입력해주세요.</th>
                    <tr>
                        <td><input type="text" class="form-control" name="gram1" id="gram1" maxlength="25"></td>
                    </tr>
                    <th>금액(TG)을 입력해주세요.</th>
                    <tr>
                        <td><input type="text" class="form-control" name="tg1" id="tg1" maxlength="25"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
                <button type="button" class="btn btn-primary" id="updateRate">수정</button>
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

            <div class="fmain-paymentlist-row m-2">
                <div class="main-text col-auto ">교환 비율</div>
            </div>
<#--            <div class="fmain-col-grid2">-->
<#--                <input type="text" size="10" style="text-align: center;background-color: #adadad" maxlength="20" id="gram" name="gram" value="1g" readonly>-->
<#--                =-->
<#--                <input type="text" size="20" style="text-align: center;" maxlength="20" id="tg" name="tg" value="">-->
<#--                <button type="button" class="btn-total-view" id="insertRate"><span>저장</span></button>-->
<#--            </div>-->

            <div class="fmain-col-grid2">
                <div class="fmain-row m-2">
                    <div class="fmain-col">
                        <div class="fmain-paymentlist-row m-2 justify-content-between align-items-center">
                            <div class="main-text col-auto "></div>
                            <div class="col-auto mb-2">
                                <button type="button" class="btn-total-view" data-toggle="modal" data-target="#myModal2"><span>추가</span></button>
                                <button type="button" class="btn-total-view" id="updateExchangeRate"><span>수정</span></button>
                                <button type="button" class="btn-total-view" id="deleteExchangeRate"><span>삭제</span></button>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th style="text-align: center;"><input type="checkbox" id="exchangeRateAllCheck" value="" aria-label="..."></th>
                                    <th style="text-align: center;">무게(g)</th>
                                    <th style="text-align: center;">TG</th>
                                </tr>
                                </thead>
                                <tbody id="exchageRateList">

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="fmain-col">

                    </div>
                </div>

            </div>


            <div class="update-info-text-underline"></div>

            <div class="fmain-paymentlist-row m-2">
                <div class="main-text col-auto ">지갑 주소</div>
            </div>
            <div class="fmain-col-grid2">
                <input type="text" size="100" style="text-align: left;" maxlength="100" id="walletAddress" name="walletAddress" value="">
                <button type="button" class="btn-total-view" id="insertAddress"><span>저장</span></button>
            </div>
            <div class="update-info-text-underline"></div>

<#--            <div class="fmain-paymentlist-row m-2">-->
<#--                <div class="main-text col-auto ">교환 관리</div>-->
<#--            </div>-->
<#--            <div class="fmain-col-grid2">-->
<#--                <div class="form-check form-check-inline mr-3" style="margin-right: 100px">-->
<#--                    <input class="form-check-input receiveType" type="checkbox" name="receiveType" id="receiveType_visit" value="visit">-->
<#--                    <label class="form-check-label" for="receiveType_0">방문수령</label>-->
<#--                </div>-->
<#--                <div class="form-check form-check-inline mr-3" style="margin-right: 18px">-->
<#--                    <input class="form-check-input receiveType" type="checkbox" name="receiveType" id="receiveType_mail" value="mail">-->
<#--                    <label class="form-check-label" for="receiveType_1">우편수령</label>-->
<#--                </div>-->
<#--                <button type="button" class="btn-total-view" id="saveReceiveType"><span>저장</span></button>-->

<#--            </div>-->
<#--            <div class="update-info-text-underline"></div>-->

            <div class="fmain-paymentlist-row m-2">
                <div class="main-text col-auto ">교환 매장 관리</div>
            </div>
            <div class="fmain-col-grid2">
                <div class="fmain-row m-2">
                    <div class="fmain-col">
                        <div class="form-check-label">비활성 매장</div>
                        <div class="fmain-paymentlist-row m-2 justify-content-between align-items-center">
                            <div class="main-text col-auto "></div>
                            <div class="col-auto mb-2">
                                <button type="button" class="btn-total-view" id="updateActive"><span>활성화</span></button>
                                <button type="button" class="btn-total-view" data-toggle="modal" data-target="#myModal"><span>추가</span></button>
                                <button type="button" class="btn-total-view" id="updateStore"><span>수정</span></button>
                                <button type="button" class="btn-total-view" id="deleteStore"><span>삭제</span></button>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th style="text-align: center;width: 20px;"><input class="ml-3" type="checkbox" id="inactiveAllCheck" value="" aria-label="..."></th>
                                    <th style="text-align: center">매장명</th>
                                </tr>
                                </thead>
                                <tbody id="inactiveStoreList">

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="fmain-col">
                        <div class="form-check-label">활성 매장</div>
                        <div class="fmain-paymentlist-row m-2 justify-content-between align-items-center">
                            <div class="main-text col-auto "></div>
                            <div class="col-auto mb-2">
                                <button type="button" class="btn-total-view" id="updateInactive"><span>비활성화</span></button>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th style="text-align: center;width: 20px;"><input class="ml-3" type="checkbox" id="activeAllCheck" value="" aria-label="..."></th>
                                    <th style="text-align: center">매장명</th>
                                </tr>
                                </thead>
                                <tbody id="activeStoreList">

                                </tbody>
                            </table>
                        </div>
                    </div>
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
