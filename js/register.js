document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  const username = document.getElementById("username").value;
  const usernameError = document.getElementById("username-error");
  if (username === "") {
    usernameError.textContent = "Username is required";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }

  const date = document.getElementById("date").value;
  const dateError = document.getElementById("date-error");
  if (date === "") {
    dateError.textContent = "Date of Birth is required";
    isValid = false;
  } else if (!isValidAge(date)) {
    dateError.textContent = "You must be at least 5 years old";
    isValid = false;
  } else {
    dateError.textContent = "";
  }

  const phoneNumber = document.getElementById("phonenumber").value;
  const phoneNumberError = document.getElementById("phonenumber-error");
  if (phoneNumber === "") {
    phoneNumberError.textContent = "Phone number is required";
    isValid = false;
  } else if (!validatePhoneNumber(phoneNumber)) {
    phoneNumberError.textContent = "Invalid phone number format";
    isValid = false;
  } else {
    phoneNumberError.textContent = "";
  }

  const email = document.getElementById("email").value;
  const emailError = document.getElementById("email-error");
  if (email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!validateEmail(email)) {
    emailError.textContent = "Invalid email format";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  const password = document.getElementById("password").value;
  const passwordError = document.getElementById("password-error");
  if (password === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  const confirmPassword = document.getElementById("confirmpassword").value;
  const confirmPasswordError = document.getElementById("confirmpassword-error");
  if (confirmPassword === "") {
    confirmPasswordError.textContent = "Confirm Password is required";
    isValid = false;
  } else if (confirmPassword !== password) {
    confirmPasswordError.textContent = "Passwords do not match";
    isValid = false;
  } else {
    confirmPasswordError.textContent = "";
  }

  const agree = document.getElementById("agree").checked;
  const agreeError = document.getElementById("agree-error");
  if (!agree) {
    agreeError.textContent = "You must agree to the terms and conditions";
    isValid = false;
  } else {
    agreeError.textContent = "";
  }

  if (isValid) {
    alert("Form submitted successfully!");
    window.location.href = "home.html";
  }
});

function isValidAge(dateOfBirth) {
  const dob = new Date(dateOfBirth);
  const today = new Date();
  const age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  return age >= 5;
}

function validateEmail(email) {
  // Basic email validation without regex
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
    if (isNaN(phoneNumber[i]) || phoneNumber[i] === " ") {
      return false;
    }
  }
  return true;
}
