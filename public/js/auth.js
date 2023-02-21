let submitBtn = document.getElementById("submitBtn");
let errMsg = document.getElementById("errMsg");

const signUp = async (event) => {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (email && username && password) {
    const response = await fetch("/users", {
      method: "POST",
      body: JSON.stringify({ email, username, password }),
      headers: { "Content-Type": "application/json" },
    });
    const responseBody = await response.json();
    if (response.ok) {
    } else {
      errMsg.style.display = "block";
      errMsg.textContent = responseBody.message;
    }
  }
};

submitBtn.addEventListener("click", signUp);
