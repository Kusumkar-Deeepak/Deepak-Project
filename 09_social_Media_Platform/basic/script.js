document.getElementById('postButton').addEventListener('click', addPost);

function addPost() {
    const postInput = document.getElementById('postInput');
    const postText = postInput.value.trim();

    if (postText !== '') {
        const postsContainer = document.getElementById('postsContainer');
        const postDiv = document.createElement('div');
        postDiv.className = 'post';

        const postContent = document.createElement('p');
        postContent.textContent = postText;

        postDiv.appendChild(postContent);
        postsContainer.prepend(postDiv); // Add new post at the top
        postInput.value = ''; // Clear the input field
    }
}
