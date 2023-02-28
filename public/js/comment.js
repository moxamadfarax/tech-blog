const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const blogId = event.target.dataset.blogId;

  const commentText = document.getElementById("body").value;

  try {
    const response = await fetch(`/api/comments/new/${blogId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: commentText }),
    });

    if (response.ok) {
      window.location.reload();
    } else {
      console.error("Error creating comment:", response.statusText);
    }
  } catch (error) {
    console.error("Error creating comment:", error);
  }
});
