var date = new Date();

renderCalendar();

function renderCalendar() {

    date.setDate(1);

    var monthDays = document.querySelector(".days");

    var lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    var prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    var firstDayIndex = date.getDay();

    var lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    var nextDays = 7 - lastDayIndex - 1;

    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    document.querySelector(".date p").innerHTML = new Date().toDateString();

    let days = "";

    var test = "2024-07-12"

    for (let x = firstDayIndex; x > 0; x--) {
        if (date.getMonth() == 0) {
            days += `<div class="prev-date day">${prevLastDay - x + 1}<div id="${date.getFullYear()}-12-${prevLastDay - x + 1}" class="dot" ></div></div>`;
        }
        days += `<div class="prev-date day">${prevLastDay - x + 1}<div id="${date.getFullYear()}-${date.getMonth()}-${prevLastDay - x + 1}" class="dot" ></div></div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            days += `<div class="today day active-day">${i}<div id="${date.getFullYear()}-${date.getMonth() + 1}-${i}" class="dot"></div></div>`;
        } else {
            days += `<div class="day">${i}<div class="dot" id="${date.getFullYear()}-${date.getMonth() + 1}-${i}"></div></div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        if (date.getMonth() == 0) {
            days += `<div class="next-date day">${j}<div id="${date.getFullYear()}-1-${j}" class="dot" ></div></div>`;
        }
        days += `<div class="next-date day">${j}<div id="${date.getFullYear()}-${date.getMonth() + 2}-${j}" class="dot" ></div></div>`;
    }
    monthDays.innerHTML = days;

    renderSchedule()

    var btnDay = document.querySelectorAll(".day")
    var classAttendance = document.querySelector('#class_attendance')
    var status = document.querySelector('#status')

    btnDay.forEach(btn => {
        var dotDay = btn.querySelector('.dot')
        btn.onclick = function () {
            if(dotDay.getAttribute("style")){
                classAttendance.setAttribute("style", dotDay.getAttribute("style"))
                if(dotDay.getAttribute("style") == "background-color: #57ff57"){
                    status.innerHTML = "Status: Active"
                } else if(dotDay.getAttribute("style") == "background-color: #ff6250") {
                    status.innerHTML = "Status: Unactive"
                } else {
                    status.innerHTML = "Status"
                }
            } else {
                classAttendance.setAttribute("style", "")
            }
            for(var i = 0; i<btnDay.length-1; i++){
                btnDay[i].classList.remove('active-day')
            }
            btn.classList.add('active-day')
        }
    });

};

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});



function formatDate(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth() trả về giá trị từ 0 đến 11, nên cần cộng thêm 1
    const day = date.getDate();

    return `${year}-${month}-${day}`;
}

function formatDates(datesArray) {
    return datesArray.map(formatDate);
}


function renderSchedule() {
    var apiSchedule = 'https://localhost:7256/api/Schedule/' + idCookie + '/dates'

    fetch(apiSchedule)
        .then(function (reponse) {
            return reponse.json()
        })
        .then(function (data) {
            var formattedSchedule = formatDates(data.schedule)
            var attendanceSchedule = data.attendance
            console.log(attendanceSchedule)
            console.log(attendanceSchedule.length)
            formattedSchedule.forEach(day => {
                var selectedDay = document.getElementById(`${day}`)
                if (selectedDay) {
                    selectedDay.setAttribute("style", "background-color: #bbba7b")
                }

            });
            for (var i = 0; i < attendanceSchedule.length; i++) {
                var selectedDay = document.getElementById(`${formattedSchedule[i]}`)
                if (attendanceSchedule[i]) {
                    selectedDay.setAttribute("style", "background-color: #57ff57")
                } else {
                    selectedDay.setAttribute("style", "background-color: #ff6250")
                }
            }
        })

}