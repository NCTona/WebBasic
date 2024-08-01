
var admin_name = document.querySelector('#admin-name')
var adminFullName = document.querySelector('#adminFullName')
var adminGender = document.querySelector('#adminGender')
var adminPhone = document.querySelector('#adminPhone')

var apiAdmin = 'https://localhost:7256/api/User/role/' + idCookie + '?role=0'

fetch(apiAdmin)
    .then(function (reponse) {
        return reponse.json();
    })
    .then(function (admin) {
        admin_name.innerHTML = admin.name
        adminFullName.value = admin.name
        adminGender.selectedIndex = admin.gender
        adminPhone.value = admin.mobile
        adminDateOfBirth.value = admin.dob
    })

var grade_page = document.querySelectorAll('.collapse-item')
var select_class = document.querySelector('#select-class')
var select_year = document.querySelector('#select-year')
var teacherName = document.querySelector('#teacherName')

render_table()

function render_table_after_onchange() {

    for (var i = 0; i < grade_page.length; i++) {
        if (grade_page[i].getAttribute("class") == "collapse-item active") {
            var grade_view = i + 1;
        }
    }

    var apiClasses = 'https://localhost:7256/api/Class/Grade/Year/Name?grade=' + grade_view + '&year=' + select_year.value + '&name=' + select_class.value;
    console.log(apiClasses)

    fetch(apiClasses)
        .then(function (reponse) {
            return reponse.json();
        })
        .then(function (data) {
            var apiTeacher = "https://localhost:7256/api/user/" + data[0].teacherId
            return apiTeacher
        })
        .then(function (apiTeacher) {
            fetch(apiTeacher)
                .then(function (reponse) {
                    return reponse.json()
                })
                .then(function (data) {
                    teacherName.innerHTML = `Giáo viên: ${data.name}`
                })
        })
        .catch(function () {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        })
    fetch(apiClasses)
        .then(function (reponse) {
            return reponse.json();
        })
        .then(function (idClass) {
            if (idClass[0]) {
                var apiStd = 'https://localhost:7256/api/UserClass/class/' + idClass[0].id;
                console.log(apiStd)
                return apiStd
            } else {
                document.querySelector("#tbody").innerHTML = ``;
            }
        })
        .then(function (apiStudent) {
            if (apiStudent) {
                fetch(apiStudent)
                    .then(function (reponse) {
                        return reponse.json()
                    })
                    .then(function (std) {
                        return std
                    })
                    .then(function (s) {

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

                        return s;

                    })
                    .then(function (tb) {
                        tb.forEach(tb => {
                            var btnStudentId = '#btn-info-' + tb.id
                            var btnDeleteStudentId = '#btn-delete-' + tb.id
                            var btn_info_student = document.querySelector(btnStudentId)
                            var btn_delete_student = document.querySelector(btnDeleteStudentId)
                            var info_student_alert = document.querySelector('#infoStudentModal')
                            var info_student_modal = document.querySelectorAll('.modal-dialog')
                            var button_cancel = document.querySelectorAll('.btn-secondary')
                            var button_put_parent = document.querySelector('#btn-put-parent')
                            var parentFullName = document.querySelector('#infoParentFullName')
                            var parentGender = document.querySelector('#infoParentGender')
                            var parentPhone = document.querySelector('#infoParentPhone')
                            var parentDateOfBirth = document.querySelector('#infoParentDateOfBirth')

                            var apiFindParent = 'https://localhost:7256/api/StudentParent/child/' + tb.id


                            btn_info_student.onclick = function () {

                                fetch(apiFindParent)
                                    .then(function (reponse) {
                                        return reponse.json()
                                    })
                                    .then(function (par) {
                                        parentGender.selectedIndex = par.gender
                                        parentFullName.value = par.name
                                        parentPhone.value = par.mobile
                                        parentDateOfBirth.value = par.dob
                                        return par
                                    })
                                    .then(function (par) {
                                        button_put_parent.onclick = function () {

                                            var data = {
                                                Name: parentFullName.value,
                                                Mobile: parentPhone.value,
                                                Gender: parentGender.value,
                                                DOB: parentDateOfBirth.value
                                            }
                                            var api_put_parent = 'https://localhost:7256/api/User/role/' + par.id

                                            fetch(api_put_parent, {
                                                method: "PUT",
                                                headers: {
                                                    "Content-Type": "application/json",
                                                    // 'Content-Type': 'application/x-www-form-urlencoded',
                                                },
                                                body: JSON.stringify(data),

                                            })
                                                .then(function (reponse) {
                                                    return reponse.json()
                                                })
                                                .then(function (data) {

                                                    Swal.fire({
                                                        position: "center",
                                                        icon: "success",
                                                        title: "Success",
                                                        showConfirmButton: false,
                                                        timer: 1500
                                                    });

                                                    render_table_after_onchange()
                                                })
                                                .catch(function () {
                                                    Swal.fire({
                                                        icon: "error",
                                                        title: "Oops...",
                                                        text: "Gmail is already exist!",
                                                    });
                                                })
                                        }
                                    })

                                info_student_alert.setAttribute("style", "display: block")
                                setTimeout(function () {
                                    info_student_alert.setAttribute("style", "display: block; opacity: 1; background-image: linear-gradient(rgba(50, 50, 50, 0.5), rgba(50, 50, 50, 0.5));")
                                })
                                info_student_modal[4].setAttribute("style", "transform: translate(0, 0px);")
                            }

                            button_cancel[4].onclick = function () {
                                info_student_alert.setAttribute("style", "display: block ;background-image: linear-gradient(rgba(50, 50, 50, 0), rgba(50, 50, 50, 0))")
                                setTimeout(function () {
                                    info_student_alert.setAttribute("style", "display: none")
                                }, 150)
                            }

                            btn_delete_student.onclick = function () {
                                var api_delete_student = 'https://localhost:7256/api/user/' + btn_delete_student.id.split('-')[2]
                                fetch(api_delete_student, {
                                    method: "DELETE",
                                    headers: {
                                        "Content-Type": "application/json",
                                        // 'Content-Type': 'application/x-www-form-urlencoded',
                                    },
                                })
                                    .then(function () {

                                        Swal.fire({
                                            position: "center",
                                            icon: "success",
                                            title: "Success",
                                            showConfirmButton: false,
                                            timer: 1500
                                        });

                                        render_table_after_onchange()
                                    })

                            }

                        });
                    })
            } else {
                return
            }

        })
}

