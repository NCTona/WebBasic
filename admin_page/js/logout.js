var logout = document.querySelector('#logout');
var logout_alert = document.querySelector('#logoutModal')
var logout_modal = document.querySelector('.modal-dialog')
var button_close = document.querySelector('.close')
var button_cancel = document.querySelector('.btn-secondary')
var button_logout = document.querySelector('#btn-logout')

logout.onclick = function () {
    logout_alert.setAttribute("style", "display: block")
    setTimeout(function () {
        logout_alert.setAttribute("style", "display: block; opacity: 1; background-image: linear-gradient(rgba(50, 50, 50, 0.5), rgba(50, 50, 50, 0.5));")
    })
    var user_dropdown = document.querySelector('.dropdown-menu')
    user_dropdown.setAttribute("style", "display: none")
    logout_modal.setAttribute("style", "transform: translate(0, 0px)")
}

button_close.onclick = function () {
    logout_alert.setAttribute("style", "display: block ;background-image: linear-gradient(rgba(50, 50, 50, 0), rgba(50, 50, 50, 0))")
    setTimeout(function () {
        logout_alert.setAttribute("style", "display: none")
    }, 150)
}

button_cancel.onclick = function () {
    logout_alert.setAttribute("style", "display: block ;background-image: linear-gradient(rgba(50, 50, 50, 0), rgba(50, 50, 50, 0))")
    setTimeout(function () {
        logout_alert.setAttribute("style", "display: none")
    }, 150)
}

button_logout.onclick = function () {
    window.location = "/admin.html"
}