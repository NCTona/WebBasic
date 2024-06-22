

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
                        var apiAdmin = 'http://localhost:3000/Admin'
                        fetch(apiAdmin)

                            .then(function (reponse) {
                                return reponse.json();
                            })

                            .then(function (admin) {
                                console.log(typeof formElement.querySelector('#username').value);
                                console.log(formElement.querySelector('#username').value === admin[0].username)
                                if (formElement.querySelector('#username').value === admin[0].username && formElement.querySelector('#password').value === admin[0].password) {
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


