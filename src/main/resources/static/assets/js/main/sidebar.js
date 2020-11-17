$(function () {
    $("#logout").click(function () {
        setCookie('emailId', "", -1);
        setCookie('name', "", -1);
        setCookie('userId', "", -1);
        setCookie('level', "", -1);
        location.href='/';
    });

     var menuLevel = getCookie('menuLevel');
     var level = getCookie('level');
     console.log(level);
     if(level == 'ADMIN'){
         var html =
             '<li style="padding: 70px 0 0;">\
                 </li>\
                 <li><a href="/admin/home" class="waves-effect">홈</a></li>\
                 <li><a href="/change/changeReq" class="waves-effect">교환 신청 관리</a></li>\
                 <li><a href="/deposit/depositList" class="waves-effect">출금 신청 관리</a></li>\
                 <li><a href="/user/userList" class="waves-effect">회원정보관리</a></li>\
                 <li><a href="/notice/noticeList" class="waves-effect">공지관리</a></li>\
                 <li><a href="/exchange/exchangeList" class="waves-effect">교환 관리</a></li>\
                 <li><a href="/admin/adminInfo" class="waves-effect">관리자정보</a></li>\
                 <li style="padding: 20px 0 0;"><a class="waves-effect logout-font" id="logout">로그아웃</a></li>';
         $("#side-menu").empty();
         $("#side-menu").append(html);
     }else if(level == 'MEMBER'){
         var html =
             '<li style="padding: 70px 0 0;">\
                 </li>\
                 <li><a href="/admin/home" class="waves-effect">홈</a></li>\
                 <li><a href="/admin/memberExchange" class="waves-effect">교환 신청 확인</a></li>\
                 <li style="padding: 20px 0 0;"><a class="waves-effect logout-font" id="logout">로그아웃</a></li>';
         $("#side-menu").empty();
         $("#side-menu").append(html);
     }else{
         var html =
             '<li style="padding: 70px 0 0;">\
                 </li>\
                 <li><a href="/admin/home" class="waves-effect">홈</a></li>';
                 if(menuLevel.includes('change')){
                    html += '<li><a href="/change/changeReq" class="waves-effect">교환 신청 관리</a></li>';
                 }
                 if(menuLevel.includes('deposit')){
                     html += '<li><a href="/deposit/depositList" class="waves-effect">출금 신청 관리</a></li>';
                 }
                 if(menuLevel.includes('user')){
                     html += '<li><a href="/user/userList" class="waves-effect">회원정보관리</a></li>';
                 }
                 if(menuLevel.includes('notice')){
                     html += '<li><a href="/notice/noticeList" class="waves-effect">공지관리</a></li>';
                 }
                 if(menuLevel.includes('exchange')) {
                     html += '<li><a href="/exchange/exchangeList" class="waves-effect">교환 관리</a></li>';
                 }
                     html += '<li><a href="/admin/adminInfo" class="waves-effect">관리자정보</a></li>\
                     <li style="padding: 20px 0 0;"><a class="waves-effect logout-font" id="logout">로그아웃</a></li>';

         $("#side-menu").empty();
         $("#side-menu").append(html);
     }



});
//
// function goMain() {
//     if(getCookie('level')==10){
//         location.href='/change/changeReq';
//     }else{
//         location.href='/change/changeReq';
//     }
// }


