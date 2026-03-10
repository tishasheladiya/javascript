const params = new URLSearchParams(window.location.search);
const userId = params.get("id");

const usernameEl = document.querySelector("#p-username");
const fullnameEl = document.querySelector("#p-fullname");
const avatarEl = document.querySelector("#p-avatar");
const gridContainer = document.querySelector("#profileGrid");
const postCountEl = document.querySelector("#p-postCount");

async function fetchIGProfile() {
    if (!userId) return;

    try {
        // 1. Fetch User Data
        const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await userRes.json();

        usernameEl.innerText = user.username.toLowerCase();
        fullnameEl.innerText = user.name;
        avatarEl.innerText = user.name[0];
        document.title = `${user.name} (@${user.username.toLowerCase()}) • Instagram photos and videos`;

        // 2. Fetch Photos (Representing Posts in the Grid)
        const photoRes = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${userId}`);
        const photos = await photoRes.json();
        const displayPhotos = photos.slice(0, 12); // Grid looks best with 3xN

        postCountEl.innerText = photos.length;

        gridContainer.innerHTML = displayPhotos.map(photo => `
            <div class="grid-photo-wrapper">
                <img src="https://picsum.photos/seed/${photo.id}/500" alt="Post">
                <div class="grid-overlay">
                    <span><i class="bi bi-heart-fill"></i> ${Math.floor(Math.random() * 200)}</span>
                    <span><i class="bi bi-chat-fill"></i> ${Math.floor(Math.random() * 50)}</span>
                </div>
            </div>
        `).join('');

    } catch (err) {
        console.error("Profile load error:", err);
        gridContainer.innerHTML = `<p class="text-center col-12 py-5">Failed to load profile posts.</p>`;
    }
}

// Initial Load
if (userId) {
    fetchIGProfile();
} else {
    location.href = "index.html";
}
