var btn_add = document.querySelector('#confirm_amount')
var input_amount = document.querySelector('#add_amount_input')

var btn_continue = document.querySelector('#continue_btn')
var bill_number = document.querySelector('#bill_number')

var total_amount = document.querySelector('#total_amount')
total_amount.value = 0

var reset_amount = document.querySelector('#reset_amount')

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

var paybills = new Array()

reset_amount.onclick = function () {
    total_amount.value = 0
    paybills = []
}

btn_add.onclick = function () {
    total_amount.value = parseInt(input_amount.value) + parseInt(total_amount.value)

    var paybill = {
        "StudentID": select_child.value,
        "Amount": parseInt(input_amount.value),
        "Date": currentDate
    }

    paybills.push(paybill)

    input_amount.value = ''

    console.log(paybills)

}

btn_continue.onclick = function () {
    bill_number.value = total_amount.value
}

