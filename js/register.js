document.getElementById("form").addEventListener("submit", handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let confirmpassword = document.getElementById("confirmpassword").value
    let dob = document.getElementById("date").value
    let male = document.getElementById("male").checked
    let female = document.getElementById("female").checked
    let agree = document.getElementById("agree").checked

    // console.log(dob.value)
    // console.log("Submitted!")

    let error = document.getElementById("error")

    // all field must be filled
    if(username == "" || password == "" || confirmpassword == "" || email == "" 
    || dob == "" || agree == false || (male == false && female == false)){
        error.innerText = "All field must be filled"
    }

    // panjang
    else if(username.length <= 8){
        error.innerText = "Username length must be more than 8"
    }

    // validasi email
    else if(!email.endsWith("@gmail.com")){
        error.innerText = "Email must end width @gmail.com"
    }

    // cek pass sama conf pass
    else if(password != confirmpassword){
        error.innerText = "Passwod and confirm password must be the same"
    }

    else if(goodPassword(password) != ""){
        error.innerText = goodPassword(password)
    }

    else{
        error.innerText = "Good to GO!!"
    }
}

function goodPassword(password){
    let number = 0
    let character = 0
    for(let i = 0; i<password.length; i++){
        // cek apakah passwordnya punya huruf
        if(isNaN(password[i])){
            character = 1
        }
        // cek apakah passwordnya punya angka
        else if(!isNaN(password[i])){
            number = 1
        }
    }
    if(number == 0){
        return "Password must contain number"
    }
    else if(character == 0){
        return "Password must contain a character"
    }
    else{
        return ""
    }

}