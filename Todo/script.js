document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  // const InputBox = document.getElementById("input-box");
  // const ListContainer = document.getElementById("list-container");

  loginForm.addEventListener("submit", function (e) {
    // e.preventDefault();

    const username = document.getElementById("fname");
    const password = document.getElementById("pass");
    const email = document.getElementById("email");
    const confirmpass = document.getElementById("cpass");

    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmpasswordError = document.getElementById(
      "confirmpasswordError"
    );

    const validRegx =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passkey = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    usernameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    confirmpasswordError.innerHTML = "";

    let isValid = true;

    // function validation(){

    if (username.value.trim() === "") {
      usernameError.innerHTML = "Enter valid name";
      isValid = false;
    }

    if (!email.value.match(validRegx) || email.value.trim() === "") {
      emailError.innerHTML = "Enter valid email";
      isValid = false;
    }

    if (!password.value.match(passkey) || password.value.trim() === "") {
      passwordError.innerHTML =
        "Password must contain atleast 8 characters including 1 uppercase 1 symbol & numbers";
      isValid = false;
    }

    if (
      password.value !== confirmpass.value ||
      confirmpass.value.trim() === ""
    ) {
      confirmpasswordError.innerHTML = "Password not matching";
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
      this.reset();
      window.location.href = "home.html";
      // return validation();
    }
    // }
    e.preventDefault();
  });
});

const InputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");

function addTask() {
  if (InputBox.value === "") {
    alert("You have to write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = InputBox.value;
    ListContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  InputBox.value = "";
  saveData();
}

ListContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", ListContainer.innerHTML);
}

function showData() {
  ListContainer.innerHTML = localStorage.getItem("data");
}
showData();
