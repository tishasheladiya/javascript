{
    // Wrap in a block to avoid global scope collision with posts.js
    // Extract userId from URL if not already available in this scope
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");

    const albumsContainer = document.querySelector("#albums");

    function showAlbumSkeletons() {
        if (!albumsContainer) return;
        albumsContainer.innerHTML = Array(4).fill(0).map(() => `
            <div class="col-6 mb-3">
                <div class="premium-card" style="padding: 1rem;">
                    <div class="skeleton mb-2" style="height: 18px; width: 80%;"></div>
                    <div class="skeleton" style="height: 32px; width: 100%; border-radius: 8px;"></div>
                </div>
            </div>
        `).join('');
    }

    async function fetchUserAlbums() {
        if (!userId || !albumsContainer) return;
        showAlbumSkeletons();

        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
            if (!res.ok) throw new Error("Albums fetch failed");
            const albums = await res.json();

            albumsContainer.innerHTML = albums.map((album, index) => `
                <div class="col-6 mb-3 fade-in" style="animation-delay: ${index * 0.05}s">
                    <div class="premium-card" style="padding: 1.25rem;">
                        <h6 class="fw-bold mb-3 text-truncate lh-base" title="${album.title}">${album.title}</h6>
                        <button class="btn btn-sm btn-outline-primary w-100 rounded-pill openAlbum" data-id="${album.id}">
                            <i class="bi bi-folder-fill me-2"></i> Open
                        </button>
                        <div id="photos-${album.id}" class="row g-2 mt-3" style="display: none; transition: all 0.3s ease;"></div>
                    </div>
                </div>
            `).join('');
        } catch (err) {
            albumsContainer.innerHTML = `<p class="col-12 text-center text-danger small py-4">Failed to load albums.</p>`;
        }
    }

    document.addEventListener("click", async function (e) {
        const btn = e.target.closest(".openAlbum");
        if (btn) {
            const albumId = btn.dataset.id;
            const photosBox = document.querySelector(`#photos-${albumId}`);

            // Toggle logic
            if (photosBox.style.display === "flex") {
                photosBox.style.display = "none";
                btn.innerHTML = `<i class="bi bi-folder-fill me-2"></i> Open`;
                return;
            }

            // Set to flex and update button state
            photosBox.style.display = "flex";
            btn.innerHTML = `<i class="bi bi-folder2-open me-2"></i> Close`;

            // If already loaded and NOT currently showing a spinner, don't re-fetch
            if (photosBox.children.length > 0 && !photosBox.querySelector(".spinner-border")) {
                return;
            }

            // Loading state
            photosBox.innerHTML = `
                <div class="col-12 text-center py-2">
                    <div class="spinner-border spinner-border-sm text-primary" role="status"></div>
                </div>
            `;

            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
                if (!res.ok) throw new Error("Photos fetch failed");
                const photos = await res.json();

                if (photos.length === 0) {
                    photosBox.innerHTML = `<p class="col-12 text-center text-muted small">No photos available.</p>`;
                    return;
                }

                // Render photos using Picsum Photos for reliable, beautiful content
                photosBox.innerHTML = photos.slice(0, 6).map(photo => `
                    <div class="col-4">
                        <div class="img-wrapper position-relative" style="aspect-ratio: 1/1;">
                            <img src="https://picsum.photos/seed/${photo.id}/150" 
                                 class="img-fluid rounded-2 shadow-sm hover-zoom w-100 h-100 object-fit-cover" 
                                 alt="Photo" 
                                 loading="lazy">
                        </div>
                    </div>
                `).join('');
            } catch (err) {
                photosBox.innerHTML = `<p class="col-12 text-center text-danger small py-2">Error.</p>`;
            }
        }
    });

    // Run Initialization
    fetchUserAlbums();
}
