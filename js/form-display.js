var button = document.querySelector(".button-slider");
var form = document.querySelector(".sign-in-form>form");
var form_container = document.querySelector(".sign-in-form");
var slider_title = document.querySelector(".slider-title h2");
var slider_description = document.querySelector(".slider-title p");
var slider = document.querySelector("#slider");
var slider_transition = document.querySelector(".slider-before");
var close_button = document.querySelector(".close")
var button_content = document.querySelector("#sign-in")
var ads_container = document.querySelector('.ads-container')

function display_form(){
    
    button.addEventListener("click", function(){
        slider.setAttribute("style", "justify-items: center; align-items: center;")
        button.setAttribute("style", "height: 0px;");
        form.setAttribute("style", "display: flex; overflow: visible");
        form_container.setAttribute("style", "z-index: 1; height: 100%; flex-direction: column; display: flex; justify-content: center");
        slider_title.setAttribute("style", "color: rgba(0,0,0,0)");
        slider_description.setAttribute("style", "color: rgba(0,0,0,0)");
        slider_transition.setAttribute("style", "opacity: 0.8");
        button_content.setAttribute("style", "height: 0")
        ads_container.setAttribute("style", "height: 100%")
    })
    
    close_button.addEventListener("click", function(){
        slider.setAttribute("style", "justify-items: center; align-items: center;")
        button.setAttribute("style", "");
        form.setAttribute("style", "display: flex;");
        form_container.setAttribute("style", "z-index: 1; flex-direction: column; display: flex; justify-content: center");
        slider_title.setAttribute("style", "");
        slider_description.setAttribute("style", "");
        slider_transition.setAttribute("style", "");
        button_content.setAttribute("style", "height: 100%")
        ads_container.setAttribute("style", "height: 0%")
    })
}

