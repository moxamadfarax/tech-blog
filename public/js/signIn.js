let submitBtn = document.getElementById("submitBtn");
let errMsg = document.getElementById("errMsg");

const signIn = async (event) => {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email && password) {
    const response = await fetch("/api/users/signIn", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const responseBody = await response.json();
    if (response.ok) {
      document.location.replace("/");
    } else {
      errMsg.style.display = "block";
      errMsg.textContent = responseBody.message;
    }
  }
};

submitBtn.addEventListener("click", signIn);
