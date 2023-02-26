document.querySelectorAll(".cardBtn").forEach((button) => {
  button.addEventListener("click", () => {
    const blogId = button.dataset.blogId;
    window.location.href = `/blogInfo/${blogId}`;
  });
});
