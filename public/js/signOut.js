let signOutBtn = document.getElementById("signOutBtn");

const signOut = async () => {
  console.log("clicked");
  event.preventDefault();
  const response = await fetch("/api/users/signOut", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

signOutBtn.addEventListener("click", signOut);
