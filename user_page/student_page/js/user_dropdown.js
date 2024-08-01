var dropdown = document.querySelector('#subnav')
var btn_avatar = document.querySelector('#avatar')

btn_avatar.onclick = function(){
    if (btn_avatar.getAttribute("class") == "fas fa-user-circle unactive") {
        btn_avatar.setAttribute("class", "fas fa-user-circle active")
    } else {
        btn_avatar.setAttribute("class", "fas fa-user-circle unactive")
    }
    if (dropdown.getAttribute("style") == "display: none") {
        dropdown.setAttribute("style", "display: flex")
    } else {
        dropdown.setAttribute("style", "display: none")
    }
}