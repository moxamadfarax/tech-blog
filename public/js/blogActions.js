document.querySelectorAll(".deleteBtn").forEach((button) => {
  button.addEventListener("click", async (event) => {
    try {
      const blogId = event.target
        .closest(".card")
        .querySelector(".blogId").textContent;
      if (!blogId) {
        console.log("Blog ID not found!");
        return;
      }
      const response = await fetch(`/api/blogs/${blogId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        event.target.closest(".card").remove();
        location.reload();
      } else {
        console.log("Failed to delete blog post!");
      }
    } catch (err) {
      console.error(err);
    }
  });
});

document.querySelectorAll(".editBtn").forEach((button) => {
  button.addEventListener("click", () => {
    const blogId = event.target
      .closest(".card")
      .querySelector(".blogId").textContent;
    console.log(blogId);
    window.location.href = `/editBlog/${blogId}`;
  });
});
