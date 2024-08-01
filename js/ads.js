var getClassName = document.querySelector('#getClassName')
var startTime = document.querySelector('#startTime')
var getCourse = document.querySelector('#getCourse')
var numberOfSession = document.querySelector('#numberOfSession')
var scheduleDay = document.querySelector('#scheduleDay')

var apiAds = 'https://localhost:7256/api/Class?pageIndex=1&pageSize=5&sortBy=Id&SortDesc=true'

fetch(apiAds)
    .then(function (reponse) {
        return reponse.json()
    })
    .then(function (data) {
        console.log(data[0].id)
        return { "id": data[0].id, "name": data[0].className, "grade": data[0].grade }
    })
    .then(function (cls) {
        var apiSchedule = 'https://localhost:7256/api/CLass/' + cls.id + '/schedule'
        getClassName.innerHTML = `Lớp:  ${cls.grade}${cls.name}`
        return apiSchedule
    })
    .then(function (api) {
        console.log(api)
        fetch(api)
            .then(function (reponse) {
                return reponse.json()
            })
            .then(function (schedule) {
                console.log(schedule)
                console.log(schedule.shift)
                if (schedule.shift == 1) {
                    getCourse.innerHTML = `Ca: 7h`
                } else if (schedule.shift == 2) {
                    getCourse.innerHTML = `Ca: 14h`
                } else if (schedule.shift == 3) {
                    getCourse.innerHTML = `Ca: 18h`
                }
                numberOfSession.innerHTML = `Số lượng buổi học: ${schedule.numOfSession}`
                if (schedule.dateType) {
                    scheduleDay.innerHTML = `Lịch học: Thứ 2; Thứ 4; Thứ 6`
                } else {
                    scheduleDay.innerHTML = `Lịch học: Thứ 3; Thứ 5; Thứ 7`
                }

                var [year, month, day] = schedule.startTime.split('T')[0].split('-');

                var startDayTime = `${day}-${month}-${year}`;

                startTime.innerHTML = `Bắt đầu khóa học: ${startDayTime}`
            })
    })