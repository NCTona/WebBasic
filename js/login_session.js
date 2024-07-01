var apiAdmin = 'https://localhost:7256/api/Account/login'

var dataCookie = document.cookie.split(';')
console.log(dataCookie)
var usernameCookie = dataCookie[2].split('=')
console.log(usernameCookie[1])
var passwordCookie = dataCookie[3].split('=')
console.log(passwordCookie[1])

var data = {
    "Email": usernameCookie[1],
    "Password": passwordCookie[1]
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
            } else if(user.role == 1){
                // Link giáo viên
                window.location.href = ""
            } else if(user.role == 2){
                // Link học sinh
                window.location.href = ""
            } else if(user.role == 3){
                // Link phụ huynh
                window.location.href = ""
            }
        } else {
        }
    })