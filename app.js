const inputText = document.getElementById("email");
const btnSubmit = document.getElementById("btnSubmit");
const errorText = document.getElementById("error-text");

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btnSubmit.addEventListener("click", function () {
  if (inputText.value.match(validRegex)) {
    errorText.innerText = "Valid Email Address";
    errorText.style.color = "green";
    return true;
  } else {
    errorText.innerText = "Please enter a valid email address";
    errorText.style.color = "hsl(0, 100%, 63%)";
    return false;
  }
});
