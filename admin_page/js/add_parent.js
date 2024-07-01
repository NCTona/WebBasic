var add_parent = document.querySelector('#btn-add-parent')
var add_parent_alert = document.querySelector('#addParentModal')
var add_parent_modal = document.querySelectorAll('.modal-dialog')
var button_cancel = document.querySelectorAll('.btn-secondary')

var apiParent = 'https://localhost:7256/api/user/role?pageIndex=1&pageSize=5&sortBy=Id&SortDesc=true&role=3'


add_parent.onclick = function () {
    add_parent_alert.setAttribute("style", "display: block")
    setTimeout(function () {
        add_parent_alert.setAttribute("style", "display: block; opacity: 1; background-image: linear-gradient(rgba(50, 50, 50, 0.5), rgba(50, 50, 50, 0.5));")
    })
    add_parent_modal[5].setAttribute("style", "transform: translate(0, 0px);")
}

button_cancel[5].onclick = function () {
    add_parent_alert.setAttribute("style", "display: block ;background-image: linear-gradient(rgba(50, 50, 50, 0), rgba(50, 50, 50, 0))")
    setTimeout(function () {
        add_parent_alert.setAttribute("style", "display: none")
    }, 150)
}
