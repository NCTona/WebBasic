var add_class = document.querySelector('#btn-add-class')
var add_class_alert = document.querySelector('#addClassModal')
var add_class_modal = document.querySelectorAll('.modal-dialog')
var button_cancel = document.querySelectorAll('.btn-secondary')

add_class.onclick = function () {
    add_class_alert.setAttribute("style", "display: block")
    setTimeout(function () {
        add_class_alert.setAttribute("style", "display: block; opacity: 1; background-image: linear-gradient(rgba(50, 50, 50, 0.5), rgba(50, 50, 50, 0.5));")
    })
    add_class_modal[2].setAttribute("style", "transform: translate(0, 50px);")
}


button_cancel[2].onclick = function () {
    add_class_alert.setAttribute("style", "display: block ;background-image: linear-gradient(rgba(50, 50, 50, 0), rgba(50, 50, 50, 0))")
    setTimeout(function () {
        add_class_alert.setAttribute("style", "display: none")
    }, 150)
}