function render_table() {

    for (var i = 0; i < grade_page.length; i++) {
        if (grade_page[i].getAttribute("class") == "collapse-item active") {

            var grade_view = i + 1;

            var apiGradeClass = 'https://localhost:7256/api/Class/Grade?grade=' + grade_view

            fetch(apiGradeClass)
                .then(function (reponse) {
                    return reponse.json()
                })
                .then(function (cls) {
                    var classes = []
                    cls.forEach(element => {
                        classes.push(element.className)
                    });
                    console.log(classes)

                    var years = []
                    cls.forEach(element => {
                        years.push(element.year)
                    });
                    console.log(years)

                    function unique(arr) {
                        var newArr = []
                        for (var i = 0; i < arr.length; i++) {
                            if (!newArr.includes(arr[i])) {
                                newArr.push(arr[i])
                            }
                        }
                        return newArr
                    }

                    console.log(unique(years))
                    console.log(unique(classes))
                    return {
                        class: [unique(classes)],
                        year: [unique(years)]
                    }
                })

                .then(function (data) {

                    var htmlc = "";

                    data.class[0].forEach(cls => {
                        htmlc += `<option value="${cls}">${cls}</option>\n`;
                    });

                    console.log(htmlc);

                    select_class.innerHTML = `
                    ${htmlc}
                `
                    return data.class[0][0]
                })
                .then(function (std) {
                    var apiGetYear = 'https://localhost:7256/api/Class/Grade/Name?grade=' + grade_view + '&name=' + std
                    fetch(apiGetYear)
                        .then(function (reponse) {
                            return reponse.json()
                        })
                        .then(function (ys) {
                            console.log(ys)
                            var htmlys = "";

                            ys.forEach(ys => {
                                htmlys += `<option value="${ys}">${ys}</option>\n`;
                            });

                            console.log(htmlys);

                            select_year.innerHTML = `
                                    ${htmlys}
                                `
                        })
                        .then(function () {

                            check_class()

                            var apiClass = 'https://localhost:7256/api/Class/Grade/Year/Name?grade=' + grade_view + '&year=' + select_year.value + '&name=' + select_class.value;

                            fetch(apiClass)
                                .then(function (reponse) {
                                    return reponse.json();
                                })
                                .then(function (data) {
                                    var apiTeacher = "https://localhost:7256/api/user/" + data[0].teacherId
                                    return apiTeacher
                                })
                                .then(function (apiTeacher) {
                                    fetch(apiTeacher)
                                        .then(function (reponse) {
                                            return reponse.json()
                                        })
                                        .then(function (data) {
                                            teacherName.innerHTML = `Giáo viên: ${data.name}`
                                        })
                                })
                        })
                        .then(function () {
                            var apiClass = 'https://localhost:7256/api/Class/Grade/Year/Name?grade=' + grade_view + '&year=' + select_year.value + '&name=' + select_class.value;

                            console.log(apiClass)

                            fetch(apiClass)
                                .then(function (reponse) {
                                    return reponse.json();
                                })
                                .then(function (idClass) {
                                    if (idClass[0]) {
                                        var apiStd = 'https://localhost:7256/api/UserClass/class/' + idClass[0].id;
                                        return apiStd
                                    } else {
                                        document.querySelector("#tbody").innerHTML = ``;
                                    }
                                })
                                .then(function (apiStudent) {
                                    if (apiStudent) {
                                        fetch(apiStudent)
                                            .then(function (reponse) {
                                                return reponse.json()
                                            })
                                            .then(function (std) {
                                                return std
                                            })
                                            .then(function (s) {

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

                                                return s;

                                            })
                                            .then(function (tb) {
                                                tb.forEach(tb => {
                                                    var btnStudentId = '#btn-info-' + tb.id
                                                    var btnDeleteStudentId = '#btn-delete-' + tb.id
                                                    var btn_info_student = document.querySelector(btnStudentId)
                                                    var btn_delete_student = document.querySelector(btnDeleteStudentId)
                                                    var info_student_alert = document.querySelector('#infoStudentModal')
                                                    var info_student_modal = document.querySelectorAll('.modal-dialog')
                                                    var button_cancel = document.querySelectorAll('.btn-secondary')
                                                    var button_put_parent = document.querySelector('#btn-put-parent')
                                                    var parentFullName = document.querySelector('#infoParentFullName')
                                                    var parentGender = document.querySelector('#infoParentGender')
                                                    var parentPhone = document.querySelector('#infoParentPhone')
                                                    var parentDateOfBirth = document.querySelector('#infoParentDateOfBirth')

                                                    var apiFindParent = 'https://localhost:7256/api/StudentParent/child/' + tb.id


                                                    btn_info_student.onclick = function () {

                                                        fetch(apiFindParent)
                                                            .then(function (reponse) {
                                                                return reponse.json()
                                                            })
                                                            .then(function (par) {
                                                                parentGender.selectedIndex = par.gender
                                                                parentFullName.value = par.name
                                                                parentPhone.value = par.mobile
                                                                parentDateOfBirth.value = par.dob
                                                                return par
                                                            })
                                                            .then(function (par) {
                                                                button_put_parent.onclick = function () {

                                                                    var data = {
                                                                        Name: parentFullName.value,
                                                                        Mobile: parentPhone.value,
                                                                        Gender: parentGender.value,
                                                                        DOB: parentDateOfBirth.value
                                                                    }
                                                                    var api_put_parent = 'https://localhost:7256/api/User/role/' + par.id
                                                                    console.log(api_put_parent)
                                                                    fetch(api_put_parent, {
                                                                        method: "PUT",
                                                                        headers: {
                                                                            "Content-Type": "application/json",
                                                                            // 'Content-Type': 'application/x-www-form-urlencoded',
                                                                        },
                                                                        body: JSON.stringify(data),
                                                                    })
                                                                        .then(function (reponse) {
                                                                            return reponse.json()
                                                                        })

                                                                        .then(function (data) {

                                                                            Swal.fire({
                                                                                position: "center",
                                                                                icon: "success",
                                                                                title: "Success",
                                                                                showConfirmButton: false,
                                                                                timer: 1500
                                                                            });

                                                                            render_table_after_onchange()
                                                                        })
                                                                        .catch(function () {
                                                                            Swal.fire({
                                                                                icon: "error",
                                                                                title: "Oops...",
                                                                                text: "Gmail is already exist!",
                                                                            });
                                                                        })
                                                                }

                                                            })


                                                        info_student_alert.setAttribute("style", "display: block")
                                                        setTimeout(function () {
                                                            info_student_alert.setAttribute("style", "display: block; opacity: 1; background-image: linear-gradient(rgba(50, 50, 50, 0.5), rgba(50, 50, 50, 0.5));")
                                                        })
                                                        info_student_modal[4].setAttribute("style", "transform: translate(0, 0px);")

                                                        button_cancel[4].onclick = function () {
                                                            info_student_alert.setAttribute("style", "display: block ;background-image: linear-gradient(rgba(50, 50, 50, 0), rgba(50, 50, 50, 0))")
                                                            setTimeout(function () {
                                                                info_student_alert.setAttribute("style", "display: none")
                                                            }, 150)
                                                        }
                                                    }



                                                    btn_delete_student.onclick = function () {
                                                        var api_delete_student = 'https://localhost:7256/api/user/' + btn_delete_student.id.split('-')[2]
                                                        fetch(api_delete_student, {
                                                            method: "DELETE",
                                                            headers: {
                                                                "Content-Type": "application/json",
                                                                // 'Content-Type': 'application/x-www-form-urlencoded',
                                                            },
                                                        })

                                                            .then(function () {

                                                                Swal.fire({
                                                                    position: "center",
                                                                    icon: "success",
                                                                    title: "Success",
                                                                    showConfirmButton: false,
                                                                    timer: 1500
                                                                });

                                                                render_table_after_onchange()
                                                            })

                                                    }
                                                });
                                            })
                                    } else {
                                        return
                                    }

                                })

                            select_class.onchange = function () {
                                if (select_class.value) {

                                    var apiGetYear = 'https://localhost:7256/api/Class/Grade/Name?grade=' + grade_view + '&name=' + select_class.value

                                    fetch(apiGetYear)
                                        .then(function (reponse) {
                                            return reponse.json()
                                        })
                                        .then(function (ys) {
                                            console.log(ys)
                                            var htmlys = "";

                                            ys.forEach(ys => {
                                                htmlys += `<option value="${ys}">${ys}</option>\n`;
                                            });

                                            console.log(htmlys);

                                            select_year.innerHTML = `
                                                ${htmlys}
                                            `
                                        })
                                        .then(function () {
                                            render_table_after_onchange()
                                        })

                                } else {
                                    document.querySelector("#tbody").innerHTML = ``;
                                }

                            }

                            select_year.onchange = function () {
                                if (select_year.value) {
                                    var apiGetClass = 'https://localhost:7256/api/Class/Grade/Year?grade=' + grade_view + '&year=' + select_year.value

                                    fetch(apiGetClass)
                                        .then(function (reponse) {
                                            return reponse.json()
                                        })
                                        .then(function (cls) {
                                            console.log(cls)
                                        })
                                        .then(function () {
                                            render_table_after_onchange()
                                        })
                                } else {
                                    document.querySelector("#tbody").innerHTML = ``;
                                }
                            }
                        })
                })
        }
    }
}
