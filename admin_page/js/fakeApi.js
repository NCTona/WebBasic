var admin_name = document.querySelector('#admin-name')
var adminFullName = document.querySelector('#adminFullName')
var adminGender = document.querySelector('#adminGender')
var adminPhone = document.querySelector('#adminPhone')
// var apiAdmin = 'https://localhost:7256/api/User/role/:id?role=0'
var apiAdmin = 'http://localhost:3000/admin'


fetch(apiAdmin)
    .then(function (reponse) {
        return reponse.json();
    })
    .then(function (admin) {
        admin_name.innerHTML = admin[0].Name
        adminFullName.value = admin[0].Name
        if (admin[0].Gender == 0) {
            adminGender.value = 'Nữ'
        } else {
            adminGender.value = 'Nam'
        }
        adminPhone.value = admin[0].Mobile
        adminDateOfBirth.value = admin[0].DOB
    })

var grade_page = document.querySelectorAll('.collapse-item')
var select = document.querySelector('#select-class')

for (var i = 0; i < grade_page.length; i++) {
    if (grade_page[i].getAttribute("class") == "collapse-item active") {
        var grade_view = i + 1;
        // var apiStudent = 'https://localhost:7256/api/UserClass/class/' + grade_view
        var apiStudent = 'http://localhost:3000/student'

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
                    <td>${tb.ID}</td>
                    <td>${tb.Name}</td>
                    <td>${tb.Gender}</td>
                    <td>${tb.DOB}</td>
                    <td>${tb.Mobile}</td>
                    <td>${tb.Address}</td>
                    <td> <button id="btn-info-${tb.ID}" style="border: none; background-color: #909090; color: rgb(40, 40, 40); border-radius: 4px; padding: 4px; height: 32px; width: 64px;"> Info</button>
                    <button id="btn-delete-${tb.ID}" style="border: none; background-color: #df3535; color: aliceblue; border-radius: 4px; padding: 4px; height: 32px; width: 64px;">Delete</button></td>
                </tr>`
                })

                var html = htmls.join('');

                document.querySelector("#tbody").innerHTML = html;

            })

            .then(function(){
                document.querySelector('#info-student').setAttribute("src", "js/info-student.js")
            })

            .catch(function(err){
                console.log(err)
            })

        select.onchange = function () {
            if (select.value) {
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
                                    <td>${tb.ID}</td>
                                    <td>${tb.Name}</td>
                                    <td>${tb.Gender}</td>
                                    <td>${tb.DOB}</td>
                                    <td>${tb.Mobile}</td>
                                    <td>${tb.Address}</td>
                                    <td> <button id="btn-info-${tb.ID}" style="border: none; background-color: #909090; color: rgb(40, 40, 40); border-radius: 4px; padding: 4px; height: 32px; width: 64px;">Info</button>
                                    <button id="btn-delete-${tb.ID}" style="border: none; background-color: #df3535; color: aliceblue; border-radius: 4px; padding: 4px; height: 32px; width: 64px;">Delete</button></td>
                                </tr>`
                })

                var html = htmls.join('');

                document.querySelector("#tbody").innerHTML = html;

            })
            .then(function(){
                document.querySelector('#info-student').setAttribute("src", "js/info-student.js")
            })
    }
}




