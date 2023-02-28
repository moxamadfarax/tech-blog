document.querySelectorAll(".commentBtn").forEach((button) => {
  button.addEventListener("click", () => {
    const blogId = button.dataset.blogId;
    window.location.href = `/addComment/${blogId}`;
  });
});
