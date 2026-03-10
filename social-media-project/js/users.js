const feedContainer = document.querySelector("#feed");
const storiesContainer = document.querySelector("#stories");
const suggestedContainer = document.querySelector("#suggestedFriends");

// Persistent State Helpers
const getState = (key) => JSON.parse(localStorage.getItem(key)) || [];
const toggleState = (key, id) => {
    let data = getState(key);
    const index = data.indexOf(id);
    if (index > -1) data.splice(index, 1);
    else data.push(id);
    localStorage.setItem(key, JSON.stringify(data));
    return data;
};

async function fetchInstagramFeed() {
    try {
        const userRes = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await userRes.json();

        // 1. Stories
        storiesContainer.innerHTML = users.map(user => `
            <a href="profile.html?id=${user.id}" class="story-item text-decoration-none">
                <div class="story-ring">
                    <div class="story-avatar">${user.name[0]}</div>
                </div>
                <div class="text-truncate text-center w-100" style="font-size: 11px; color: #262626;">
                    ${user.username.toLowerCase()}
                </div>
            </a>
        `).join('');

        // 2. Suggested
        const followed = getState('followed_users');
        suggestedContainer.innerHTML = users.slice(0, 5).map(user => {
            const isFollowing = followed.includes(user.id.toString());
            return `
                <div class="d-flex align-items-center mb-3">
                    <div class="post-avatar-sm">${user.name[0]}</div>
                    <div class="ms-2">
                        <div class="fw-bold" style="font-size: 13px;">${user.username.toLowerCase()}</div>
                        <div class="text-ig-secondary" style="font-size: 12px;">Suggested for you</div>
                    </div>
                    <button class="ms-auto btn btn-link text-decoration-none p-0 followBtn ${isFollowing ? 'text-dark fw-bold' : 'text-ig-link'}" 
                            data-id="${user.id}" style="font-size: 12px;">
                        ${isFollowing ? 'Following' : 'Follow'}
                    </button>
                </div>
            `;
        }).join('');

        // 3. Feed
        const postRes = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await postRes.json();
        const shuffledPosts = posts.sort(() => 0.5 - Math.random()).slice(0, 15);

        const liked = getState('liked_posts');
        const bookmarked = getState('bookmarked_posts');

        feedContainer.innerHTML = shuffledPosts.map(post => {
            const user = users.find(u => u.id === post.userId) || users[0];
            const isLiked = liked.includes(post.id.toString());
            const isBookmarked = bookmarked.includes(post.id.toString());
            const randomLikes = Math.floor(Math.random() * 500) + 10;

            return `
                <div class="ig-post fade-in">
                    <div class="post-header">
                        <a href="profile.html?id=${user.id}" class="text-decoration-none d-flex align-items-center">
                            <div class="post-avatar-sm">${user.name[0]}</div>
                            <span class="fw-bold text-dark" style="font-size: 13px;">${user.username.toLowerCase()}</span>
                        </a>
                        <i class="bi bi-three-dots ms-auto cursor-pointer"></i>
                    </div>
                    
                    <div class="post-image-container">
                        <img src="https://picsum.photos/seed/${post.id}/600" class="w-100 h-100 object-fit-cover" alt="Post">
                    </div>

                    <div class="post-actions">
                        <div>
                            <i class="bi ${isLiked ? 'bi-heart-fill text-danger' : 'bi-heart'} me-3 likeBtn" data-id="${post.id}"></i>
                            <i class="bi bi-chat me-3 commentBtn" data-id="${post.id}"></i>
                            <i class="bi bi-send sendBtn"></i>
                        </div>
                        <i class="bi ${isBookmarked ? 'bi-bookmark-fill' : 'bi-bookmark'} bookmarkBtn" data-id="${post.id}"></i>
                    </div>

                    <div class="post-details">
                        <div class="fw-bold mb-1"><span class="like-count">${isLiked ? randomLikes + 1 : randomLikes}</span> likes</div>
                        <div>
                            <span class="fw-bold me-2">${user.username.toLowerCase()}</span>
                            <span>${post.title}</span>
                        </div>
                        <div class="text-ig-secondary mt-2 cursor-pointer viewComments" data-id="${post.id}" style="font-size: 13px;">
                            View all comments
                        </div>
                        <div id="comments-${post.id}" class="mt-3" style="display: none; border-top: 1px solid #efefef; padding-top: 12px;">
                            <div class="comments-list"></div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

    } catch (err) {
        console.error("Feed loading error:", err);
        feedContainer.innerHTML = `<p class="text-center py-5">Failed to load feed.</p>`;
    }
}

// Global Interaction Listeners
document.addEventListener("click", async (e) => {
    // 1. Interaction: Like
    const likeBtn = e.target.closest(".likeBtn");
    if (likeBtn) {
        const id = likeBtn.dataset.id;
        toggleState('liked_posts', id);
        likeBtn.classList.toggle("bi-heart");
        likeBtn.classList.toggle("bi-heart-fill");
        likeBtn.classList.toggle("text-danger");

        // Animated pulse
        likeBtn.style.transform = "scale(1.3)";
        setTimeout(() => likeBtn.style.transform = "scale(1)", 200);

        // Update count locally
        const countSpan = likeBtn.closest(".ig-post").querySelector(".like-count");
        let count = parseInt(countSpan.innerText);
        countSpan.innerText = likeBtn.classList.contains("bi-heart-fill") ? count + 1 : count - 1;
    }

    // 2. Interaction: Bookmark
    const bookmarkBtn = e.target.closest(".bookmarkBtn");
    if (bookmarkBtn) {
        const id = bookmarkBtn.dataset.id;
        toggleState('bookmarked_posts', id);
        bookmarkBtn.classList.toggle("bi-bookmark");
        bookmarkBtn.classList.toggle("bi-bookmark-fill");
    }

    // 3. Interaction: Follow
    const followBtn = e.target.closest(".followBtn");
    if (followBtn) {
        const id = followBtn.dataset.id;
        const followed = toggleState('followed_users', id);
        const isFollowing = followed.includes(id);
        followBtn.innerText = isFollowing ? 'Following' : 'Follow';
        followBtn.classList.toggle("text-ig-link", !isFollowing);
        followBtn.classList.toggle("text-dark", isFollowing);
        followBtn.classList.toggle("fw-bold", isFollowing);
    }

    // 4. Interaction: Comments
    const commentBtn = e.target.closest(".commentBtn, .viewComments");
    if (commentBtn) {
        const id = commentBtn.dataset.id;
        const commentBox = document.querySelector(`#comments-${id}`);
        const list = commentBox.querySelector(".comments-list");

        if (commentBox.style.display === "block") {
            commentBox.style.display = "none";
            return;
        }

        commentBox.style.display = "block";
        if (list.children.length > 0) return;

        list.innerHTML = `<div class="text-center py-2"><div class="spinner-border spinner-border-sm text-secondary"></div></div>`;

        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
            const data = await res.json();
            list.innerHTML = data.slice(0, 3).map(c => `
                <div class="mb-2" style="font-size: 13px;">
                    <span class="fw-bold me-2">${c.email.split('@')[0].toLowerCase()}</span>
                    <span>${c.body.substring(0, 80)}</span>
                </div>
            `).join('');
        } catch (err) {
            list.innerHTML = `<small class="text-danger">Failed to load comments.</small>`;
        }
    }
});

// Initial Load
fetchInstagramFeed();
