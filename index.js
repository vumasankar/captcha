let searchid = document.getElementById("searchid")
let verify = document.getElementById("verify")

verify.addEventListener("click", function () {
    let enteredvalue = document.getElementById("inputbox").value
    if (enteredvalue == searchid.textContent) {
        alert("CAPTCHA verifed successfully")
    }
    else {
        alert("CAPTCHA verification failed. Please try again")
    }
})