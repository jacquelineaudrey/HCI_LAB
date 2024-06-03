document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let validation = true;

  const firstname = document.getElementById("firstname").value;
  const firstnameError = document.getElementById("firstname-error");
  if (firstname === "") {
    firstnameError.textContent = "First name is required";
    validation = false;
  } else {
    firstnameError.textContent = "";
  }

  const surname = document.getElementById("surname").value;
  const surnameError = document.getElementById("surname-error");
  if (surname === "") {
    surnameError.textContent = "Surname is required";
    validation = false;
  } else {
    surnameError.textContent = "";
  }

  const username = document.getElementById("username").value;
  const usernameError = document.getElementById("username-error");
  if (username === "") {
    usernameError.textContent = "Username is required";
    validation = false;
  } else {
    usernameError.textContent = "";
  }

  const date = document.getElementById("date").value;
  const dateError = document.getElementById("date-error");
  if (date === "") {
    dateError.textContent = "Date of Birth is required";
    validation = false;
  } else if (!validateAge(date)) {
    dateError.textContent = "You must be at least 5 years old";
    validation = false;
  } else {
    dateError.textContent = "";
  }

  const phoneNumber = document.getElementById("phonenumber").value;
  const phoneNumberError = document.getElementById("phonenumber-error");
  if (phoneNumber === "") {
    phoneNumberError.textContent = "Phone number is required";
    validation = false;
  } else if (!validatePhoneNumber(phoneNumber)) {
    phoneNumberError.textContent = "Invalid phone number format";
    validation = false;
  } else {
    phoneNumberError.textContent = "";
  }

  const email = document.getElementById("email").value;
  const emailError = document.getElementById("email-error");
  if (email === "") {
    emailError.textContent = "Email is required";
    validation = false;
  } else if (!validateEmail(email)) {
    emailError.textContent = "Invalid email format";
    validation = false;
  } else {
    emailError.textContent = "";
  }

  const password = document.getElementById("password").value;
  const passwordError = document.getElementById("password-error");
  if (password === "") {
    passwordError.textContent = "Password is required";
    validation = false;
  } else if (!validatePassword(password)) {
    passwordError.textContent =
      "Password must contain at least one number and be at least 5 characters long";
    validation = false;
  } else {
    passwordError.textContent = "";
  }

  const confirmPassword = document.getElementById("confirmpassword").value;
  const confirmPasswordError = document.getElementById("confirmpassword-error");
  if (confirmPassword === "") {
    confirmPasswordError.textContent = "Confirm Password is required";
    validation = false;
  } else if (confirmPassword !== password) {
    confirmPasswordError.textContent = "Passwords do not match";
    validation = false;
  } else {
    confirmPasswordError.textContent = "";
  }

  const agree = document.getElementById("agree").checked;
  const agreeError = document.getElementById("agree-error");
  if (!agree) {
    agreeError.textContent = "You must agree to the terms and conditions";
    validation = false;
  } else {
    agreeError.textContent = "";
  }

  if (validation) {
    alert("Form submitted successfully!");
    window.location.href = "home.html";
  }
});

document.getElementById("form").addEventListener("reset", function (event) {
  if (confirm("Are you sure you want to reset the form?")) {
    document.getElementById("firstname-error").textContent =
      "First name is required";
    document.getElementById("surname-error").textContent =
      "Surname is required";
    document.getElementById("username-error").textContent =
      "Username is required";
    document.getElementById("date-error").textContent =
      "Date of Birth is required";
    document.getElementById("phonenumber-error").textContent =
      "Phone number is required";
    document.getElementById("email-error").textContent = "Email is required";
    document.getElementById("password-error").textContent =
      "Password is required";
    document.getElementById("confirmpassword-error").textContent =
      "Confirm Password is required";
    document.getElementById("agree-error").textContent =
      "You must agree to the terms and conditions";

    document.querySelectorAll(".show-password").forEach((button) => {
      const input = button.previousElementSibling;
      const eyeCloseImg = button.querySelector(".eye-close");
      const eyeOpenImg = button.querySelector(".eye-open");

      input.type = "password";
      eyeCloseImg.style.display = "inline";
      eyeOpenImg.style.display = "none";
    });

  } else {
    event.preventDefault();
  }
});

function validateAge(dateOfBirth) {
  const dob = new Date(dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  return age >= 5;
}

function validateEmail(email) {
  const atSymbolIndex = email.indexOf("@");
  const dotSymbolIndex = email.lastIndexOf(".");
  return (
    atSymbolIndex > 0 &&
    dotSymbolIndex > atSymbolIndex + 1 &&
    dotSymbolIndex < email.length - 1
  );
}

function validatePhoneNumber(phoneNumber) {
  if (phoneNumber.length < 10 || phoneNumber.length > 15) {
    return false;
  }
  for (let i = 0; i < phoneNumber.length; i++) {
    if (phoneNumber[i] < "0" || phoneNumber[i] > "9") {
      return false;
    }
  }
  return true;
}

function validatePassword(password) {
  let hasNumber = false;
  let validateLength = false;

  for (let i = 0; i < password.length; i++) {
    if (!isNaN(parseInt(password[i]))) {
      hasNumber = true;
      break;
    }
  }

  if (password.length >= 5) {
    validateLength = true;
  }

  if (hasNumber && validateLength) {
    return true;
  } else {
    return false;
  }
}

/* ===================================== SHOW PASSWORD =======================*/

document.querySelectorAll('.show-password').forEach(button => {
  const input = button.previousElementSibling;
  const eyeCloseImg = button.querySelector('.eye-close');
  const eyeOpenImg = button.querySelector('.eye-open');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.type === 'password') {
      input.type = 'text';
      eyeCloseImg.style.display = 'none';
      eyeOpenImg.style.display = 'inline';
    } else {
      input.type = 'password';
      eyeCloseImg.style.display = 'inline';
      eyeOpenImg.style.display = 'none';
    }
  });
});
