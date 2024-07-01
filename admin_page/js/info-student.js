// // var apiStudent = 'https://localhost:7256/api/UserClass/class/' + grade_view
// var apiStudent = 'http://localhost:3000/student'

// fetch(apiStudent)

//     .then(function (reponse) {
//         return reponse.json();
//     })

//     .then(function (student) {
//         for (var i = 1; i <= student.length; i++) {
//             console.log(i)
//             var btnStudentId = '#btn-info-' + i
//             var btn_info_student = document.querySelector(btnStudentId)
//             console.log(btn_info_student)
//             var info_student_alert = document.querySelector('#infoStudentModal')
//             var info_student_modal = document.querySelectorAll('.modal-dialog')
//             var info_student_content = document.querySelectorAll('.modal-content')
//             var button_cancel = document.querySelectorAll('.btn-secondary')
//             console.log(button_cancel)

//             btn_info_student.onclick = function () {
//                 info_student_alert.setAttribute("style", "display: block")
//                 setTimeout(function () {
//                     info_student_alert.setAttribute("style", "display: block; opacity: 1; background-image: linear-gradient(rgba(50, 50, 50, 0.5), rgba(50, 50, 50, 0.5));")
//                 })
//                 info_student_modal[4].setAttribute("style", "transform: translate(0, 0px);")
//             }

//             button_cancel[4].onclick = function () {
//                 info_student_alert.setAttribute("style", "display: block ;background-image: linear-gradient(rgba(50, 50, 50, 0), rgba(50, 50, 50, 0))")
//                 setTimeout(function () {
//                     info_student_alert.setAttribute("style", "display: none")
//                 }, 150)
//             }
//         }

//     })



