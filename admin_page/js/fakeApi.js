var select = document.querySelector('#select-class')
var apiStudent = 'http://localhost:3000/Class3.1'

fetch(apiStudent)
.then(function (reponse) {
    return reponse.json();
})
.then(function (student) {
    console.log(student);
    return student;
})
.then(function (s) {


    var htmls = s.map(function (tb) {
        return `<tr>
                    <td>${tb.id}</td>
                    <td>${tb.name}</td>
                    <td>${tb.class}</td>
                    <td>${tb.date}</td>
                    <td>${tb.age}</td>
                    <td>${tb.parent}</td>
                </tr>`
    })

    var html = htmls.join('');

    document.querySelector("#tbody").innerHTML = html;

})

select.onchange = function () {
    if (select.value == '1') {
        var apiStudent = 'http://localhost:3000/Class3.1'
    } else if (select.value == '2') {
        var apiStudent = 'http://localhost:3000/Class3.2'
    } else if (select.value == '3') {
        var apiStudent = 'http://localhost:3000/Class3.3'
    }

    fetch(apiStudent)
        .then(function (reponse) {
            return reponse.json();
        })
        .then(function (student) {
            console.log(student);
            return student;
        })
        .then(function (s) {


            var htmls = s.map(function (tb) {
                return `<tr>
                            <td>${tb.id}</td>
                            <td>${tb.name}</td>
                            <td>${tb.class}</td>
                            <td>${tb.date}</td>
                            <td>${tb.age}</td>
                            <td>${tb.parent}</td>
                        </tr>`
            })

            var html = htmls.join('');

            document.querySelector("#tbody").innerHTML = html;

        })


}

