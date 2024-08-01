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
if (roleCookie == 2) {

} else {
    window.location.href = '/'
}


