document.querySelectorAll(".commentBtn").forEach((button) => {
  button.addEventListener("click", () => {
    const blogId = button.dataset.blogId;
    console.log(blogId);
    window.location.href = `/addComment/${blogId}`;
  });
});
