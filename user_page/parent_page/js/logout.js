var btn_logout = document.querySelector('#user_logout')
var logout_dialog = document.querySelector('#logout')
var logout_alert = document.querySelector('#logout_alert')
var close_logout_dialog = document.querySelector('#close_logout_dialog')
var cancel_logout_dialog = document.querySelector('#cancel_logout_dialog')
var confirm_logout = document.querySelector('#confirm_logout')

btn_logout.onclick = function () {
    logout_dialog.setAttribute("style", "display: flex;")
    setTimeout(function () {
        logout_dialog.setAttribute("style", "display: flex; background-color: rgba(80, 80, 80, 0.9);")
    })
    setTimeout(function () {
        logout_alert.setAttribute("style", "height: 228px")
    }, 0)
    dropdown.setAttribute("style", "display: none")
    btn_avatar.setAttribute("class", "fas fa-user-circle unactive")
}

close_logout_dialog.onclick = function () {
    logout_alert.setAttribute("style", "")
    logout_dialog.setAttribute("style", "display: flex; background-color: rgba(80, 80, 80, 0);")
    setTimeout(function () {
        logout_dialog.setAttribute("style", "display: none")
    }, 800)
}

cancel_logout_dialog.onclick = function () {
    logout_alert.setAttribute("style", "")
    logout_dialog.setAttribute("style", "display: flex; background-color: rgba(80, 80, 80, 0);")
    setTimeout(function () {
        logout_dialog.setAttribute("style", "display: none")
    }, 800)
}

confirm_logout.onclick = function () {
    document.cookie = `username=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC`
    document.cookie = `password=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC`
    document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC`
    document.cookie = `id=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC`
    document.cookie = `role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC`
    window.location = "/"
}