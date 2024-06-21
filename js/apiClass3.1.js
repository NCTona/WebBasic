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
    .then(function () {
        var src1 = document.querySelector("#scr-1")
        var src2 = document.querySelector("#scr-2")
        var src3 = document.querySelector("#scr-3")
        var src4 = document.querySelector("#scr-4")
        var src5 = document.querySelector("#scr-5")
        var src6 = document.querySelector("#scr-6")
        src1.setAttribute("src", "vendor/jquery/jquery.min.js")
        src2.setAttribute("src", "js/demo/datatables-demo.js")
        src3.setAttribute("src", "vendor/jquery-easing/jquery.easing.min.js")
        src4.setAttribute("src", "js/sb-admin-2.min.js")
        src5.setAttribute("src", "vendor/datatables/jquery.dataTables.min.js")
        src6.setAttribute("src", "vendor/bootstrap/js/bootstrap.bundle.min.js")
    })

    .catch(function (err) {
        var src1 = document.querySelector("#scr-1")
        var src2 = document.querySelector("#scr-2")
        var src3 = document.querySelector("#scr-3")
        var src4 = document.querySelector("#scr-4")
        var src5 = document.querySelector("#scr-5")
        var src6 = document.querySelector("#scr-6")
        src1.setAttribute("src", "vendor/jquery/jquery.min.js")
        src2.setAttribute("src", "js/demo/datatables-demo.js")
        src3.setAttribute("src", "vendor/jquery-easing/jquery.easing.min.js")
        src4.setAttribute("src", "js/sb-admin-2.min.js")
        src5.setAttribute("src", "vendor/datatables/jquery.dataTables.min.js")
        src6.setAttribute("src", "vendor/bootstrap/js/bootstrap.bundle.min.js")
    })

    .finally(function () {
        var src7 = document.querySelector("#scr-7")
        src7.setAttribute("src", "vendor/datatables/dataTables.bootstrap4.min.js")
    })


