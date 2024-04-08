let apiAccount = "http://localhost:3000/account";

const name_signup = document.querySelector(".name_signup");
const username_signup = document.querySelector(".username_signup");
const password_signup = document.querySelector(".password_signup");
const btnSignup = document.querySelector(".btn_signup");
// signup
btnSignup.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    name_signup.value == "" ||
    username_signup.value == "" ||
    password_signup.value == ""
  ) {
    alert("Please enter your username and password");
  } else {
    const account = {
      name: name_signup.value,
      username: username_signup.value,
      password: password_signup.value,
    };
    fetch(apiAccount, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(account),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    if (account) {
      alert("Sign Up Success");
      window.location.href = "signin.html";
    }
  }
});
