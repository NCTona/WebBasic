var apiServer = 'http://localhost:3000/Student'

fetch(apiServer)
    .then(function (reponse) {
        return reponse.json();
    })
    .then(function (student) {
        console.log(student);
        return student;
    })
    .then(function (s) {

         
        var htmls = s.map(function (tb) {
            return  `<tr>
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
