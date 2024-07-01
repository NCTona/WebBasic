var admin_name = document.querySelector('#admin-name')
var adminFullName = document.querySelector('#adminFullName')
var adminGender = document.querySelector('#adminGender')
var adminPhone = document.querySelector('#adminPhone')
var dataCookie = document.cookie.split(';')
var idCookie = dataCookie[0].split('=')
console.log(idCookie)


var apiAdmin = 'https://localhost:7256/api/User/role/' + idCookie[1] + '?role=0'


fetch(apiAdmin)
    .then(function (reponse) {
        return reponse.json();
    })
    .then(function (admin) {
        console.log(admin)
        admin_name.innerHTML = admin.name
        adminFullName.value = admin.name
        if (admin.gender == 0) {
            adminGender.value = 'Nữ'
        } else {
            adminGender.value = 'Nam'
        }
        adminPhone.value = admin.mobile
        adminDateOfBirth.value = admin.dob
    })

var grade_page = document.querySelectorAll('.collapse-item')
var select_class = document.querySelector('#select-class')
var select_year = document.querySelector('#select-year')


for (var i = 0; i < grade_page.length; i++) {
    if (grade_page[i].getAttribute("class") == "collapse-item active") {
        var grade_view = i + 1;
        var apiClass = 'https://localhost:7256/api/Class/Grade/Year/Name?grade=' + grade_view + '&year=' + select_year.value + '&name=A' + select_class.value;
        console.log(apiClass)

        fetch(apiClass)
            .then(function (reponse) {
                return reponse.json();
            })
            .then(function (idClass) {
                if (idClass[0]) {
                    var apiStd = 'https://localhost:7256/api/UserClass/class/' + idClass[0].id;

                } else {
                    document.querySelector("#tbody").innerHTML = ``;
                }
                return apiStd
            })
            .then(function (apiStudent) {
                fetch(apiStudent)
                    .then(function (reponse) {
                        return reponse.json()
                    })
                    .then(function (std) {
                        return std
                    })
                    .then(function (s) {
                        console.log(s)

                        var htmls = s.map(function (tb) {
                            var stdGender
                            if (tb.gender == 0) {
                                stdGender = 'Nữ'
                            } else {
                                stdGender = 'Nam'
                            }
                            return `<tr>
                                            <td>${tb.id}</td>
                                            <td>${tb.name}</td>
                                            <td>${stdGender}</td>
                                            <td>${tb.dob}</td>
                                            <td>${tb.mobile}</td>
                                            <td>${tb.address}</td>
                                            <td> <button id="btn-info-${tb.id}" style="border: none; background-color: #909090; color: rgb(40, 40, 40); border-radius: 4px; padding: 4px; height: 32px; width: 64px;">Info</button>
                                            <button id="btn-delete-${tb.id}" style="border: none; background-color: #df3535; color: aliceblue; border-radius: 4px; padding: 4px; height: 32px; width: 64px;">Delete</button></td>
                                        </tr>`
                        })

                        var html = htmls.join('');

                        document.querySelector("#tbody").innerHTML = html;

                    })
            })

            .then(function () {
                document.querySelector('#info-student').setAttribute("src", "js/info-student.js")
            })

        select_class.onchange = function () {
            if (select_class.value) {
                var apiClass = 'https://localhost:7256/api/Class/Grade/Year/Name?grade=' + grade_view + '&year=' + select_year.value + '&name=A' + select_class.value;
                console.log(apiClass)
            } else {
                document.querySelector("#tbody").innerHTML = ``;
            }
            fetch(apiClass)
                .then(function (reponse) {
                    return reponse.json();
                })
                .then(function (idClass) {
                    if (idClass[0]) {
                        var apiStd = 'https://localhost:7256/api/UserClass/class/' + idClass[0].id;

                    } else {
                        document.querySelector("#tbody").innerHTML = ``;
                    }
                    return apiStd
                })
                .then(function (apiStudent) {
                    fetch(apiStudent)
                        .then(function (reponse) {
                            return reponse.json()
                        })
                        .then(function (std) {
                            return std
                        })
                        .then(function (s) {
                            console.log(s)

                            var htmls = s.map(function (tb) {
                                var stdGender
                                if (tb.gender == 0) {
                                    stdGender = 'Nữ'
                                } else {
                                    stdGender = 'Nam'
                                }
                                return `<tr>
                                            <td>${tb.id}</td>
                                            <td>${tb.name}</td>
                                            <td>${stdGender}</td>
                                            <td>${tb.dob}</td>
                                            <td>${tb.mobile}</td>
                                            <td>${tb.address}</td>
                                            <td> <button id="btn-info-${tb.id}" style="border: none; background-color: #909090; color: rgb(40, 40, 40); border-radius: 4px; padding: 4px; height: 32px; width: 64px;">Info</button>
                                            <button id="btn-delete-${tb.id}" style="border: none; background-color: #df3535; color: aliceblue; border-radius: 4px; padding: 4px; height: 32px; width: 64px;">Delete</button></td>
                                        </tr>`
                            })

                            var html = htmls.join('');

                            document.querySelector("#tbody").innerHTML = html;

                        })
                })

                .then(function () {
                    document.querySelector('#info-student').setAttribute("src", "js/info-student.js")
                })
        }

        select_year.onchange = function () {
            if (select_year.value) {
                var apiClass = 'https://localhost:7256/api/Class/Grade/Year/Name?grade=' + grade_view + '&year=' + select_year.value + '&name=A' + select_class.value;
                console.log(apiClass)
            } else {
                document.querySelector("#tbody").innerHTML = ``;
            }
            fetch(apiClass)
                .then(function (reponse) {
                    return reponse.json();
                })
                .then(function (idClass) {
                    if (idClass[0]) {
                        var apiStd = 'https://localhost:7256/api/UserClass/class/' + idClass[0].id;

                    } else {
                        document.querySelector("#tbody").innerHTML = ``;
                    }
                    return apiStd
                })
                .then(function (apiStudent) {
                    fetch(apiStudent)
                        .then(function (reponse) {
                            return reponse.json()
                        })
                        .then(function (std) {
                            return std
                        })
                        .then(function (s) {
                            console.log(s)

                            var htmls = s.map(function (tb) {
                                var stdGender
                                if (tb.gender == 0) {
                                    stdGender = 'Nữ'
                                } else {
                                    stdGender = 'Nam'
                                }
                                return `<tr>
                                            <td>${tb.id}</td>
                                            <td>${tb.name}</td>
                                            <td>${stdGender}</td>
                                            <td>${tb.dob}</td>
                                            <td>${tb.mobile}</td>
                                            <td>${tb.address}</td>
                                            <td> <button id="btn-info-${tb.id}" style="border: none; background-color: #909090; color: rgb(40, 40, 40); border-radius: 4px; padding: 4px; height: 32px; width: 64px;">Info</button>
                                            <button id="btn-delete-${tb.id}" style="border: none; background-color: #df3535; color: aliceblue; border-radius: 4px; padding: 4px; height: 32px; width: 64px;">Delete</button></td>
                                        </tr>`
                            })

                            var html = htmls.join('');

                            document.querySelector("#tbody").innerHTML = html;

                        })
                })
        }
    }
}




