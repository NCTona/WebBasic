var add_class = document.querySelector('#btn-add-class')
var add_class_alert = document.querySelector('#addClassModal')
var add_class_modal = document.querySelectorAll('.modal-dialog')
var button_cancel = document.querySelectorAll('.btn-secondary')
var apiTeacher = 'https://localhost:7256/api/user/role?pageIndex=1&pageSize=20&sortBy=Id&SortDesc=true&role=1'

render_teacher()


function render_teacher() {
    fetch(apiTeacher)
        .then(function (reponse) {
            return reponse.json()
        })
        .then(function (tc) {
            var htmls = tc.map(function (tb) {
                return `
                <option value="${tb.id}">${tb.name}</option>
            `
            })

            var html = htmls.join('');

            document.querySelector("#teacher").innerHTML = html;

        })

        .catch(function (err) {
            console.log(err)
        })
}

add_class.onclick = function () {
    add_class_alert.setAttribute("style", "display: block")
    setTimeout(function () {
        add_class_alert.setAttribute("style", "display: block; opacity: 1; background-image: linear-gradient(rgba(50, 50, 50, 0.5), rgba(50, 50, 50, 0.5));")
    })
    add_class_modal[3].setAttribute("style", "transform: translate(0, 50px);")
}


button_cancel[3].onclick = function () {
    add_class_alert.setAttribute("style", "display: block ;background-image: linear-gradient(rgba(50, 50, 50, 0), rgba(50, 50, 50, 0))")
    setTimeout(function () {
        add_class_alert.setAttribute("style", "display: none")
    }, 150)
}
