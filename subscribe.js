var names = document.getElementById('name')
var email = document.getElementById('email')
var phone = document.getElementById('phone')
var agree = document.getElementById('cb')
var country = document.getElementById('country')


function checkNumber(phone) {
    var first = phone.charCodeAt(0)
    if (first != 48) return false
    for (var i = 0; i < phone.length; i++) {
        var value = phone.charCodeAt(i)
        if (value < 48 || value > 57) {
            return false
        }
    }

    return true
}

function checkInput() {
    if (names.value === '') {
        alert('Name cannot be empty!')
    } else if (!email.value.endsWith('@gmail.com')) {
        alert('Email must end with "@gmail.com!"')
    }else if(country.value==="Choose country" || country.value===""){
        alert('Please select a country!')
    } else if (!checkNumber(phone.value) || phone.value.length > 13 || phone.value.length < 1) {
        alert('Phone number must start with 0, only contain digits, and the length must be under 13!')
    } else if (!agree.checked) {
        alert('Please check the agreement box to continue!')
    } else {
        confirm('You have successfully submitted your registration!')
        window.location.replace("Home.html")
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const selectDrop = document.getElementById("country")
    fetch('https://restcountries.com/v3.1/all').then(res => {
        return res.json();
    }).then(data => {
        let output = ""
        let list = []
        data.forEach(country => {
            console.log(country.name.common)
            list.push(country.name.common)
        })
        list = list.sort()
        list.unshift("<option disabled selected hidden>Choose country</option>")
        for(let i=0; i<list.length; i++){
            output += `<option>${list[i]}</option>`
        }
        selectDrop.innerHTML = output;
    }).catch(err => {
        console.log(err)
    })
})
