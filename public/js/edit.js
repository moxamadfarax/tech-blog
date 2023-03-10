const form = document.querySelector(".blogForm");
const blogId = document.querySelector(".blogId").textContent;

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;

  try {
    const response = await fetch(`/api/blogs/updatePost/${blogId}`, {
      method: "PUT",
      body: JSON.stringify({ title, body }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      window.location.href = `/myPosts`;
    } else {
      console.log("Failed to update blog post");
    }
  } catch (err) {
    console.error(err);
  }
});
