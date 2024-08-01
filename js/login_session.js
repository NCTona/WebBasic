var apiAdmin = 'https://localhost:7256/api/Account/login'

if (document.cookie[0]) {

    var dataCookie = document.cookie.split('; ');

    var result = {};

    dataCookie.forEach(part => {
        var [key, value] = part.split('=');
        result[key.trim()] = value;
    });

    var usernameCookie = `${result.username}`;
    var passwordCookie = `${result.password}`;
    var tokenCookie = `${result.token}`;
    var idCookie = `${result.id}`;
    var roleCookie = `${result.role}`;

    var data = {
        "Email": usernameCookie,
        "Password": passwordCookie
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

            if (user.token != undefined) {
                if (user.role == 0) {
                    window.location.href = "./admin_page/dashboard.html"
                } else if (user.role == 1) {
                    window.location.href = "./user_page/teacher_page/attendance.html"
                } else if (user.role == 2) {
                    window.location.href = "./user_page/student_page/student_schedule.html"
                } else if (user.role == 3) {
                    window.location.href = "./user_page/parent_page/parent_payment.html"
                }
            } else {
            }
        })
}

