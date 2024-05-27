document.getElementById("form").addEventListener("submit", handleSubmit)
document.getElementById("reset-button").addEventListener("click", handleReset)

function handleSubmit(e) {
    e.preventDefault()
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let confirmpassword = document.getElementById("confirmpassword").value
    let dob = document.getElementById("date").value
    let male = document.getElementById("male").checked
    let female = document.getElementById("female").checked
    let agree = document.getElementById("agree").checked

    let error = document.getElementById("error")

    // Check if all fields are filled
    if (username == "" || password == "" || confirmpassword == "" || email == "" || dob == "" || agree == false || (male == false && female == false)) {
        error.innerText = "All fields must be filled"
        return
    }

    // Check username length
    if (username.length <= 8) {
        error.innerText = "Username length must be more than 8"
        return
    }

    // Check age (at least 5 years old)
    if (!isValidAge(dob, 5)) {
        error.innerText = "You must be at least 5 years old"
        return
    }

    // Check email format
    if (!email.endsWith("@gmail.com")) {
        error.innerText = "Email must end with @gmail.com"
        return
    }
    
    // Check password requirements
    let passwordError = goodPassword(password)
    if (passwordError != "") {
        error.innerText = passwordError
        return
    }

    // Check if passwords match
    if (password != confirmpassword) {
        error.innerText = "Password and confirm password must be the same"
        return
    }

    // If all validations pass, navigate to home page
    window.location.href = "home.html"
}

function goodPassword(password) {
    let number = 0
    let character = 0
    for (let i = 0; i < password.length; i++) {
        // Check if password has letters
        if (isNaN(password[i])) {
            character = 1
        }
        // Check if password has numbers
        else if (!isNaN(password[i])) {
            number = 1
        }
    }
    if (number == 0) {
        return "Password must contain a number"
    }
    if (character == 0) {
        return "Password must contain a character"
    }
    return ""
}

function handleReset() {
    document.getElementById("username").value = ""
    document.getElementById("email").value = ""
    document.getElementById("password").value = ""
    document.getElementById("confirmpassword").value = ""
    document.getElementById("date").value = ""
    document.getElementById("male").checked = false
    document.getElementById("female").checked = false
    document.getElementById("agree").checked = false
    document.getElementById("error").innerText = ""
}

function isValidAge(dob, minAge) {
    let birthDate = new Date(dob)
    let today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    let monthDifference = today.getMonth() - birthDate.getMonth()
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }
    return age >= minAge
}
