$(function () {
    // countryList();
    var email = getParameter('email');
    $("#loginId").val(email);

    // // 닉네임 정규표현 체크
    // $("#userName").on('change', function () {
    //     var nickExp = /^[A-za-z0-9]{3,12}$/g;
    //     var apiAddress = $("#apiAddress").val();
    //     var nickVal = $(this).val();
    //     if(nickVal == "") {
    //         $("#nicCheck").removeClass('icon-checked2');
    //         $("#nicCheck").removeClass('icon-checked3');
    //         $("#nicCheck").addClass('icon-checked');
    //     }else {
    //         $.ajax({
    //             url: apiAddress + "/api/nameCheck?name="+nickVal,
    //             type: 'GET',
    //             dataType: 'JSON',
    //             success: function (response) {
    //                 // console.log(response);
    //                 if(response.result == true) {
    //                     if(nickVal.match(nickExp) != null) {
    //                         $("#nicCheck").removeClass('icon-checked');
    //                         $("#nicCheck").removeClass('icon-checked2');
    //                         $("#nicCheck").addClass('icon-checked3');
    //                     }else {
    //                         $("#nicCheck").removeClass('icon-checked');
    //                         $("#nicCheck").removeClass('icon-checked3');
    //                         $("#nicCheck").addClass('icon-checked2');
    //                     }
    //                 }else {
    //                     swal({
    //                         button: "확인",
    //                         closeOnClickOutside: false,
    //                         text: response.msg,
    //                     }).then(function() {
    //                         $("#nicCheck").removeClass('icon-checked2');
    //                         $("#nicCheck").removeClass('icon-checked3');
    //                         $("#nicCheck").addClass('icon-checked');
    //                         $("#userName").val("");
    //                     });
    //                 }
    //             }
    //         });
    //     }
    // });


    // 패스워드 정규표현 체크
    var pwExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/i;
    // var pwExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/i;
    $("#password").on('keyup', function () {
       var pwVal = $(this).val();
       if(pwVal == "") {
           $("#pwCheck").removeClass('icon-checked2');
           $("#pwCheck").removeClass('icon-checked3');
           $("#pwCheck").addClass('icon-checked');
       }else {
           if(pwVal.match(pwExp) != null) {
               $("#pwCheck").removeClass('icon-checked');
               $("#pwCheck").removeClass('icon-checked2');
               $("#pwCheck").addClass('icon-checked3');
           }else {
               $("#pwCheck").removeClass('icon-checked');
               $("#pwCheck").removeClass('icon-checked3');
               $("#pwCheck").addClass('icon-checked2');
           }
       }
    });
    $("#pwd2").on('keyup', function () {
        var pw2Val = $(this).val();
        if(pw2Val == "") {
            $("#pw2Check").removeClass('icon-checked2');
            $("#pw2Check").removeClass('icon-checked3');
            $("#pw2Check").addClass('icon-checked');
        }else {
            if(pw2Val.match(pwExp) != null) {
                $("#pw2Check").removeClass('icon-checked');
                $("#pw2Check").removeClass('icon-checked2');
                $("#pw2Check").addClass('icon-checked3');
            }else {
                $("#pw2Check").removeClass('icon-checked');
                $("#pw2Check").removeClass('icon-checked3');
                $("#pw2Check").addClass('icon-checked2');
            }
        }
    });

    // 생년월일 변경
    $(".form-date").change(function () {
        var year = $("#year").val();
        var month = $("#month").val();
        var day = $("#day").val();
        if(month < 10) {
           month = "0" + month;
        }
        if(day < 10) {
           day = "0" + day;
        }
        var ymd = year + month + day;
        if(ymd > 19000101) {
            $("#birthdate").val(ymd);
        }

    });

    $(".modal-btn").click(function () {
        var title = $(this).parent().prev().attr('title');
        var type = $(this).parent().prev().attr('type');
        var apiAddress = $("#apiAddress").val();
        $.ajax({
            url: apiAddress+"/adminapi/terms",
            type: 'GET',
            dataType: 'JSON',
            success: function (response) {
                if(response.result) {
                    for (var i = 0; i < response.terms.length; i++) {
                        if (response.terms[i].type == type) {
                            $("#modal-title").text(title);
                            $("#modal-content").html(response.terms[i].content);
                        }
                    }
                }else{
                    Swal.fire({
                        text: response.msg,
                        confirmButtonText: '확인',
                        allowOutsideClick: false
                    });
                    return false;
                }
            }
        });
    });
});
function join() {
    var emailId = $("#emailId").val();
    var name = $("#name").val();
    var password = $("#password").val();
    var pw2 = $("#pwd2").val();
    var phoneNumber = $("#phoneNumber").val();

    if(emailId == "" || emailId == null || emailId == undefined) {
        // Swal.fire({
        //     text: '이메일 아이디를 입력해주세요',
        //     confirmButtonText: '확인',
        //     allowOutsideClick: false
        // });
        alert('이메일 아이디를 입력해주세요');
        return false;
    }else if(name == "" || name == null || name == undefined) {
        // Swal.fire({
        //     text: '사용자명을 입력해주세요',
        //     confirmButtonText: '확인',
        //     allowOutsideClick: false
        // });
        alert('사용자명을 입력해주세요');
        return false;
    }else if(phoneNumber == "" || phoneNumber == null || phoneNumber == undefined) {
        // Swal.fire({
        //     text: '연락처를 입력해주세요',
        //     confirmButtonText: '확인',
        //     allowOutsideClick: false
        // });
        alert('연락처를 입력해주세요');
        return false;
    }else if(password == "" || password == null || password == undefined) {
        // Swal.fire({
        //     text: '비밀번호를 입력해주세요',
        //     confirmButtonText: '확인',
        //     allowOutsideClick: false
        // });
        alert('비밀번호를 입력해주세요');
        return false;
    }else if(!$("#pwCheck").hasClass('icon-checked3')) {
        // Swal.fire({
        //     text: '비밀번호 형식을 확인해주세요',
        //     confirmButtonText: '확인',
        //     allowOutsideClick: false
        // });
        alert('비밀번호 형식을 입력해주세요');
        return false;
    }else if(pw2 == "" || pw2 == null || pw2 == undefined) {
        // Swal.fire({
        //     text: '비밀번호 확인을 입력해주세요',
        //     confirmButtonText: '확인',
        //     allowOutsideClick: false
        // });
        alert('비밀번호 확인을 입력해주세요');
        return false;
    }else if(password != pw2) {
        // Swal.fire({
        //     text: '비밀번호가 일치하지 않습니다',
        //     confirmButtonText: '확인',
        //     allowOutsideClick: false
        // });
        alert('비밀번호가 일치하지 않습니다');
        return false;
    }
    // }else if(nation == "" || nation == null || nation == undefined) {
    //     Swal.fire({
    //         text: '국적을 선택해주세요',
    //         confirmButtonText: '확인',
    //         allowOutsideClick: false
    //     });
    //     return false;
    // }
    // else if(date == "" || date == null || date == undefined) {
    //     Swal.fire({
    //         text: '생년월일을 선택해주세요',
    //         confirmButtonText: '확인',
    //         allowOutsideClick: false
    //     });
    //     return false;
    // }else if(parseInt(date) > parseInt(now)) {
    //     Swal.fire({
    //         text: '생년월일은 오늘날짜 이전으로 선택해주세요',
    //         confirmButtonText: '확인',
    //         allowOutsideClick: false
    //     });
    //     return false;
    // }else if(gender == "" || gender == null || gender == undefined) {
    //     Swal.fire({
    //         text: '성별을 선택해주세요',
    //         confirmButtonText: '확인',
    //         allowOutsideClick: false
    //     });
    //     return false;
    // }
    var apiAddress = $("#apiAddress").val();
    var datas = $("#joinDetailForm").serialize();
    $.ajax({
        url: apiAddress+"/user/insert",
        type: 'POST',
        data: datas,
        dataType: 'JSON',
        success: function (response) {
            // console.log(response);
            if(response.success) {
                alert('회원가입이 완료되었습니다');
                location.href='/';
                // Swal.fire({
                //     text: '회원가입이 완료되었습니다',
                //     confirmButtonText: '확인',
                //     allowOutsideClick: false
                // }).then(function() {
                //
                // });
            }else {
                // Swal.fire({
                //     text: response.msg,
                //     confirmButtonText: '확인',
                //     allowOutsideClick: false
                // });
                alert(response.msg);
                return false;
            }
        },error: function (jqXHR) {
            console.log(jqXHR.responseText);
        }
    });
}
//
// function countryList(){
//     var apiAddress = $("#apiAddress").val();
//     var html="";
//     $.ajax({
//         url: apiAddress+"/api/countryList",
//         type: 'GET',
//         dataType: 'JSON',
//         success: function (response) {
//             // console.log(response);
//             if(response.countryList.length > 0) {
//                 for (var i = 0; i < response.countryList.length; i++) {
//                     if(response.countryList[i].code == "KR") {
//                         html+= '<option value="'+response.countryList[i].countryKr+'" selected>'+response.countryList[i].countryEn+'</option>';
//                     }else {
//                         html+= '<option value="'+response.countryList[i].countryKr+'">'+response.countryList[i].countryEn+'</option>';
//                     }
//                 }
//                 $("#nation").empty();
//                 $("#nation").append(html);
//
//             }
//         }
//     });
// }