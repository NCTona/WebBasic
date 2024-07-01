

function Validator(options) {
    var formElement = document.querySelector(options.form);

    if (formElement) {

        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector('.alert');
            var button = document.querySelector('.form-button')

            if (inputElement) {
                inputElement.onblur = function () {
                    var errorMessage = rule.test(inputElement.value);
                    console.log(inputElement)

                    if (errorMessage) {
                        errorElement.innerText = errorMessage;
                        inputElement.setAttribute("style", "border: 2px solid rgb(195, 89, 89);")
                    } else {
                        errorElement.innerText = " ";
                        inputElement.setAttribute("style", "")
                    }
                }
                inputElement.oninput = function () {
                    errorElement.innerText = " ";
                    inputElement.setAttribute("style", "border: 2px solid #b3ff3a;")
                }

            }

            button.onclick = function (e) {
                var isValid = true;

                options.rules.forEach(function (rule) {
                    var inputElement = formElement.querySelector(rule.selector);
                    var errorElement = inputElement.parentElement.querySelector('.alert');
                    var errorMessage = rule.test(inputElement.value);

                    if (errorMessage) {
                        errorElement.innerText = errorMessage;
                        inputElement.setAttribute("style", "border: 2px solid rgb(195, 89, 89);")
                        isValid = false;
                    } else {
                        errorElement.innerText = " ";
                        inputElement.setAttribute("style", "")

                    }

                })
                if (isValid) {
                    options.onSubmit(function () {
                        var apiAdmin = 'https://localhost:7256/api/Account/login'
                        var data = {
                            "Email": document.querySelector('#inputUsername').value,
                            "Password": document.querySelector('#inputPassword').value
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

                            .then(function (admin) {
                                if (admin.token != undefined) {
                                    document.cookie = `token=${std.token}`
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "Sign in success",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    setTimeout(function () {
                                        window.location.href = "./admin_page/dashboard.html"
                                    }, 1600)
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


