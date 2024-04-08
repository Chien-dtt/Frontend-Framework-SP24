let apiAccount = "http://localhost:3000/account";

const username = document.querySelector(".username");
const password = document.querySelector(".password");
const bntLogin = document.querySelector(".btn_signin");

// get user
const getUser = async () => {
  const response = await fetch(apiAccount);
  const data = await response.json();
  return data;
};

// login
bntLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value == "" || password.value == "") {
    alert("Please enter your username and password");
  } else {
    getUser().then((data) => {
      const user = data.find(
        (user) =>
          user.username == username.value && user.password == password.value
      );
      if (user) {
        alert("Login success");
        window.location.href = "index.html";
      } else {
        alert("Login failed");
      }
    });
  }
});
