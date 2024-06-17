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
        function src1() {
            var src1 = document.querySelector("#scr-1")
            src1.setAttribute("src", "vendor/jquery/jquery.min.js")
        }
        src1();
        function src2() {
            var src2 = document.querySelector("#scr-2")
            src2.setAttribute("src", "js/demo/datatables-demo.js")
        }
        src2();
        function src3() {
            var src3 = document.querySelector("#scr-3")
            src3.setAttribute("src", "vendor/jquery-easing/jquery.easing.min.js")
        }
        src3();
        function src4() {
            var src4 = document.querySelector("#scr-4")
            src4.setAttribute("src", "js/sb-admin-2.min.js")
        }
        src4();
        function src5() {
            var src5 = document.querySelector("#scr-5")
            src5.setAttribute("src", "vendor/datatables/jquery.dataTables.min.js")
        }
        src5();
        function src6() {
            var src6 = document.querySelector("#scr-6")
            src6.setAttribute("src", "vendor/bootstrap/js/bootstrap.bundle.min.js")
            
        }
        src6();
        function src7() {
            var src7 = document.querySelector("#scr-7")
            src7.setAttribute("src", "vendor/datatables/dataTables.bootstrap4.min.js")
        }
        src7();
    })


    .catch(function (err) {
        alert(err);
    })

