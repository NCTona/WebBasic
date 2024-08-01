var teacherFullName = document.querySelector('#teacherFullName')
var teacherGender = document.querySelector('#teacherGender')
var teacherPhone = document.querySelector('#teacherPhone')
var teacherDateOfBirth = document.querySelector('#teacherDateOfBirth')

var apiteacher = 'https://localhost:7256/api/User/role/' + idCookie + '?role=1'

var className = document.querySelector('#className')
var shift = document.querySelector('#shift')
var scheduleDay = document.querySelector('#scheduleDay')
var course = document.querySelector('#course')

var nowDate = document.querySelector('#date')
var selectClass = document.querySelector('#select_class')
var dataTable = document.querySelector('#tbody')

var confirm_attendance = document.querySelector('#confirm_attendance')

var today = new Date();

// Lấy năm hiện tại
var year = today.getFullYear();

// Lấy tháng hiện tại (cần cộng thêm 1 vì getMonth() trả về giá trị từ 0 đến 11)
var month = today.getMonth() + 1;

// Lấy ngày hiện tại
var day = today.getDate();

// Đảm bảo tháng và ngày luôn có 2 chữ số
month = month < 10 ? '0' + month : month;
day = day < 10 ? '0' + day : day;

// Kết hợp năm, tháng và ngày thành định dạng YYYY-MM-DD
var currentDate = `${year}-${month}-${day}`;

fetch(apiteacher)
    .then(function (reponse) {
        return reponse.json();
    })
    .then(function (teacher) {
        teacherFullName.value = teacher.name
        if (teacher.gender == 1) {
            teacherGender.value = "Nam"
        } else {
            teacherGender.value = "Nữ"
        }
        teacherPhone.value = teacher.mobile
        teacherDateOfBirth.value = teacher.dob
    })

var apiFindClass = 'https://localhost:7256/api/user/teacher/' + idCookie + '/classes'

function renderTable() {
    var apiClass = 'https://localhost:7256/api/UserClass/class/' + selectClass.value
    fetch(apiClass)
        .then(function (reponse) {
            return reponse.json()
        })
        .then(function (data) {
            var html_student = `
                        
                    `
            data.forEach(std => {
                html_student += `
                            <tr>
                                <td>${std.id}</td>
                                <td>${std.name}</td>
                                <td><input type="checkbox" id="student-${std.id}" value="${std.id}"></td>
                            </tr>
                    `
            });
            dataTable.innerHTML = html_student
            return data
        })
        .then(function (data) {
            confirm_attendance.onclick = function () {
                renderAttendance(data)
            }
        })
}

function renderAttendance(data) {
    var attendance = new Array()
    data.forEach(std => {
        var checkbox = document.querySelector(`#student-${std.id}`)
        if (checkbox.checked) {
            var newAttendance = {
                "IsPresent": true,
                "Date": currentDate,
                "UserId": std.id
            }
            attendance.push(newAttendance)
        } else {
            var newAttendance = {
                "IsPresent": false,
                "Date": currentDate,
                "UserId": std.id
            }
            attendance.push(newAttendance)
        }
    });
    var apiAttendance = "https://localhost:7256/api/StudentAttendance/class"
    fetch(apiAttendance, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(attendance),
    })
        .then(function (reponse) {
            reponse.json()
        })
        .then(function () {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Success",
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch(function () {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong",
            });
        })
}

fetch(apiFindClass)
    .then(function (reponse) {
        return reponse.json()
    })
    .then(function (data) {
        nowDate.value = currentDate
        var html_class
        data.forEach(cls => {
            html_class += `
                <option value="${cls.id}">${cls.className}</option>
            `
        });
        selectClass.innerHTML = html_class
        return data
    })
    .then(function () {
        renderTable()

        selectClass.onchange = function () {
            renderTable()
        }
    })

