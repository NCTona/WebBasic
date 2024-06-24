var admin_name = document.querySelector('#admin-name')
var apiAdmin = 'http://localhost:3000/Admin'

fetch(apiAdmin)
    .then(function (reponse) {
        return reponse.json();
    })
    .then(function(admin){
        admin_name.innerHTML = admin[0].name
    })

var grade_page = document.querySelectorAll('.collapse-item')
var select = document.querySelector('#select-class')


for (var i = 0; i < 10; i++) {
    if (grade_page[i].getAttribute("class") == "collapse-item active") {
        var grade_view = i + 1;
        var apiStudent = 'http://localhost:3000/Class' + grade_view + '.1'

        fetch(apiStudent)

            .then(function (reponse) {
                return reponse.json();
            })

            .then(function (student) {
                return student;
            })

            .then(function (s) {

                var htmls = s.map(function (tb) {
                    return `<tr>
                    <td>${tb.id}</td>
                    <td>${tb.name}</td>
                    <td>${tb.class}</td>
                    <td>${tb.date}</td>
                    <td>${tb.age}</td>
                    <td>${tb.parent}</td>
                </tr>`
                })

                var html = htmls.join('');

                document.querySelector("#tbody").innerHTML = html;

            })
        select.onchange = function () {
            for (var i = 1; i <= 10; i++) {
                if (select.value == i) {
                    var apiStudent = 'http://localhost:3000/Class' + grade_view + '.' + i;
                } else {
                    document.querySelector("#tbody").innerHTML = ``;
                }
            }

            fetch(apiStudent)
                .then(function (reponse) {
                    return reponse.json();
                })
                .then(function (student) {
                    return student;
                })
                .then(function (s) {


                    var htmls = s.map(function (tb) {
                        return `<tr>
                                            <td>${tb.id}</td>
                                            <td>${tb.name}</td>
                                            <td>${tb.class}</td>
                                            <td>${tb.date}</td>
                                            <td>${tb.age}</td>
                                            <td>${tb.parent}</td>
                                        </tr>`
                    })

                    var html = htmls.join('');

                    document.querySelector("#tbody").innerHTML = html;

                })
        }
    }
}



