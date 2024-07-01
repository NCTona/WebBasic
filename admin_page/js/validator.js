var grade_page = document.querySelectorAll('.collapse-item')
var select_year = document.querySelector('#select-year')
var dataCookie = document.cookie.split(';')
var idCookie = dataCookie[0].split('=')

function Validator(options) {
    var formElementProfile = document.querySelector(options.formProfile);

    if (formElementProfile) {

        options.rules_profile.forEach(function (rule) {
            var inputElement = formElementProfile.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector('.alert');

            var input = inputElement.parentElement.querySelector('.form-input');
            var button = document.querySelector('#btn-accept-admin')

            if (inputElement) {
                inputElement.onblur = function () {
                    var errorMessage = rule.test(inputElement.value);

                    if (errorMessage) {
                        errorElement.innerText = errorMessage;
                        input.setAttribute("style", "padding: 8px ;border: solid 2px rgb(210, 100, 100); border-radius: 4px")
                    } else {
                        errorElement.innerText = " ";
                        input.setAttribute("style", "padding: 8px ;border: solid 2px #9d9d9d; border-radius: 4px")
                    }
                }
                inputElement.oninput = function () {
                    errorElement.innerText = " ";
                    input.setAttribute("style", "padding: 8px ;border: solid 2px; border-radius: 4px")
                }

            }

            button.onclick = function (e) {
                var isValid = true;

                options.rules_profile.forEach(function (rule) {
                    var inputElement = formElementProfile.querySelector(rule.selector);
                    var errorElement = inputElement.parentElement.querySelector('.alert');
                    var errorMessage = rule.test(inputElement.value);
                    var input = inputElement.parentElement.querySelector('.form-input');

                    if (errorMessage) {
                        errorElement.innerText = errorMessage;
                        input.setAttribute("style", "padding: 8px ;border: solid 2px rgb(210, 100, 100); border-radius: 4px")
                        isValid = false;
                    } else {
                        errorElement.innerText = " ";
                        input.setAttribute("style", "padding: 8px ;border: solid 2px; border-radius: 4px")

                    }

                })
                if (isValid) {
                    var data = {
                        "Name": formElementProfile.querySelector('#adminFullName').value,
                        "Mobile": formElementProfile.querySelector('#adminPhone').value,
                        "Gender": formElementProfile.querySelector('#adminGender').value,
                        "DOB": formElementProfile.querySelector('#adminDateOfBirth').value
                    }
                    console.log(data)
                    var api_put_admin = 'https://localhost:7256/api/User/role/' + idCookie[1]
                    fetch(api_put_admin, {
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
                            if (data.status) {
                                Swal.fire({
                                    icon: "error",
                                    title: "Oops...",
                                    text: "Something went wrong!",
                                });
                            } else {
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Success",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })
                }
            }
        })
    };

    var formElementStudent = document.querySelector(options.formAddStudent);

    if (formElementStudent) {

        options.rules_student.forEach(function (rule) {
            var inputElement = formElementStudent.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector('.alert');
            var input = inputElement.parentElement.querySelector('.form-input');
            var button = document.querySelector('#btn-accept-student')

            if (inputElement) {
                inputElement.onblur = function () {
                    var errorMessage = rule.test(inputElement.value);

                    if (errorMessage) {
                        errorElement.innerText = errorMessage;
                        input.setAttribute("style", "padding: 8px ;border: solid 2px rgb(210, 100, 100); border-radius: 4px")
                    } else {
                        errorElement.innerText = " ";
                        input.setAttribute("style", "padding: 8px ;border: solid 2px #9d9d9d; border-radius: 4px")
                    }
                }
                inputElement.oninput = function () {
                    errorElement.innerText = " ";
                    input.setAttribute("style", "padding: 8px ;border: solid 2px; border-radius: 4px")
                }

            }

            button.onclick = function (e) {
                var isValid = true;

                options.rules_student.forEach(function (rule) {
                    var inputElement = formElementStudent.querySelector(rule.selector);
                    var errorElement = inputElement.parentElement.querySelector('.alert');
                    var errorMessage = rule.test(inputElement.value);
                    var input = inputElement.parentElement.querySelector('.form-input');

                    if (errorMessage) {
                        errorElement.innerText = errorMessage;
                        input.setAttribute("style", "padding: 8px ;border: solid 2px rgb(210, 100, 100); border-radius: 4px")
                        isValid = false;
                    } else {
                        errorElement.innerText = " ";
                        input.setAttribute("style", "padding: 8px ;border: solid 2px; border-radius: 4px")

                    }

                })
                if (isValid) {
                    var data = {
                        Role: 2,
                        Name: formElementStudent.querySelector('#fullName').value,
                        Email: formElementStudent.querySelector('#email').value,
                        Mobile: formElementStudent.querySelector('#phone').value,
                        Gender: formElementStudent.querySelector('#gender').value,
                        Address: formElementStudent.querySelector('#address').value,
                        DOB: formElementStudent.querySelector('#dateOfBirth').value,
                        Password: 'student'
                    }
                    console.log(data)
                    var api_post_students = 'https://localhost:7256/api/user/role'
                    fetch(api_post_students, {
                        method: "POST",
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
                            if (data.status) {
                                Swal.fire({
                                    icon: "error",
                                    title: "Oops...",
                                    text: "Something went wrong!",
                                });
                            } else {
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Success",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                            return data
                        })
                        .then(function (std) {
                            var apiLinkParent = 'https://localhost:7256/api/StudentParent'
                            fetch(apiLinkParent, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    // 'Content-Type': 'application/x-www-form-urlencoded',
                                },
                                body: JSON.stringify({
                                    "ParentID": document.querySelector('#parent').value,
                                    "StudentID": std.id
                                }),

                            })
                                .then(function (reponse) {
                                    return reponse.json()
                                })
                                .then(function (data) {
                                    if (data.status) {
                                        Swal.fire({
                                            icon: "error",
                                            title: "Oops...",
                                            text: "Something went wrong!",
                                        });
                                    } else {
                                        Swal.fire({
                                            position: "center",
                                            icon: "success",
                                            title: "Success",
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                    }
                                })
                        })
                }
            }
        })
    };
    var formElementClass = document.querySelector(options.formAddClass);

    if (formElementClass) {

        options.rules_class.forEach(function (rule) {
            var inputElement = formElementClass.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector('.alert');
            var input = inputElement.parentElement.querySelector('.form-input');
            var button = document.querySelector('#btn-accept-class')

            if (inputElement) {
                inputElement.onblur = function () {
                    var errorMessage = rule.test(inputElement.value);

                    if (errorMessage) {
                        errorElement.innerText = errorMessage;
                        input.setAttribute("style", "padding: 8px ;border: solid 2px rgb(210, 100, 100); border-radius: 4px")
                    } else {
                        errorElement.innerText = " ";
                        input.setAttribute("style", "padding: 8px ;border: solid 2px #9d9d9d; border-radius: 4px")
                    }
                }
                inputElement.oninput = function () {
                    errorElement.innerText = " ";
                    input.setAttribute("style", "padding: 8px ;border: solid 2px; border-radius: 4px")
                }

            }

            button.onclick = function (e) {
                var isValid = true;

                options.rules_class.forEach(function (rule) {
                    var inputElement = formElementClass.querySelector(rule.selector);
                    var errorElement = inputElement.parentElement.querySelector('.alert');
                    var errorMessage = rule.test(inputElement.value);
                    var input = inputElement.parentElement.querySelector('.form-input');

                    if (errorMessage) {
                        errorElement.innerText = errorMessage;
                        input.setAttribute("style", "padding: 8px ;border: solid 2px rgb(210, 100, 100); border-radius: 4px")
                        isValid = false;
                    } else {
                        errorElement.innerText = " ";
                        input.setAttribute("style", "padding: 8px ;border: solid 2px; border-radius: 4px")

                    }

                })
                if (isValid) {
                    var grade;
                    for (var i = 0; i < grade_page.length; i++) {
                        if (grade_page[i].getAttribute("class") == "collapse-item active") {
                            grade = i + 1
                        }
                    }

                    if (formElementClass.querySelector('#schedule-day').value == "true") {
                        var boolean = true
                    } else {
                        var boolean = false
                    }

                    var data = {
                        "ClassName": formElementClass.querySelector('#className').value,
                        "TuitionFeeAmount": 200000 + (grade - 1) * 100000,
                        "TeacherID": formElementClass.querySelector('#teacher').value,
                        "IsActive": true,
                        "Grade": grade.toString(),
                        "Year": select_year.value,
                        "ScheduleDto": {
                            "DateType": boolean,
                            "Shift": formElementClass.querySelector('#shift').value,
                            "StartTime": formElementClass.querySelector('#schedule-start').value,
                            "NumberOfSession": formElementClass.querySelector('#course').value,
                        },
                    }
                    console.log(data)
                    var api_post_class = 'https://localhost:7256/api/class/classScheduleTuition'
                    fetch(api_post_class, {
                        method: "POST",
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
                            console.log(data)
                            if (data.Status) {
                                Swal.fire({
                                    icon: "error",
                                    title: "Oops...",
                                    text: "Something went wrong!",
                                });
                            } else {
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Success",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })
                        .catch(function (err) {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Something went wrong!",
                            });
                        })
                }
            }
        })
    };

    var formElementParent = document.querySelector(options.formAddParent);

    if (formElementParent) {

        options.rules_parent.forEach(function (rule) {
            var inputElement = formElementParent.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector('.alert');
            var input = inputElement.parentElement.querySelector('.form-input');
            var button = document.querySelector('#btn-accept-parent')

            if (inputElement) {
                inputElement.onblur = function () {
                    var errorMessage = rule.test(inputElement.value);

                    if (errorMessage) {
                        errorElement.innerText = errorMessage;
                        input.setAttribute("style", "padding: 8px ;border: solid 2px rgb(210, 100, 100); border-radius: 4px")
                    } else {
                        errorElement.innerText = " ";
                        input.setAttribute("style", "padding: 8px ;border: solid 2px #9d9d9d; border-radius: 4px")
                    }
                }
                inputElement.oninput = function () {
                    errorElement.innerText = " ";
                    input.setAttribute("style", "padding: 8px ;border: solid 2px; border-radius: 4px")
                }

            }

            button.onclick = function (e) {
                var isValid = true;

                options.rules_parent.forEach(function (rule) {
                    var inputElement = formElementParent.querySelector(rule.selector);
                    var errorElement = inputElement.parentElement.querySelector('.alert');
                    var errorMessage = rule.test(inputElement.value);
                    var input = inputElement.parentElement.querySelector('.form-input');

                    if (errorMessage) {
                        errorElement.innerText = errorMessage;
                        input.setAttribute("style", "padding: 8px ;border: solid 2px rgb(210, 100, 100); border-radius: 4px")
                        isValid = false;
                    } else {
                        errorElement.innerText = " ";
                        input.setAttribute("style", "padding: 8px ;border: solid 2px; border-radius: 4px")

                    }

                })
                if (isValid) {
                    var data = {
                        Role: 3,
                        Name: formElementParent.querySelector('#parentFullName').value,
                        Email: formElementParent.querySelector('#parentEmail').value,
                        Mobile: formElementParent.querySelector('#parentPhone').value,
                        Gender: formElementParent.querySelector('#parentGender').value,
                        Address: formElementParent.querySelector('#parentAddress').value,
                        DOB: formElementParent.querySelector('#parentDateOfBirth').value,
                        Password: 'parent'
                    }
                    console.log(data)
                    var api_post_parents = 'https://localhost:7256/api/user/role'
                    fetch(api_post_parents, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify(data),
                    })
                    .then(function(reponse){
                        return reponse.json()
                    })
                    .then(function(data){
                        if(data.status){
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Something went wrong!",
                              });
                        } else {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Success",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                }
            }
        })
    };

    var formElementTeacher = document.querySelector(options.formAddTeacher);

    if (formElementTeacher) {

        options.rules_teacher.forEach(function (rule) {
            var inputElement = formElementTeacher.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector('.alert');
            var input = inputElement.parentElement.querySelector('.form-input');
            var button = document.querySelector('#btn-accept-teacher')

            if (inputElement) {
                inputElement.onblur = function () {
                    var errorMessage = rule.test(inputElement.value);

                    if (errorMessage) {
                        errorElement.innerText = errorMessage;
                        input.setAttribute("style", "padding: 8px ;border: solid 2px rgb(210, 100, 100); border-radius: 4px")
                    } else {
                        errorElement.innerText = " ";
                        input.setAttribute("style", "padding: 8px ;border: solid 2px #9d9d9d; border-radius: 4px")
                    }
                }
                inputElement.oninput = function () {
                    errorElement.innerText = " ";
                    input.setAttribute("style", "padding: 8px ;border: solid 2px; border-radius: 4px")
                }

            }

            button.onclick = function (e) {
                var isValid = true;

                options.rules_teacher.forEach(function (rule) {
                    var inputElement = formElementTeacher.querySelector(rule.selector);
                    var errorElement = inputElement.parentElement.querySelector('.alert');
                    var errorMessage = rule.test(inputElement.value);
                    var input = inputElement.parentElement.querySelector('.form-input');

                    if (errorMessage) {
                        errorElement.innerText = errorMessage;
                        input.setAttribute("style", "padding: 8px ;border: solid 2px rgb(210, 100, 100); border-radius: 4px")
                        isValid = false;
                    } else {
                        errorElement.innerText = " ";
                        input.setAttribute("style", "padding: 8px ;border: solid 2px; border-radius: 4px")

                    }

                })
                if (isValid) {
                    var data = {
                        Role: 1,
                        Name: formElementTeacher.querySelector('#teacherFullName').value,
                        Email: formElementTeacher.querySelector('#teacherEmail').value,
                        Mobile: formElementTeacher.querySelector('#teacherPhone').value,
                        Gender: formElementTeacher.querySelector('#teacherGender').value,
                        Address: formElementTeacher.querySelector('#teacherAddress').value,
                        DOB: formElementTeacher.querySelector('#teacherDateOfBirth').value,
                        Password: 'teacher'
                    }
                    console.log(data)
                    var api_post_teachers = 'https://localhost:7256/api/user/role'
                    fetch(api_post_teachers, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify(data),
                    })
                    .then(function(reponse){
                        return reponse.json()
                    })
                    .then(function(data){
                        if(data.status){
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Something went wrong!",
                              });
                        } else {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Success",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                }
            }
        })
    };

}

Validator.isFullName = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "(*)Họ tên không hợp lệ";
        }
    }
}

Validator.isGender = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "(*)Giới tính không hợp lệ";
        }
    }
}

Validator.isDateOfBirth = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "(*)Ngày sinh không hợp lệ";
        }
    }
}

Validator.isAddress = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "(*)Địa chỉ không hợp lệ";
        }
    }
}

Validator.isPhone = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "(*)Số điện thoại không hợp lệ";
        }
    }
}

Validator.isEmail = function (selector) {
    var email = document.querySelector(selector)

    return {
        selector: selector,
        test: function ValidateEmail(email) {

            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (email.match(validRegex)) {

                return "";

            } else {

                return "(*)Email không hợp lệ"

            }

        }


    }


}

Validator.isClassName = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "(*)Tên lớp không hợp lệ";
        }
    }
}

Validator.isTeacher = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "(*)Tên giáo viên không hợp lệ";
        }
    }
}

Validator.isScheduleStart = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "(*)Ngày bắt đầu không hợp lệ";
        }
    }
}

Validator.isScheduleDay = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "(*)Lịch học không hợp lệ";
        }
    }
}

Validator.isCourse = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "(*)Khóa học không hợp lệ";
        }
    }
}

Validator.isShift = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "(*)Ca học không hợp lệ";
        }
    }
}
