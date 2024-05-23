const form = document.getElementById('registrationForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission
  const isValid = validateForm();
  if (!isValid) {
    // Display validation errors and prevent further code execution
    return;
  }

  // Form validation successful, submit the form
  form.submit(); // Submit the form to the server
});

function validateForm() {
  let isValid = true;
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  // const otherNamesInput = document.getElementById("otherNames");
  const emailInput = document.getElementById("email");
  const phoneNumberInput = document.getElementById("phoneNumber");
  const genderInput = document.getElementById("gender");

  const firstNameError = document.getElementById("firstNameError");
  const lastNameError = document.getElementById("lastNameError");
  // const otherNamesError = document.getElementById("otherNamesError");
  const emailError = document.getElementById("emailError");
  const phoneNumberError = document.getElementById("phoneNumberError");
  const genderError = document.getElementById("genderError");

  // Reset errors
  firstNameError.textContent = "";
  lastNameError.textContent = "";
  // otherNamesError.textContent = "";
  emailError.textContent = "";
  phoneNumberError.textContent = "";
  genderError.textContent = "";

  // Validate first name
  if (firstNameInput.value.trim().length < 1) {
    firstNameError.textContent = "First name is required and cannot be empty.";
    isValid = false;
  } else if (!/^[a-zA-Z]+$/.test(firstNameInput.value.trim())) {
    firstNameError.textContent = "First name cannot contain numbers.";
    isValid = false;
  }

  // Validate last name
  if (lastNameInput.value.trim().length < 1) {
    lastNameError.textContent = "Last name is required and cannot be empty.";
    isValid = false;
  } else if (!/^[a-zA-Z]+$/.test(lastNameInput.value.trim())) {
    lastNameError.textContent = "Last name cannot contain numbers.";
    isValid = false;
  }

  // Validate other names (optional but check for numbers)
  // if (otherNamesInput.value.trim() !== "" && !/^[a-zA-Z]+$/.test(otherNamesInput.value.trim())) {
  //   otherNamesError.textContent = "Other names cannot contain numbers.";
  //   isValid = false;
  // }

  // Validate email
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email address is required.";
    isValid = false;
  } else if (!/^\w+@[a-zA-Z_]+\.\w+$/.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email address (format: name@domain.com).";
    isValid = false;
  }

  // Validate phone number (adjust length requirement as needed)
  if (phoneNumberInput.value.trim() === "") {
    phoneNumberError.textContent = "Phone number is required.";
    isValid = false;
  } else if (phoneNumberInput.value.trim().length !== 10) { 
    phoneNumberError.textContent = "Phone number must be 10 digits.";
    isValid = false;
  }

  // Validate gender
  if (genderInput.value === "") {
    genderError.textContent = "Gender is required.";
    isValid = false;
  }

  return isValid;
}