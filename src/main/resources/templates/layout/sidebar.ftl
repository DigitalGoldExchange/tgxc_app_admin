<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/plugins/images/264.png">
    <title>DGEX</title>
    <!-- Bootstrap Core CSS -->
    <link href="/assets/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Menu CSS -->
    <link href="/assets/plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="/assets/less/icons/font-awesome/css/font-awesome.min.css">
<#--    <!-- toast CSS &ndash;&gt;-->
<#--    <link href="/assets/plugins/bower_components/toast-master/css/jquery.toast.css" rel="stylesheet">-->
    <!-- morris CSS -->
<#--    <link href="/assets/plugins/bower_components/morrisjs/morris.css" rel="stylesheet">-->
    <!-- chartist CSS -->
<#--    <link href="/assets/plugins/bower_components/chartist-js/dist/chartist.min.css" rel="stylesheet">-->
<#--    <link href="/assets/plugins/bower_components/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.css" rel="stylesheet">-->
    <!-- animation CSS -->
    <link href="/assets/css/animate.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="/assets/css/style.css" rel="stylesheet">
    <!-- color CSS -->
    <link href="/assets/css/colors/default.css" id="theme" rel="stylesheet">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>-->


    <link href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" rel="stylesheet" type="text/css"  />

    <#--    <link rel="stylesheet" href="/assets/css/bootstrap.min.css">-->

    <!--[endif]-->
</head>

<body class="fix-header">
<!-- ============================================================== -->
<!-- Preloader -->
<!-- ============================================================== -->
<#--<div class="preloader">-->
<#--    <svg class="circular" viewBox="25 25 50 50">-->
<#--        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />-->
<#--    </svg>-->
<#--</div>-->
<!-- ============================================================== -->
<!-- Wrapper -->
<!-- ============================================================== -->
<div id="wrapper">
    <!-- ============================================================== -->
    <!-- Topbar header - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <input type="hidden" id="apiAddress" value="${apiAddress?string}">
    <nav class="navbar navbar-default navbar-static-top m-b-0">
        <div class="navbar-header">
            <div class="top-left-part2">
                <ul class="nav navbar-top-links navbar-right pull-right">
                    <li>
                        <a class="nav-toggler open-close waves-effect waves-light hidden-md hidden-lg" href="javascript:void(0)"><i class="fa fa-bars"></i></a>
                    </li>
                </ul>
            </div>
            <div class="top-left-part">

                <!-- Logo -->
                <a class="logo" href="javascript:void(0);" onclick=goMain()>
                        <span style="color:white">
                            TG APP 관리자 페이지
<#--                            <img src="/assets/images/42.png" alt="home" class="light-logo" />-->
                        </span>
                </a>
            </div>

        </div>
    </nav>
    <!-- End Top Navigation -->
    <!-- ============================================================== -->
    <!-- Left Sidebar - style you can find in sidebar.scss  -->
    <!-- ============================================================== -->
<#--    <div id="sideBar">-->
    <div class="navbar-default sidebar" role="navigation" id="sideBar">
            <ul class="nav" id="side-menu">
            </ul>

    </div>
<#--    </div>-->
    <!-- ============================================================== -->
    <!-- End Left Sidebar -->
    <!-- ============================================================== -->