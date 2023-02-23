document.querySelectorAll(".deleteBtn").forEach((button) => {
  button.addEventListener("click", async (event) => {
    try {
      const blogId = event.target.dataset.blog_id;
      const response = await fetch(`/api/blogs/${blogId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        event.target.closest(".card").remove();
      } else {
        console.log(blogId);
        throw new Error("Failed to delete book");
      }
    } catch (err) {
      console.error(err);
    }
  });
});
