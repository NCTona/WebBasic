var profile = document.querySelector('#profile');
var profile_alert = document.querySelector('#profileModal')
var profile_modal = document.querySelectorAll('.modal-dialog')
var button_cancel = document.querySelectorAll('.btn-secondary')

profile.onclick = function () {
    profile_alert.setAttribute("style", "display: block")
    setTimeout(function () {
        profile_alert.setAttribute("style", "display: block; opacity: 1; background-image: linear-gradient(rgba(50, 50, 50, 0.5), rgba(50, 50, 50, 0.5));")
    })
    var user_dropdown = document.querySelector('.dropdown-menu')
    user_dropdown.setAttribute("style", "display: none")
    profile_modal[1].setAttribute("style", "transform: translate(0, 0px)")
}

button_cancel[1].onclick = function () {
    profile_alert.setAttribute("style", "display: block ;background-image: linear-gradient(rgba(50, 50, 50, 0), rgba(50, 50, 50, 0))")
    setTimeout(function () {
        profile_alert.setAttribute("style", "display: none")
    }, 150)
}
