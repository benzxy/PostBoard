document.addEventListener('DOMContentLoaded', loadPosts);

const postForm = document.getElementById('postForm');
const postName = document.getElementById('postName');
const postContent = document.getElementById('postContent');
const postsDiv = document.getElementById('posts');

// Load posts from local storage
function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const now = Date.now();
    postsDiv.innerHTML = '';

    posts.forEach(post => {
        // Check if the post is still valid (within 72 hours)
        if (now < post.timestamp + 72 * 60 * 60 * 1000) {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            const postTime = new Date(post.timestamp).toLocaleString(); // Format the timestamp
            postElement.innerHTML = `<strong>${post.name}</strong> <span style="font-size: 0.8em; color: #ccc;">(${postTime})</span><br>${post.content}`;
            postsDiv.appendChild(postElement);
        }
    });
}

// Add a new post
postForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newPost = {
        name: postName.value,
        content: postContent.value,
        timestamp: Date.now()
    };

    // Get existing posts from local storage
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(newPost);

    // Save back to local storage
    localStorage.setItem('posts', JSON.stringify(posts));

    // Clear the form fields
    postName.value = '';
    postContent.value = '';

    // Reload posts
    loadPosts();
});
