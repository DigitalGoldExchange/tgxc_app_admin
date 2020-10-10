<#import "/spring.ftl" as spring />
<!DOCTYPE html>
<html>
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <meta http-equiv="ScreenOrientation" content="autoRotate:disabled">

    <meta property="og:image" content="/assets/images/tgxc-logo-b@2x.png"/>
<#--    <meta property="og:url" content="http://117.52.98.55:8080"/>-->
<#--    	<meta property="og:url" content="http://117.52.98.39:8085"/>-->
    <meta property="og:description" content="TGXC"/>
    <meta property="og:title" content="TGXC"/>

    <link rel="stylesheet" href="assets/css/login_bootstrap.css">
    <link rel="stylesheet" href="assets/css/login_style.css">

    <title>DGEX</title>

</head>
<body>
<input type="hidden" id="apiAddress" value="${apiAddress?string}">
<button type="button" class="btn-total-view4" onClick=changeLanguage()><span>ENG</span></button>
<div class="login-wrap flex-column d-flex justify-content-center align-items-center">
    <div class="login-body">
        <div class="login-wrap-logo d-flex flex-column justify-content-center align-items-center">
            <div class="fbox1">
                <span>
                    <#--퍼니박스 로고-->
                    <img src="/assets/images/tgxc-logo-b@2x.png" class="login-logo" />
                </span>
            </div>
<#--            <div class="funnybox-subtitle-form">-->
<#--                <div class="funnybox-subtitle">관리시스템</div>-->
<#--            </div>-->
        </div>
        <div class="login-wrap-logo d-flex flex-column justify-content-center align-items-center">
            <form id="loginForm">
                <div class="form-group2 align-items-center">
                    <div class="mb-2">아이디</div>
                    <input type="text" id="emailId" name="emailId" class="form-control" placeholder="아이디를 입력해주세요."/>
                </div>
                <br>
                <div class="form-group2 align-items-center">
                    <div class="mb-2">비밀번호</div>
                    <input type="password" id="password" name="password" class="form-control" placeholder="비밀번호를 입력해주세요."/>
                </div>
                <#--						<div class="row form-group text-right mb-5">-->
                <#--							<div class="col-12 text-grey"><a href="/find_id" class="text-grey text-decoration-none">FIND ID</a> / <a href="/find_pw" class="text-grey text-decoration-none">PW</a></div>-->
                <#--						</div>-->
                <button type="button" class="btn btn-primary login-text btn-block mt-5" onclick="login();">${loginText}</button>
                <a href="/find" class="btn btn-signUp signUp-text btn-block btn-h4" ><@spring.message "findPassword"/></a>
            </form>
        </div>
    </div>
</div>

<script src="/assets/js/jquery-3.4.1.min.js"></script>
<script src="/assets/js/script.js"></script>
<script src="/assets/js/main/login.js"></script>
</body>
</html>
