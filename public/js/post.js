let submitBtn = document.getElementById("submitBtn");

const newPost = async (event) => {
  event.preventDefault();

  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  if (title && body) {
    const response = await fetch("/api/blogs/newPost", {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("cool");
      document.location.replace("/myPosts");
    } else {
      console.log("nah");
    }
  }
};

submitBtn.addEventListener("click", newPost);
