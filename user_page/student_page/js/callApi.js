var studentFullName = document.querySelector('#studentFullName')
var studentGender = document.querySelector('#studentGender')
var studentPhone = document.querySelector('#studentPhone')
var studentDateOfBirth = document.querySelector('#studentDateOfBirth')

var apiStudent = 'https://localhost:7256/api/User/role/' + idCookie + '?role=2'
var apiStudentClass = 'https://localhost:7256/api/Class/' + idCookie + '/infor'

var className = document.querySelector('#className')
var shift = document.querySelector('#shift')
var scheduleDay = document.querySelector('#scheduleDay')
var course = document.querySelector('#course')

fetch(apiStudent)
    .then(function (reponse) {
        return reponse.json();
    })
    .then(function (student) {
        studentFullName.value = student.name
        if (student.gender == 1) {
            studentGender.value = "Nam"
        } else {
            studentGender.value = "Nữ"
        }
        studentPhone.value = student.mobile
        studentDateOfBirth.value = student.dob
    })

fetch(apiStudentClass)
    .then(function (reponse) {
        return reponse.json();
    })
    .then(function(data){
        className.innerHTML = `: ${data.grade}${data.className}`
        if(data.scheduleDto.shift == 1){
            shift.innerHTML = ": 7h"
        }else if(data.scheduleDto.shift == 2){
            shift.innerHTML = ": 14h"
        }else if(data.scheduleDto.shift == 3){
            shift.innerHTML = ": 18h"
        }
        if(data.scheduleDto.dateType){
            scheduleDay.innerHTML = ": Thứ 2, Thứ 4, Thứ 6"
        } else {
            scheduleDay.innerHTML = ": Thứ 3, Thứ 5, Thứ 7"
        }
        if(data.scheduleDto.numOfSession == 72){
            course.innerHTML = ": Full lộ trình"
        } else {
            course.innerHTML = ": Cấp tốc"
        }
    })

