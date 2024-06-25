

function Validator(options) {
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
                    options.onSubmit(function () {
                        var apiAdmin = 'http://localhost:3000/Admin'
                        fetch(apiAdmin)

                            .then(function (reponse) {
                                return reponse.json();
                            })

                            .then(function (admin) {
                                console.log(typeof formElementStudent.querySelector('#username').value);
                                console.log(formElementStudent.querySelector('#username').value === admin[0].username)
                                if (formElementStudent.querySelector('#username').value === admin[0].username && formElementStudent.querySelector('#password').value === admin[0].password) {
                                    setTimeout(function () {
                                        window.location.href = "./admin_page/dashboard.html"
                                    }, 1600)
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "Sign in success",
                                        showConfirmButton: false,
                                        timer: 1500
                                      });
                                      
                                } else {
                                    errorElement.innerText = "(*)Tài khoản hoặc mật khẩu không đúng";
                                }
                            })
                    }
                    )
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
                    options.onSubmit(function () {
                        var apiAdmin = 'http://localhost:3000/Admin'
                        fetch(apiAdmin)

                            .then(function (reponse) {
                                return reponse.json();
                            })

                            .then(function (admin) {
                                console.log(typeof formElementClass.querySelector('#username').value);
                                console.log(formElementClass.querySelector('#username').value === admin[0].username)
                                if (formElementClass.querySelector('#username').value === admin[0].username && formElementClass.querySelector('#password').value === admin[0].password) {
                                    setTimeout(function () {
                                        window.location.href = "./admin_page/dashboard.html"
                                    }, 1600)
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "Sign in success",
                                        showConfirmButton: false,
                                        timer: 1500
                                      });
                                      
                                } else {
                                    errorElement.innerText = "(*)Tài khoản hoặc mật khẩu không đúng";
                                }
                            })
                    }
                    )
                }
            }
        })

    };
}




Validator.isFullName = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "(*)Vui lòng nhập họ tên";
        }
    }
}

Validator.isGender = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "(*)Vui lòng nhập giới tính";
        }
    }
}

Validator.isAge = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "(*)Vui lòng nhập tuổi";
        }
    }
}

Validator.isPhone = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "(*)Vui lòng nhập số điện thoại";
        }
    }
}

Validator.isParent = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "(*)Vui lòng nhập phụ huynh";
        }
    }
}

Validator.isClassName = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "(*)Vui lòng nhập tên lớp";
        }
    }
}

Validator.isTeacher = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "(*)Vui lòng nhập giáo viên";
        }
    }
}

