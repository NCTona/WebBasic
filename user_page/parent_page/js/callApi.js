var parentFullName = document.querySelector('#parentFullName')
var parentGender = document.querySelector('#parentGender')
var parentPhone = document.querySelector('#parentPhone')
var parentDateOfBirth = document.querySelector('#parentDateOfBirth')

var apiParent = 'https://localhost:7256/api/User/role/' + idCookie + '?role=3'

fetch(apiParent)
    .then(function (reponse) {
        return reponse.json();
    })
    .then(function (parent) {
        parentFullName.value = parent.name
        if (parent.gender == 1) {
            parentGender.value = "Nam"
        } else {
            parentGender.value = "Nữ"
        }
        parentPhone.value = parent.mobile
        parentDateOfBirth.value = parent.dob
    })

var select_child = document.querySelector('#select_child')

var apiChild = 'https://localhost:7256/api/StudentParent/parent/' + idCookie

fetch(apiChild)
    .then(function (reponse) {
        return reponse.json()
    })
    .then(function (data) {
        var html_child = `
                        
        `
        data.forEach(child => {
            html_child += `
                <option value="${child.id}">${child.name}</option>
            `
        });
        select_child.innerHTML = html_child
        return data
    })
    
var apiPaidInfo = 'https://localhost:7256/api/StudentParent/payment/' + idCookie

var must_pay = document.querySelector('#must_pay')
var paid = document.querySelector('#paid')
var debt = document.querySelector('#debt')
var balance = document.querySelector('#balance')

renderInfoTuition()

function renderInfoTuition () {
    fetch(apiPaidInfo)
    .then(function (reponse) {
        return reponse.json()
    })
    .then(function(data){
        console.log(data)
        console.log(select_child.value)
        data.forEach(child => {
            if(child.studentId == select_child.value){
                must_pay.innerHTML = child.total
                paid.innerHTML = child.paid
                if(child.paid <= child.total){
                    debt.innerHTML = child.total - child.paid
                    balance.innerHTML = 0
                } else {
                    debt.innerHTML = 0
                    balance.innerHTML = child.paid - child.total
                }
            }
        });
    })
}

select_child.onchange = function () {
    renderInfoTuition()
}

