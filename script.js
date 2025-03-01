function submitPost() {
  let name = document.getElementById("name").value || "Anonymous";
  let content = document.getElementById("postContent").value;

  if (content.trim() === "") return;

  let postContainer = document.getElementById("posts");

  let post = document.createElement("div");
  post.classList.add("post");

  post.innerHTML = `<strong>${name}:</strong> ${content}`;

  postContainer.prepend(post);

  document.getElementById("postContent").value = ""; // Clear textarea
}
