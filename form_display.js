var button = document.querySelector(".button-slider");
var form = document.querySelector(".sign-in-form>form");
var form_container = document.querySelector(".sign-in-form");
var slider_title = document.querySelector(".slider-title h2");
var slider_description = document.querySelector(".slider-title p");
var slider = document.querySelector("#slider");
var slider_transition = document.querySelector(".slider-before");
function display_form(){
    
    button.addEventListener("click", function(){
        slider.setAttribute("style", "justify-items: center; align-items: center;")
        button.setAttribute("style", "height: 0px;");
        form.setAttribute("style", "display: flex; overflow: visible");
        form_container.setAttribute("style", "z-index: 1; height: 100%; flex-direction: column; display: flex; justify-content: center");
        slider_title.setAttribute("style", "color: rgba(0,0,0,0)");
        slider_description.setAttribute("style", "color: rgba(0,0,0,0)");
        slider_transition.setAttribute("style", "opacity: 0.9");
        document.getElementById("button-slider").innerText = "";
    })
}

