function Validator(options) {
    var formElement = document.querySelector(options.form);

    if (formElement) {

        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector('.alert');
            var input = inputElement.parentElement.querySelector('.form-input');
            var button = document.querySelector('.form-button')

            if (inputElement) {
                inputElement.onblur = function () {
                    var errorMessage = rule.test(inputElement.value);

                    if (errorMessage) {
                        errorElement.innerText = errorMessage;
                        input.setAttribute("style", "border: 2px solid rgb(195, 89, 89);")
                    } else {
                        errorElement.innerText = " ";
                        input.setAttribute("style", "border: 2px solid #fffd8d;")
                    }
                }
                inputElement.oninput = function () {
                    errorElement.innerText = " ";
                    input.setAttribute("style", "border: 2px solid #b3ff3a;")
                }

            }

            button.onclick = function (e) {
                var isValid = true;

                options.rules.forEach(function (rule) {
                    var inputElement = formElement.querySelector(rule.selector);
                    var errorElement = inputElement.parentElement.querySelector('.alert');
                    var errorMessage = rule.test(inputElement.value);
                    var input = inputElement.parentElement.querySelector('.form-input');

                    if (errorMessage) {
                        errorElement.innerText = errorMessage;
                        input.setAttribute("style", "border: 2px solid rgb(195, 89, 89);")
                        isValid = false;
                    } else {
                        errorElement.innerText = " ";
                        input.setAttribute("style", "border: 2px solid #fffd8d;")

                    }

                })
                if (isValid) {
                    options.onSubmit(function () {
                        var apiAdmin = 'https://localhost:7256/api/Account/login'
                        var data = {
                            "Email": document.querySelector('#username').value,
                            "Password": document.querySelector('#password').value
                        }

                        if (data.Email == "nctona" && data.Password == "admin") {
                            window.location.href = "admin_page/dashboard.html"
                            document.cookie = 'role = 0;'
                        } else if (data.Email == "nctona" && data.Password == "student"){
                            window.location.href = "./user_page/student_page/student_schedule.html"
                            document.cookie = 'role = 2;'
                        } else if (data.Email == "nctona" && data.Password == "parent"){
                            window.location.href = "./user_page/parent_page/parent_payment.html"
                            document.cookie = 'role = 3;'
                        } else if (data.Email == "nctona" && data.Password == "teacher"){
                            window.location.href = "./user_page/teacher_page/attendance.html"
                            document.cookie = 'role = 1;'
                        } 

                        fetch(apiAdmin, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                // 'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            body: JSON.stringify(data)
                        })
                            .then(function (reponse) {
                                return reponse.json();
                            })

                            .then(function (user) {
                                console.log(user)
                                if (user.token != undefined) {
                                    document.cookie = `username=${document.querySelector('#username').value}`
                                    document.cookie = `password=${document.querySelector('#password').value}`
                                    document.cookie = `token=${user.token}`
                                    document.cookie = `id=${user.id}`
                                    document.cookie = `role=${user.role}`
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "Sign in success",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    if (user.role == 0) {
                                        setTimeout(function () {
                                            window.location.href = "admin_page/dashboard.html"
                                        }, 1600)
                                    } else if (user.role == 1) {
                                        setTimeout(function () {
                                            window.location.href = "./user_page/teacher_page/attendance.html"
                                        }, 1600)
                                    } else if (user.role == 2) {
                                        setTimeout(function () {
                                            window.location.href = "./user_page/student_page/student_schedule.html"
                                        }, 1600)
                                    } else if (user.role == 3) {
                                        setTimeout(function () {
                                            window.location.href = "./user_page/parent_page/parent_payment.html"
                                        }, 1600)
                                    }
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

Validator.isUsername = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "(*)Vui lòng nhập username";
        }
    }
}

Validator.isPassword = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "(*)Vui lòng nhập password";
        }
    }
}


