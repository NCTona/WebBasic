var profile = document.querySelector('#userDropdown');
var user_dropdown = document.querySelector('.dropdown-menu')
user_dropdown.setAttribute("style", "display: none")


profile.onclick = function () {
    if (user_dropdown.getAttribute("style") == "display: none") {
        user_dropdown.setAttribute("style", "display: block")
    } else {
        user_dropdown.setAttribute("style", "display: none")
    }
}