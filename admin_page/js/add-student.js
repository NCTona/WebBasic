var add_student = document.querySelector('#btn-add-student')
var add_student_alert = document.querySelector('#addStudentModal')
var add_student_modal = document.querySelectorAll('.modal-dialog')
var button_cancel = document.querySelectorAll('.btn-secondary')

add_student.onclick = function () {
    add_student_alert.setAttribute("style", "display: block")
    setTimeout(function () {
        add_student_alert.setAttribute("style", "display: block; opacity: 1; background-image: linear-gradient(rgba(50, 50, 50, 0.5), rgba(50, 50, 50, 0.5));")
    })
    add_student_modal[2].setAttribute("style", "transform: translate(0, 0px);")

}


button_cancel[2].onclick = function () {
    add_student_alert.setAttribute("style", "display: block ;background-image: linear-gradient(rgba(50, 50, 50, 0), rgba(50, 50, 50, 0))")
    setTimeout(function () {
        add_student_alert.setAttribute("style", "display: none")
    }, 150)
}
