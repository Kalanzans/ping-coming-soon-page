/**Copyright 2019 GIOVANNI LARA

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */

/**
 * EMAIL VALIDATION: regular expression explain. 
 * Email has 4 parts:
 * ex: name@email.com or name@email.com.eu
 * 1. name lower/upper lower/upper and digits, bots and hyphen (max characters 64).
 * 2. domain name lower letters max characters 254
 * 3. top domain .dot between 2-8 characters
 * 4. optional top domain .dot between 2-8 charaters 
 */


let emailForm = document.getElementById('email-form'),
    msg = document.querySelector('.success'),
    timer;

function validateEmail(field) {
    const regex = /^([a-zA-Z0-9\.-]{1,64})+@([a-z]{1,254})+\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    if (field == "") {
        return false;
    } else if (regex.test(field)) {
        return true;
    } else {
        return false;
    }
}

function isValid(field) {
    if (field === "") return false;

    if (validateEmail(field.value)) {
        field.classList.add('valid');
        field.classList.remove('invalid');
        return true;
    } else {
        field.classList.add('invalid');
        field.classList.remove('valid');
        return false;
    }
}

emailForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let email = e.target.elements.email;
    if (isValid(email)) {
        msg.setAttribute("role", "alert");
        msg.textContent = "Successful! You're subscribe now!";
        msg.style.opacity = 1;
        timer = setTimeout(function () {
            msg.removeAttribute("role");
            msg.textContent = "";
            msg.style.opacity = 0;
        }, 5000);
        email.value = "";
    } else {
        email.focus();
    }
});

clearTimeout(timer);