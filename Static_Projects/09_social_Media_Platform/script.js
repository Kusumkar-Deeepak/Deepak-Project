document.getElementById('postButton').addEventListener('click', addPost);

function addPost() {
    const postInput = document.getElementById('postInput');
    const postText = postInput.value.trim();

    if (postText !== '') {
        const postsContainer = document.getElementById('postsContainer');
        const postDiv = document.createElement('div');
        postDiv.className = 'post';

        // Add timestamp
        const timestamp = new Date().toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        const postHeader = document.createElement('div');
        postHeader.className = 'post-header';

        const postTime = document.createElement('span');
        postTime.className = 'timestamp';
        postTime.textContent = timestamp;

        postHeader.appendChild(postTime);
        postDiv.appendChild(postHeader);

        // Add post content
        const postContent = document.createElement('div');
        postContent.className = 'post-content';
        postContent.textContent = postText;

        postDiv.appendChild(postContent);

        // Add footer with like and delete buttons
        const postFooter = document.createElement('div');
        postFooter.className = 'post-footer';

        const likeButton = document.createElement('button');
        likeButton.innerHTML = 'Like <span class="like-count">(0)</span>';
        likeButton.addEventListener('click', () => toggleLike(likeButton));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => postDiv.remove());

        postFooter.appendChild(likeButton);
        postFooter.appendChild(deleteButton);
        postDiv.appendChild(postFooter);

        // Add new post at the top
        postsContainer.prepend(postDiv);
        postInput.value = ''; // Clear the input field
    }
}

function toggleLike(button) {
    const likeCountSpan = button.querySelector('.like-count');
    let count = parseInt(likeCountSpan.textContent.replace(/[()]/g, ''));
    count = button.classList.toggle('liked') ? count + 1 : count - 1;
    likeCountSpan.textContent = `(${count})`;
}
