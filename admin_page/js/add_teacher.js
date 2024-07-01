var add_teacher = document.querySelector('#btn-add-teacher')
var add_teacher_alert = document.querySelector('#addTeacherModal')
var add_teacher_modal = document.querySelectorAll('.modal-dialog')
var button_cancel = document.querySelectorAll('.btn-secondary')

var apiteacher = 'https://localhost:7256/api/user/role?pageIndex=1&pageSize=5&sortBy=Id&SortDesc=true&role=3'


add_teacher.onclick = function () {
    add_teacher_alert.setAttribute("style", "display: block")
    setTimeout(function () {
        add_teacher_alert.setAttribute("style", "display: block; opacity: 1; background-image: linear-gradient(rgba(50, 50, 50, 0.5), rgba(50, 50, 50, 0.5));")
    })
    add_teacher_modal[6].setAttribute("style", "transform: translate(0, 0px);")
}

button_cancel[6].onclick = function () {
    add_teacher_alert.setAttribute("style", "display: block ;background-image: linear-gradient(rgba(50, 50, 50, 0), rgba(50, 50, 50, 0))")
    setTimeout(function () {
        add_teacher_alert.setAttribute("style", "display: none")
    }, 150)
}
