var nav = document.querySelector('#grade');
var nav_item = document.querySelector('#grade-item');
var img = document.querySelector('.fa-school')

nav.onclick = function () {
    if(nav.getAttribute("class") == 'nav-item'){
        nav.setAttribute("class", "nav-item active")
        nav.setAttribute("style", "color: #fff")
        nav_item.setAttribute("style", "color: #fff")
        img.setAttribute("style", "color: #fff")
    } else if(nav.getAttribute("class") == 'nav-item active') {
        nav.setAttribute("class", "nav-item")
        nav.setAttribute("style", "color: rgba(255, 255, 255, .8)")
        nav_item.setAttribute("style", "color: rgba(255, 255, 255, .8)")
        img.setAttribute("style", "color: rgba(255, 255, 255, .3)")
    }
}

nav.onmouseover = function () {
    if(nav.getAttribute("class") == 'nav-item'){
        nav.setAttribute("style", "color: #fff")
        nav_item.setAttribute("style", "color: #fff")
        img.setAttribute("style", "color: #fff")
    } else if(nav.getAttribute("class") == 'nav-item active') {
        
    }
}

nav.onmouseout = function () {
    if(nav.getAttribute("class") == 'nav-item'){
        nav.setAttribute("style", "color: rgba(255, 255, 255, .8)")
        nav_item.setAttribute("style", "color: rgba(255, 255, 255, .8)")
        img.setAttribute("style", "color: rgba(255, 255, 255, .3)")
    } else if(nav.getAttribute("class") == 'nav-item active') {
        
    }
}