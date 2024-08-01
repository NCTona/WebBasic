var btn_profile = document.querySelector('#user_profile')
var profile_dialog = document.querySelector('#profile')
var profile_info = document.querySelector('#profile_info')
var close_profile_dialog = document.querySelector('#close_profile_dialog')
var cancel_profile_dialog = document.querySelector('#cancel_profile_dialog')
var confirm_profile = document.querySelector('#confirm_profile')

btn_profile.onclick = function () {
    profile_dialog.setAttribute("style", "display: flex;")
    setTimeout(function () {
        profile_dialog.setAttribute("style", "display: flex; background-color: rgba(80, 80, 80, 0.9);")
    })
    setTimeout(function () {
        profile_info.setAttribute("style", "height: 588px")
    }, 0)
    dropdown.setAttribute("style", "display: none")
    btn_avatar.setAttribute("class", "fas fa-user-circle unactive")
}

close_profile_dialog.onclick = function () {
    profile_info.setAttribute("style", "")
    profile_dialog.setAttribute("style", "display: flex; background-color: rgba(80, 80, 80, 0);")
    setTimeout(function () {
        profile_dialog.setAttribute("style", "display: none")
    }, 800)
}

cancel_profile_dialog.onclick = function () {
    profile_info.setAttribute("style", "")
    profile_dialog.setAttribute("style", "display: flex; background-color: rgba(80, 80, 80, 0);")
    setTimeout(function () {
        profile_dialog.setAttribute("style", "display: none")
    }, 800)
}
